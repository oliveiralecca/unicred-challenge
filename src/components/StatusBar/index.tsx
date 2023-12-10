import { useMembersContext } from "../../contexts/MembersContext";
import { StatusBarContainer } from "./styles";

export function StatusBar() {
  const { members } = useMembersContext();
  const total = members?.length;

  return (
    <StatusBarContainer>
      <strong>Cooperados cadastrados</strong>
      <p>{total}</p>
    </StatusBarContainer>
  );
}
