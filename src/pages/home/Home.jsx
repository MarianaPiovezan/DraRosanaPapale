import React from "react";
import {Container, Title, TextContent, TextContainer, ImageContainer, ImageHome} from "./style";
import HomeImg from "../../images/rosanna-papale-home.png";
import {titleSection, titleSectionSecondPart, subtitleSection } from "./constants";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <Container id="home">
      <TextContainer>
        <Title>{titleSection} <br /> {titleSectionSecondPart}</Title>
        <TextContent>{subtitleSection}
        </TextContent>
        <Button title="Conheça meu perfil profissional" link="#about" />
      </TextContainer>
      <ImageContainer>
        <ImageHome src={ HomeImg } />
      </ImageContainer>
    </Container>
  );
};

export default Home;
