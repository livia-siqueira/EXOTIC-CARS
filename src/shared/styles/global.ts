import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.primary};
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

@media (max-width:  1080px){
    html {
        font-size: 93.75%;
    }
}
@media (max-width:  720px){
    html {
        font-size: 87.5%;
    }
}
    
`;
