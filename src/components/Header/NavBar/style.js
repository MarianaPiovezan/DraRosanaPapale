import styled from "styled-components";
import {colors} from "../../../styles/global";

export const Wrapper = styled.header`
  background-color: ${colors.background};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${colors.primary};
  position: fixed;
  z-index: 2;
  top: 0;
  

  ::after{
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: -22px;
    border-bottom: 20px solid ${colors.secondary};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`;

export const Container = styled.div`
   width: 100%;
   height: 80px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0 auto;
   margin-left: 1.5rem;
   margin-right: 1.5rem;
   overflow: hidden;

   @media (min-width: 768px){
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

`;

export const Logo = styled.img`
    height: 50px;
 
`;

