import { useParams } from "react-router-dom";

import { Form } from "../../components/Form";
import { Title } from "../../components/Title";
import { Member, useMembersContext } from "../../contexts/MembersContext";
import { EditContainer } from "./styles";

export function Edit() {
  const { id } = useParams();
  const { members } = useMembersContext();

  const currentMember: Member | undefined = members.find((m) => m.id === id);

  return (
    <EditContainer>
      {currentMember && (
        <>
          <Title text={currentMember.name} />
          <Form kind="edit" currentMember={currentMember} />
        </>
      )}
    </EditContainer>
  );
}
