import styled from "styled-components";

export const Container = styled.section`
  height:100%;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 120px;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  @media (min-width: 768px){
    flex-direction: row;
    max-width: 1020px;
    margin: 0 auto;
    align-items: center;
    padding: 0 1.5rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

`;

export const Title = styled.h2`
font-family: "Chillax";
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 8px;
  line-height: 44px;
`;

export const TextContent = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 350px;
  margin-bottom: 12px;
  line-height: 22px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageHome = styled.img`
  width: 90%;
  @media (min-width: 768px){
    margin-top: 6rem;
  }
  `;