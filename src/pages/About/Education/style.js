import styled from "styled-components";
import { colors } from "../../../styles/global";

export const Article = styled.article`
  width: 100vw;
  background-color: ${colors.backgroundAlt};
  border-radius: 50px 0;
  `;

export const Container = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 2rem 0;
  gap: 2rem;
  align-content:center;
  align-items: center;
  overflow: hidden;

  @media (min-width: 768px){
    max-width: 1020px;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    align-items: center;
  }
`;


export const Title = styled.h2`
 font-family: "Chillax";
  font-weight: 700;
  font-size: 32px;
  width: 100%;
  margin-bottom: 1.5rem;
  line-height: 44px;
  text-align: center;

`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-content:center;

  @media (min-width: 768px){
   grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1020px){
   grid-template-columns: repeat(3, 1fr);
  }
  `;





