import { Buildings, CaretRight, User } from "phosphor-react";
import { useTheme } from "styled-components";

import { Member } from "../../contexts/MembersContext";
import { CardContainer } from "./styles";

type CardProps = {
  data: Member;
};

export function Card({ data }: CardProps) {
  const theme = useTheme();

  return (
    <CardContainer to={`/cooperado/${data.id}`}>
      <div>
        {data.type === "fisica" ? (
          <User color={theme.colors["gold-700"]} />
        ) : (
          <Buildings color={theme.colors["gold-700"]} />
        )}
        <span>{data.name}</span>
      </div>
      <CaretRight color={theme.colors["gold-700"]} />
    </CardContainer>
  );
}
