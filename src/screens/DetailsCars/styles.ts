import styled from "styled-components";
import { AiOutlineArrowRight } from "../../shared/Icons/index";

export const Container = styled.div`
  background: transparent
    linear-gradient(
      125deg,
      ${({ theme }) => theme.colors.white} 0%,
      ${({ theme }) => theme.colors.primary} 100%
    )
    0% 0% no-repeat padding-box;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 80%;
  margin: 3rem auto;
  height: 100%;
`;

export const Container_Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container_Type = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

export const Name = styled.h1``;

export const Price = styled.span`
  font-size: 2.3rem;
`;

export const Container_Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageUp = styled.img``;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-bottom: 25%;
  right: 10%;
`;
export const Number = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;
export const Color = styled.span`
  text-transform: uppercase;
  font-size: 30px;
`;

type typeColorButton = {
  fullFilling: boolean;
};

export const Button = styled.button<typeColorButton>`
  border: 1px solid ${({ theme }) => theme.colors.gray_dark};
  background: ${({ fullFilling, theme }) =>
    fullFilling ? theme.colors.title_principal : "transparent"};
  border-radius: 25px;
  padding: 1rem;
  height: 50px;
  width: 15%;
  font: normal normal 300 16px/21px Segoe UI;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme, fullFilling }) =>
    fullFilling ? theme.colors.white : theme.colors.title_principal};

`;

export const Container_BookNow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-template-rows: 1fr 0.2fr;
  justify-content: center;
  align-items: center;
`;
export const Area_Change_Car = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

export const Container_Image = styled.div``;

export const AreaCars = styled.div`
  width: 100%;
  margin: 5% auto;
`;
