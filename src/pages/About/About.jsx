import React from "react";
import Education from "./Education/Education";
import {Container, Title, Section, ImageContainer, TextContainer } from "./style";
import {titleSection, content, contentBold, imageLabel} from "./constants";
import image from "../../images/rosanna-papale-about.png";

const About = () => {
  return (

    <Section id="about">
      <Container>
        <ImageContainer>
          <img src={ image } alt={ titleSection.titleSecondPart } />
          <p>{imageLabel}</p>
        </ImageContainer>
        <TextContainer>
          <Title>{titleSection.titleFirstPart} <br /> {titleSection.titleSecondPart}</Title>
          <p>{content} </p>
          <p>
            <strong>
              {contentBold}
            </strong>
          </p>
        </TextContainer>
      </Container>
      <Education />
    </Section>
  
  );
};

export default About;
