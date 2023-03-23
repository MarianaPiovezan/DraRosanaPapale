import styled from "styled-components";
import { colors } from "../../../styles/global";

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${colors.secondary};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.5s linear;
    :nth-child(1) {
      transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      transform: ${({ open }) => open ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;