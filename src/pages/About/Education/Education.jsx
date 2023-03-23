import React from "react";
import {Article, Container, Title, CardsContainer} from "./style";
import CardEducation from "../../../components/CardEducation/CardEducation";
import icon from "../../../images/icon-medal.png";
import { data, title} from "./constants";

const Education = () => {
  return (
    <Article>
      <Container>
        <Title>{ title }</Title>
        <CardsContainer>
          {data.map((e) => {
            return (
              <CardEducation key={ e.content } icon={ icon } { ...e } />
            );
          })}
        </CardsContainer>
      </Container>
    </Article>
  );
};

export default Education;