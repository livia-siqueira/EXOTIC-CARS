import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 70%;
  }
`;

