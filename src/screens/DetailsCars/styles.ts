import styled from "styled-components";

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
  margin-left: 10px;
  @media (max-width: 370px) {
   flex-direction: column;
   
  }
`;

export const Container_Type = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

export const ImageBrand = styled.img`
  @media (max-width: 1400px) {
    width: 80px;
    height: 100px;
    margin-left: 3rem;
    margin-bottom: 20px;
  }
`;

export const Name = styled.h1`
  @media (max-width: 1400px) {
    font-size: 1rem;
  }
`;

export const Price = styled.span`
  font-size: 2.3rem;
  @media (max-width: 1400px) {
    font-size: 1.2rem;
  }
`;

export const Container_Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 1000px){
    flex-direction: column;

  }
`;

export const ImageUp = styled.img`
  @media (max-width: 1400px) {
    width: 380px;
    height: 180px;
  }
  @media (max-width: 400px) {
    width: 280px;
    height: 150px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 60%;
  right: 10%;

  @media (max-width: 1000px) {
    margin: 0;
    font-size: 15px;
  }

  @media (max-width: 600px) {
    right: 20%;
    bottom: 65%;
    font-size: 15px;
   
  }
  @media (max-width: 370px) {
    right: 10%;
    bottom: 65%;
  }
`;
export const Number = styled.span`
  font-size: 3rem;
  font-weight: bold;

  @media (max-width: 370px) {
   font-size: 1rem;
  }
`;
export const Color = styled.span`
  text-transform: uppercase;
  font-size: 30px;
  @media (max-width: 370px) {
   font-size: 1rem;
  }
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
  @media (max-width: 1400px) {
    font-size: 12px;
  }
  @media (max-width: 370px) {
   font-size: 8px;
   width: 45%;
   padding: 2px;
   height: 30px;
   border-radius: 10px;
  }
  @media (max-width: 900px) {
    font-size: 1rem;
   width: 25%;
   padding: 2px;
   height: 30px;
   border-radius: 10px;
  }
`;

export const Container_BookNow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 -200px;
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
