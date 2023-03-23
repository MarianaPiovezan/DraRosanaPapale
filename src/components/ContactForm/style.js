import styled from "styled-components";
import { colors } from "../../styles/global";

export const Container = styled.div`
width: 100%;
background-color: ${colors.background};
box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);

form{
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
}
    input{
        padding: 0.5rem;
        border-radius: 3px;
        border: none;
        border-bottom: 3px solid ${colors.backgroundSecundary};
        margin-bottom: 12px;
        outline: none;
        transition: all 0.3s ease-in-out;
    :focus{
        border-bottom: 3px solid ${colors.primary};
    }
    }

    textarea{
        padding: 0.5rem;
        border-radius: 5px;
        border: none;
        margin-bottom: 12px; 
        outline: none;
        border-bottom: 3px solid ${colors.backgroundSecundary};
        transition: all 0.3s ease-in-out;

        :focus{
        border-bottom: 3px solid ${colors.primary};
    }

}
`;

export const Title = styled.p`
font-weight: 700;
`;

export const Subtitle = styled.p`
`;

export const ContainerMap = styled.div`
width: 100%;
height: 400px;
`;