import { Wrapper, Container, Logo, Icon } from "./style";
import LogoImg from "../../images/logo-white.png";
import iconInstagram from "../../images/icon-instagram.png";
import React from "react";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Logo src={ LogoImg } />
          <p>CNPJ: 41.019.881/0001-70</p>
          <br />
          <p>© Copyright 2022 Dra. Rosanna Papele</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <ul>
          <li>
            <a href="">
              <Icon src={ iconInstagram } alt="Instagram" title="Instagram" />
            </a>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default Footer;
