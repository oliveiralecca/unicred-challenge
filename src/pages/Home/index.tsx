import { PlusCircle } from "phosphor-react";

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { EmptyState } from "../../components/EmptyState";
import { StatusBar } from "../../components/StatusBar";
import { useMembersContext, Member } from "../../contexts/MembersContext";
import { HomeContainer, MembersContainer } from "./styles";

export function Home() {
  const { members } = useMembersContext();

  return (
    <HomeContainer>
      <Button text="Cadastrar novo" path="/cadastrar">
        <PlusCircle size={20} />
      </Button>
      <StatusBar />
      {members && members.length > 0 ? (
        <MembersContainer>
          {members.map((member: Member) => {
            return <Card key={member.id} data={member} />;
          })}
        </MembersContainer>
      ) : (
        <EmptyState />
      )}
    </HomeContainer>
  );
}
