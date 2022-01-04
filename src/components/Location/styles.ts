import styled from "styled-components";

export const Local_Details = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_secondary};
  border-radius: 1.2rem;
  padding: 8px 15px;

  @media (max-width: 1000px) {
    padding: 7px;
    width: 300px;
  }
  @media (max-width: 350px) {
    padding: 7px;
    width: 200px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 1rem;
  padding: 8px;
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.button};
  text-align: center;
  width: 35px;
  height: 35px;
`;

export const Content_Local_Details = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray_dark};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  margin-left: 1rem;
  :first-child {
    margin-right: 4rem;
    @media (max-width: 1000px) {
      margin: 0;
    }
  }

  @media (max-width: 1000px) {
    font-size: 10px;
    margin: 0;
  }
`;
export const Text_Local_Details = styled.span`
  font-size: 1rem;
  margin-left: 0.2rem;
  @media (max-width: 1000px) {
    font-size: 12px;
    margin-right: 5px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
    margin-right: 5px;
  }
`;

export const Text_Local_Details_Date = styled.span`
  font-size: 0.8rem;
  margin-left: 0.2rem;
  @media (max-width: 1000px) {
    font-size: 12px;
    margin-right: 5px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
    margin-right: 5px;
  }
`;
