import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/global";

export const Wrapper = styled.header`
  background-color: ${colors.secondary};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${colors.primary};
  padding: 80px 0;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  align-items: flex-start;
  margin: 0 auto;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 1.5rem;
    flex-direction: row;
    align-items: center;
  }

  p {
    color: ${colors.background};
    margin-bottom: 0;
  }

  ul{
    padding-left: 0;
  }

  li {
    list-style: none;
  }
`;

export const Bounce = keyframes`
      0%{
      transform: translateY(0);
      }
      40%{
        transform: translateY(-10px);
      }
      100%{
        transform: translateY(-2px);
      }
`;

export const Icon = styled.img`
  width: 2rem;
  

  :hover {
    animation: ${Bounce} 1s infinite;
    
  }
`;

export const Logo = styled.img`
  height: 50px;
  margin-bottom: 12px;
`;
