import styled from "styled-components";
import { colors } from "../../styles/global";

export const Section = styled.section`
  width: 100%;
  padding: 120px 0;
  background-color: ${colors.backgroundSecundary};
  `;

export const Container = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  overflow: hidden;

  @media (min-width: 768px){
    max-width: 1020px;
    padding: 0 1.5rem;
    margin: 0 auto;
    flex-direction: row;
    gap: 2rem;
  }
`;

export const ContainerInfos = styled.div`
 text-align: left;
 width: 100%;

 ul{
  padding-left: 0;
 }
`;

export const Title = styled.h2`
 font-family: "Chillax";
  font-weight: 700;
  font-size: 32px;
  width: 100%;
  margin-bottom: 8px;
  line-height: 44px;


`;

export const Subtitle = styled.p`
  width: 100%;
  max-width: 300px;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;


`;

export const ContainerMaps = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  
  @media (min-width: 768px){
    grid-template-columns: 1fr 1fr;
  }

`;

export const Info = styled.li`
  list-style: none;
  margin: 12px 0;

  img{
    margin-right: 8px;
  }

  a{
    color: ${colors.textColor};
  }

`;





