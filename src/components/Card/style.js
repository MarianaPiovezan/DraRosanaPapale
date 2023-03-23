import styled from "styled-components";
import { colors } from "../../styles/global";

export const Container = styled.div`
  height: 450px;
  background-color: ${colors.background};
  padding: 2rem 2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 0.25rem solid ${colors.primary};
  border-radius: 0.3rem 0.3rem 0 0;
`;

export const IconCard = styled.img`
  display: block;
  height: 90px;
  padding-bottom: 1.5rem;
  margin: 0 auto;
`;

export const TextContent = styled.div`
  text-align: left;
  width: 100%;

  h2 {
    color: ${colors.secondary};
    margin-bottom: 8px;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
    font-weight: 700;
  }

  ul {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  li {
    display: flex;
    align-items: flex-start;
    text-align: left;
    font-size: ${({ subtitleSize }) => (subtitleSize ? subtitleSize : "1rem")};
    list-style: none;
    transition: all 0.5s ease-in-out;
    border: 3px solid ${colors.background};
    border-radius: 10px;
    

    :hover {
      border: 3px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.09);
      cursor: pointer;
      padding: 4px 8px;
    }
  }
`;

export const Icon = styled.img`
  width: 1rem;
  padding-top: 4px;
  margin-right: 8px;
`;
