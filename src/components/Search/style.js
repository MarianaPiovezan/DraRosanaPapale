import styled from "styled-components";
import { colors } from "../../styles/global";


export const Container = styled.div`
width: 100%;
max-width: 600px;
position: relative;
`;

export const Input = styled.input`
  position: relative; 
  width: 100%;
  background: ${colors.background};
  border-radius: 5px;
  color: ${colors.textColor};
  padding: 6px 12px 6px 42px;
  transition: all 0.5s ease-in-out;
  outline: none;
  border: none;
  border-bottom: solid 4px ${colors.background};

  ::placeholder {
    color: ${colors.desability};
  }

  

  :focus {
    border-bottom: solid 4px ${colors.primary};
  
  }
`;

export const Icon = styled.img`
  width: ${({ iconWidth }) => (iconWidth ? iconWidth : "")};
  margin-right: 8px;
  position: absolute;
  left: 8px;
  top: 6px;
`;
