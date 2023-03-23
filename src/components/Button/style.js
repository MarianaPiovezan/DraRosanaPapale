import styled from "styled-components";
import {colors} from "../../styles/global";

export const ButtonContainer = styled.button`
    background: ${colors.primary};
    border-radius: 5px;
    color: #fff;
    padding:12px 24px;
    width: fit-content;
    transition: all 0.2s ease-in-out;
    border: none;

    a{
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 600;
        font-size: 1rem;
    }

    img{
        width: ${({ iconWidth }) => iconWidth ? iconWidth : ""};
        margin-right: 8px;
    }
    
    
    :hover{
        opacity: 0.6;
        cursor: pointer;
    }

        
   `;
