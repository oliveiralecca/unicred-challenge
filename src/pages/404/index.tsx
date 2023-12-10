import { WarningOctagon } from "phosphor-react";

import { Button } from "../../components/Button";
import { Page404Container } from "./styles";

export function Page404() {
  return (
    <Page404Container>
      <WarningOctagon size={100} />
      <strong>Página não encontrada</strong>
      <p>Tente novamente</p>
      <div>
        <Button text="Voltar ao Início" path="/" />
      </div>
    </Page404Container>
  );
}
