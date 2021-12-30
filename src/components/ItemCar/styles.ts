import styled from "styled-components";

export const Container = styled.button`
  width: 287px;
  height: 223px;
  background-color: ${({ theme }) => theme.colors.secundary};
  border: 0;
  border-radius: 20px;
  margin: 16px;

  :hover {
    border-radius: 20px;
    background: transparent
      linear-gradient(
        52deg,
        ${({ theme }) => theme.colors.gradient_principal} 0%,
        ${({ theme }) => theme.colors.gradient_secundary} 100%
      )
      0% 0% no-repeat;
    
  }
`;

export const Container_TextHover = styled.div`
    display: flex;
`

export const Text_BookNow = styled.span`
  display: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  :hover{
    width: 105%;
    height: 105%;
  }
`;

export const Container_Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Text_Brand = styled.span`
  color: ${({ theme }) => theme.colors.title_principal};
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Container_Image = styled.div`
  background: transparent;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;

`;

export const Image = styled.img`
  width: 100%;
`;

export const Text_Model = styled.span`
  color: ${({ theme }) => theme.colors.title_principal};
  text-transform: uppercase;
  font-weight: 0;
`;
export const Text_Price = styled.span`
  color: ${({ theme }) => theme.colors.title_principal};
  font-weight: bold;
  font-size: 1.3rem;
  text-align: right;
`;

export const Container_Price = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`;
export const Icon = styled.span``;

export const Text_Period = styled.span`
  font-size: 1.2rem;
  font-weight: lighter;
`;

export const Simbol = styled.span`
  font-size: 1rem;
`;
