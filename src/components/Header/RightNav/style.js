import styled from "styled-components";
import { colors } from "../../../styles/global";

export const Row = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0;
  padding-left: 0git ;

 li{
    font-weight:600;
    font-size: 16px;
    list-style: none;
    cursor: pointer;    
}

a{
  position: relative;

  ::before{
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    border-radius: 4px;
    background-color: ${colors.secondary};
    bottom: -2px;
    left: 0;
    transition: width .3s ease-in-out;
  }

  :hover::before{
    width: 100%;
    
  }
}

    @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${colors.background};
    position: fixed;
    transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

  
  }
  a {
      color: ${colors.textColor};
    }
`;