import { Form } from "../../components/Form";
import { Title } from "../../components/Title";
import { RegisterContainer } from "./styles";

export function Register() {
  return (
    <RegisterContainer>
      <Title text="Cadastrar cooperado" />
      <Form kind="register" />
    </RegisterContainer>
  );
}
