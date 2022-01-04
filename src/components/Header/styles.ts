import styled from 'styled-components'


export const Container = styled.div`

width: 100%;
height: 90px;
background-color: ${({theme}) => theme.colors.white};
box-shadow: ${({theme}) => theme.colors.gray_ligth} 0 10px 30px;

`;

//${({theme}) => theme.colors.white

export const TitlePrincipal = styled.h1`
text-transform: uppercase;
font-size: 2rem;
color: ${({theme}) => theme.fonts.primary};
font-weight: 600;
`;

export const Container_Titles = styled.div`
display: flex;
justify-content: center;
align-items: inherit;
`

export const Container_Buttons = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

`

export const TitleSecondary = styled.h4`
text-transform: uppercase;
font-size: 1rem;
margin-top: 0.8rem;
margin-left: 8px;
font-weight: 100;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 1rem;
`;

export const Local_Details = styled.div`
display: flex;
justify-content: space-around;
background-color: ${({theme}) => theme.colors.gray_secondary};
border-radius: 1.2rem;
padding: 8px 15px;

`

export const Content_Local_Details= styled.span`
display: flex;
align-items: center;
color: ${({theme}) => theme.colors.gray_dark};
font-family: ${({theme}) => theme.fonts.primary};
font-weight: 600;
margin-left: 1rem;
:first-child{
    margin-right: 4rem;
}
`
export const Text_Local_Details = styled.span`
    font-size: 1rem;
    margin-left: 0.2rem;
`

export const Text_Local_Details_Date = styled.span`
    font-size: 0.8rem;
    margin-left: 0.2rem;
`