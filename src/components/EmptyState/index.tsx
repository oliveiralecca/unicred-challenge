import { FileText } from "phosphor-react";

import { EmptyStateContainer } from "./styles";

export function EmptyState() {
  return (
    <EmptyStateContainer>
      <FileText size={60} />
      <strong>Nenhum cooperado cadastrado</strong>
      <p>Cadastre e veja-os aqui</p>
    </EmptyStateContainer>
  );
}
