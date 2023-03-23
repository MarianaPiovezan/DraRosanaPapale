import styled from "styled-components";
import { colors } from "../../styles/global";

export const Container = styled.div`
width:100%;
height: fit-content;
display: flex;
flex-direction: column;
background-color: ${colors.background};
box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
border-radius: 10px;
transform: perspective(1px) translateZ(0);
backface-visibility: hidden;
transition: all 0.3s ease-in-out;
-webkit-font-smoothing: subpixel-antialiased;

:hover{
transform: scale(1.01);
}

`;

export const ContainerImage = styled.div`
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  max-height: 200px;
    img{
    width: 100%;
    transition: all 0.3s ease-in-out;

    :hover{
        transform: scale(1.05)
    }   
}
`;

export const ModalContainerImage = styled.div`
  border-radius: 5px 5px 0 0;
  position: relative;
  overflow: hidden;
    img{
    width: 100%; 
}
`;

export const Content= styled.div`

padding: 1.5rem;
display: flex;
flex-direction: column;
text-align: left;

`;

export const Date= styled.p`
 font-size: 14px;
 margin-bottom: 8px;
`;

export const Title= styled.h2`
font-size: 1rem;
font-weight: 700;
margin-bottom: 8px;
overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical; 
`;

export const Text= styled.p`
overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-line-clamp: 6;
     -webkit-box-orient: vertical; 
`;

export const ModalText= styled.p`
 height: fit-content;
`;

export const ModalBtn = styled.button`
background-color: transparent;
position: absolute;
right: 1.2rem;
top: 1.2rem;
width: 2rem;
height: 2rem;
border-radius: 50%;
border: none;
color: ${colors.background};
display: flex;
align-items: center;
justify-content: center;

:hover{
opacity: 0.5;
}
`;

export const Bar = styled.span`
width: 1.5rem;
height: 3px;
border-radius: 4px;
background-color: ${colors.background};
position: absolute;

:nth-child(1){
  transform: rotate(45deg);
}

:nth-child(2){
  transform: rotate(-45deg);
}


`;