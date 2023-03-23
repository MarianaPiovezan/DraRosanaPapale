import React from "react";
import { Container, Title, Section, ContainerCard } from "./style";
import { titleSection, Cards } from "./constants";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import card1 from "../../images/icon-nose.png";
import card2 from "../../images/icon-face.png";
import card3 from "../../images/icon-face-syringe.png";
import iconWhatsapp from "../../images/icon-whatsapp.png";

const Specialties = () => {
  return (
    <Section id="specialties">
      <Container>
        <Title>{titleSection}</Title>
        <ContainerCard>
          <Card icon={ card1 } titleCard={ Cards.titleCard1 } contentCard={ Cards.contentCard1 } contentTooltip={ Cards.contentTooltip01 } fontSize="4rem" />
          <Card icon={ card2 } titleCard={ Cards.titleCard2 } contentCard={ Cards.contentCard2 } contentTooltip={ Cards.contentTooltip02 } />
          <Card icon={ card3 } titleCard={ Cards.titleCard3 } contentCard={ Cards.contentCard3 } contentTooltip={ Cards.contentTooltip03 } />
        </ContainerCard>     
        <Button title="Agendar uma consulta" icon={ iconWhatsapp }  iconWidth="24px" />
      </Container>
    </Section>
  );
};

export default Specialties;

