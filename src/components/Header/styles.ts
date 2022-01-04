import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.gray_ligth} 0 10px 30px;
  @media (max-width: 1000px) {
  }
`;

export const TitlePrincipal = styled.h1`
  text-transform: uppercase;
  font-size: 2rem;
  color: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
`;

export const Container_Titles = styled.div`
  display: flex;
  justify-content: center;
  align-items: inherit;
`;

export const Container_Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

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
  @media (max-width: 1000px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 50%;
    margin: 0 auto;
  }
  @media (max-width: 360px) {
    width: 100%;
    justify-content: space-evenly;
    margin: 0 auto;
  }
`;

export const Container_Menu = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray_ligth};
  border-radius: 0 0 10px 10px;
  position: absolute;
  top: 8%;
  right: 15%;

  @media (max-width: 1000px) {
    top: 8%;
  right: 25%;
  }
`;

export const Content_Menu = styled.div`
  border-radius: 50px;
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.button};
  margin-right: 12px;
`;

export const Button = styled.button`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_ligth};
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.button};
`;

export const AreaSearch = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const AreaSearchClicked = styled.div`
  position: absolute;
  top: 8%;
  right: 15%;
`;
