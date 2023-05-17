import React from "react";
import { HeaderContainer, Logo } from "./styles";

import LogoIcon from "../../assets/images/logo.svg";

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo src={LogoIcon} alt="Pokedex" />
  </HeaderContainer>
);

export default Header;
