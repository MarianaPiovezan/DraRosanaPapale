import {Wrapper, Container, Logo} from "./style";
import LogoImg from "../../../images/logo-color.png";
import Burger from "../Burger/Burger";
import React from "react";

const Header = () => {
  return (
    <Wrapper> 
      <Container>
        <Logo src={ LogoImg } />
        <Burger />
      </Container>
    </Wrapper>
  );
};

export default Header;