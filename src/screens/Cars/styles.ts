import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media(max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`