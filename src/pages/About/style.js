import styled from "styled-components";
import { colors } from "../../styles/global";

export const Section = styled.section`
  width: 100vw;
  background-color: ${colors.background};
  border-bottom: 2rem solid ${colors.background};
  `;

export const Container = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 120px 0 60px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-content:center;
  align-items: center;
  overflow: hidden;

  @media (min-width: 768px){
    max-width: 1020px;
    margin: 0 auto;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContainerFormation = styled.article`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 120px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-content:center;
  align-items: center;
  overflow: hidden;

  @media (min-width: 768px){
    max-width: 1020px;
    margin: 0 auto;
    align-items: center;
    padding: 0 1.5rem;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
  img{
    width:100%;
  }

  p{
    text-align: center;
    max-width: 400px;
  }
`;
export const TextContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
 font-family: var(--title);
  font-weight: 700;
  font-size: 32px;
  width: 100%;
  margin-bottom: 8px;
  line-height: 44px;
  text-align: left;

`;





