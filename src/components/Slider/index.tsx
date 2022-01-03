import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Car, Photo } from "../../shared/types";
import Slider, { Settings } from "react-slick";
import * as s from "./styles";
import { useEffect, useRef, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "../../shared/Icons/index";
import React from "react";
export const Carousel = (props: {
  ImagesCar: Photo[] | null;
  handleGoCar(): void;
  handleBackCar(): void;
}) => {
  const images = props.ImagesCar;
  const customSlider = useRef();
  const sliderRef = React.useRef<Slider>(null);
  const slider1 = useRef(null);
  const slider2 = useRef();
  const [us, setUs] = useState<Slider | null>(null);


  const sliderSettings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: us ? us : undefined,
    afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    nextArrow: (
      <s.Button onClick={us?.slickPrev}>
        {" "}
        <AiOutlineArrowLeft />
      </s.Button>
    ),
    prevArrow: (
      <s.Button onClick={us?.slickNext}>
        <AiOutlineArrowRight />
      </s.Button>
    ),
  };

  console.log(images);
  return (
    <s.Container>
        <s.Button onClick={us?.slickPrev}>
        {" "}
        <AiOutlineArrowLeft />
      </s.Button>
      <s.Button onClick={us?.slickNext}>
        <AiOutlineArrowRight />
      </s.Button>
      <Slider ref={setUs} {...sliderSettings}>
        {images !== null &&
          images.map((photo, index) => (
            <s.Item_Image key={photo.color}>
              <s.Image src={photo.photo} />
            </s.Item_Image>
          ))}
      </Slider>
    </s.Container>
  );
};
