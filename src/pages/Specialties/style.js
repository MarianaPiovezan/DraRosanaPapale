import styled from "styled-components";
import { colors } from "../../styles/global";

export const Section = styled.section`
  width: 100vw;
  background-color: ${colors.backgroundAlt};
  `;

export const Container = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  overflow: hidden;

  @media (min-width: 768px){
    max-width: 1020px;
    margin: 0 auto;
    align-items: center;
  }
`;

export const Title = styled.h2`
 font-family: "Chillax";
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 8px;
  line-height: 44px;
  text-align: center;

  @media (min-width: 768px){
    width: 100%;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  display:grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items:center;

  @media (min-width: 768px){
  grid-template-columns: 1fr 1fr 1fr;

  }
`;



