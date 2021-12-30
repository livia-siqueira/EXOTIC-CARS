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
`;
export const Number = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;
export const Color = styled.span`
  text-transform: uppercase;
  font-size: 30px;
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.gray_dark};
  background: transparent;
  border-radius: 23px;
  padding: 1rem;
`;

export const Area_Change_Car = styled.div`
  display: flex;
`;

export const ButtonBack = styled.button`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray_dark};
  border-radius: 20px;
`;

export const ButtonGo = styled.button`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray_dark};
  border-radius: 20px;
`;

export const Container_Image = styled.div`

`

export const AreaCars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 5% auto;
`;
