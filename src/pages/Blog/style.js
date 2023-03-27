import styled from "styled-components";
import { colors } from "../../styles/global";

export const Section = styled.section`
  width: 100%;
  padding: 120px 0;
  background-color: ${colors.backgroundAlt};
  
  `;

export const Container = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  overflow: hidden;

  @media (min-width: 768px){
    max-width: 1020px;
    padding: 0 1.5rem;
    margin: 0 auto;
    align-items: center;
  }
`;

export const Title = styled.h2`
 font-family: var(--title);
  font-weight: 700;
  font-size: 32px;
  width: 100%;
  margin-bottom: 8px;
  line-height: 44px;
  text-align: center;

`;

export const ContainerCards = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  
  @media (min-width: 768px){
    grid-template-columns: 1fr 1fr 1fr;
  }

`;





