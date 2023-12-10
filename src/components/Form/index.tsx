import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Pencil, PlusCircle, Trash } from "phosphor-react";
import * as zod from "zod";

import { Member, useMembersContext } from "../../contexts/MembersContext";
import { Button } from "../Button";
import {
  DefaultInput,
  FormContainer,
  FieldContainer,
  SmallFieldsBox,
  RadioContainer,
  RadioFieldsBox,
  ErrorMessage,
  ButtonsContainer,
  FeedbackContainer,
  BackToHomeLink,
} from "./styles";

const newMemberFormValidationSchema = zod.object({
  name: zod.string().min(1),
  type: zod.enum(["fisica", "juridica"] as const),
  doc: zod.string().min(1),
  birth: zod.string().min(1),
  income: zod.number().optional(),
  phone: zod.string().optional(),
});

type NewMemberFormData = zod.infer<typeof newMemberFormValidationSchema>;

type FormProps = {
  kind: "register" | "edit";
  currentMember?: Member;
};

export function Form({ kind, currentMember }: FormProps) {
  const {
    addNewMember,
    editMember,
    removeMember,
    error,
    feedback,
    clearFeedBackAndErrors,
  } = useMembersContext();

  const { handleSubmit, watch, reset, register } = useForm<NewMemberFormData>({
    resolver: zodResolver(newMemberFormValidationSchema),
    defaultValues: {
      name: currentMember ? currentMember.name : "",
      type: currentMember ? currentMember.type : "fisica",
      doc: currentMember ? currentMember.doc : "",
      birth: currentMember ? currentMember.birth : "",
      income: currentMember ? currentMember.income : 0,
      phone: currentMember ? currentMember.phone : "",
    },
  });

  function handleCreateOrEditMember(data: NewMemberFormData) {
    if (kind === "register") {
      addNewMember(data);
      reset();
    } else if (kind === "edit") {
      editMember(data);
    }
  }

  const name = watch("name");
  const doc = watch("doc");
  const birth = watch("birth");
  const income = watch("income");
  const phone = watch("phone");
  const type = watch("type");

  const isSubmitDisabled = !name.trim() || !doc.trim() || !birth.trim();
  const isOnErrorState = !!error && !doc;
  const isEditDisabled =
    name === currentMember?.name &&
    birth === currentMember?.birth &&
    income === currentMember?.income &&
    phone === currentMember?.phone;

  return (
    <>
      <FormContainer onSubmit={handleSubmit(handleCreateOrEditMember)}>
        {kind === "register" && (
          <RadioFieldsBox>
            <RadioContainer>
              <DefaultInput
                id="pf"
                type="radio"
                value="fisica"
                {...register("type")}
              />
              <label htmlFor="pf">Pessoa Física</label>
            </RadioContainer>
            <RadioContainer>
              <DefaultInput
                id="pj"
                type="radio"
                value="juridica"
                {...register("type")}
              />
              <label htmlFor="pj">Pessoa Jurídica</label>
            </RadioContainer>
          </RadioFieldsBox>
        )}

        <FieldContainer>
          <label htmlFor="name">
            Nome <span title="Campo obrigatório">*</span>
          </label>
          <DefaultInput
            id="name"
            placeholder="Nome do cooperado"
            {...register("name")}
          />
        </FieldContainer>

        <SmallFieldsBox>
          <FieldContainer>
            <label htmlFor="cpf">
              {type === "fisica" ? "CPF" : "CNPJ"}{" "}
              <span title="Campo obrigatório">*</span>
            </label>
            <DefaultInput
              id="cpf"
              placeholder="Apenas números"
              $error={isOnErrorState}
              disabled={kind === "edit"}
              {...register("doc")}
            />
            {isOnErrorState && <ErrorMessage>{error}</ErrorMessage>}
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="birth">
              {type === "fisica"
                ? "Data de nascimento"
                : "Data de constituição"}{" "}
              <span title="Campo obrigatório">*</span>
            </label>
            <DefaultInput id="birth" type="date" {...register("birth")} />
          </FieldContainer>
        </SmallFieldsBox>

        <SmallFieldsBox>
          <FieldContainer>
            <label htmlFor="income">
              {type === "fisica" ? "Renda" : "Faturamento"}
            </label>
            <DefaultInput
              id="income"
              type="number"
              step={10}
              placeholder="0"
              {...register("income", { valueAsNumber: true })}
            />
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="phone">DDD + Telefone</label>
            <DefaultInput
              id="phone"
              placeholder="Apenas números"
              {...register("phone")}
            />
          </FieldContainer>
        </SmallFieldsBox>

        {kind === "register" ? (
          <Button text="Cadastrar" disabled={isSubmitDisabled} type="submit">
            <PlusCircle size={20} />
          </Button>
        ) : (
          <ButtonsContainer>
            <Button
              text="Excluir"
              type="button"
              onClick={() => removeMember(currentMember)}
            >
              <Trash size={20} />
            </Button>
            <Button text="Editar" disabled={isEditDisabled} type="submit">
              <Pencil size={20} />
            </Button>
          </ButtonsContainer>
        )}
      </FormContainer>

      {feedback && (
        <FeedbackContainer>
          <CheckCircle size={30} />
          {feedback.message}
        </FeedbackContainer>
      )}

      <BackToHomeLink to="/" onClick={clearFeedBackAndErrors}>
        Início
      </BackToHomeLink>
    </>
  );
}
