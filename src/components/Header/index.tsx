import { Link } from "react-router-dom";

import Logo from "../../assets/unicred-logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src={Logo}
          alt="Logo da Unicred com o nome da marca escrito nas cores verde e dourado e um pinheiro dourado do lado direito"
        />
      </Link>
    </HeaderContainer>
  );
}
