import styled from "styled-components";

interface propsContainer {
    isBorder: boolean
}

export const Container = styled.button<propsContainer>`
color: ${({theme}) => theme.colors.button};
border: ${({isBorder, theme}) => isBorder ? theme.colors.button : theme.colors.white} 1px solid;
background-color: transparent;
border-radius: ${({isBorder}) => isBorder ? '0.5rem' : 0};
font-size: 1rem;
font-weight: bold;
margin-left: 1rem;
padding: 0.5rem 0.8rem;
`;