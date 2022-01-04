import { Swiper, SwiperSlide } from "swiper/react";
import * as s from "./styles";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
// Import Swiper styles

import { Photo } from "../../shared/types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "../../shared/Icons";
import { useRef } from "react";

export const SliderCars = (props: {
  ImagesCar: Photo[] | null;
  handleGoCar(index: number): void;
  indexActive: number;
}) => {
  const images = props.ImagesCar;
  const btNext = useRef<HTMLButtonElement>(null);
  const btPrev = useRef<HTMLButtonElement>(null);

  return (
    <>
      {images?.length !== 1 && (
        <>
          <s.ButtonsSlider direction="left" ref={btPrev}>
            <AiOutlineArrowLeft color="white" size={24} />
          </s.ButtonsSlider>
          <s.ButtonsSlider direction="right" ref={btNext}>
            <AiOutlineArrowRight color="white" size={24} />
          </s.ButtonsSlider>
        </>
      )}
      <s.Container>
        <s.Slider
          modules={[Navigation]}
          loop={true}
          centeredSlides={images?.length === 2 ? false : true}
          slidesPerView={images?.length === 2 ? 2 : 1}
          spaceBetween={46}
          slideToClickedSlide
          onTransitionEnd={(swiper) => props.handleGoCar(swiper.realIndex)}
          navigation={{
            prevEl: btPrev.current,
            nextEl: btNext.current,
          }}
          breakpoints={{
            1000: {
              slidesPerView: images?.length,
              width: 1000
            },
          }}
        >
          {images?.map((imageDetails, index) => {
            const hasBig = index === props.indexActive;
            console.log(hasBig);
            return (
              <SwiperSlide key={imageDetails.color} style={{ height: "auto" }}>
                <s.Slide>
                  <s.Item_Card isActive={hasBig}>
                    <s.Image src={imageDetails.photo} />
                  </s.Item_Card>
                </s.Slide>
              </SwiperSlide>
            );
          })}
        </s.Slider>
      </s.Container>
    </>
  );
};