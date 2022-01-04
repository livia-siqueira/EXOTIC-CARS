import styled from "styled-components";
import { Swiper } from "swiper/react";

interface image {
  isActive: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  position: absolute;
  left: 20%;
  top: 20%;
  right: 0;
  width: 100%;
`;

export const Button = styled.button``;

export const Slider = styled(Swiper)`
  height: 25rem;
  margin-bottom: 2rem;
  .swiper-wrapper {
    align-items: center;
  }
  @media(max-width: 300px){
      width: 120px;
      height: auto;
      margin: 0 auto;
  }
`;

export const Slide = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 360px){
      width: 150px;
      margin: 0;
  }
`;

type Button = {
  direction: string;
};

export const Item_Card = styled.div<image>`
  width: ${({ isActive }) => (isActive ? "20rem" : "15rem")};
  height: ${({ isActive }) => (isActive ? "15rem" : "11rem")};
  margin-top: ${({ isActive }) => (isActive ? "-10%" : "0")};
  padding: 3.8rem;
  border-radius: 0.8rem;
  box-shadow: 0px 2px 30px #0000001a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.1s ease-in-out;
  background: ${({ isActive }) =>
    isActive
      ? "linear-gradient(90deg, #b9baf1 0%, #e0d3ef 100%)"
      : ({ theme }) => theme.colors.primary};
`;

export const ButtonsSlider = styled.button<Button>`
  position: absolute;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.title_principal};
  width: 4rem;
  height: 4rem;
  ${({ direction }) => (direction === "left" ? "left: 0" : "right: 0")};
  border: none;
  border-radius: 50%;
  box-shadow: 0px 5px 15px #0000001a;
  margin-left: 10%;
  margin-right: 10%;
`;

export const Container_Button = styled.button`
  width: 80%;
`;
