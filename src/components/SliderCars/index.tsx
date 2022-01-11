import { SwiperSlide } from "swiper/react";
import * as s from "./styles";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { Photo } from "../../shared/types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "../../shared/Icons";
import { useRef } from "react";

export const SliderCars: React.FC<{
  ImagesCar: Photo[] | null;
  handleGoCar(index: number): void;
  indexActive: number;
}> = ({ ImagesCar, handleGoCar, indexActive }) => {
  const images : Photo[] | null = ImagesCar;
  const btNext = useRef<HTMLButtonElement>(null);
  const btPrev = useRef<HTMLButtonElement>(null);
  const qtdImage : number = images ? images.length : 0;

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
          spaceBetween={qtdImage === 2 ? 20 : qtdImage === 3 ? 80 : 0}
          slideToClickedSlide
          onTransitionEnd={(swiper) => handleGoCar(swiper.realIndex)}
          navigation={{
            prevEl: btPrev.current,
            nextEl: btNext.current,
          }}
          breakpoints={{
            1100: {
              slidesPerView: images?.length,
            },
            1000: {
              slidesPerView: 2,
            },
            360: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 1,
            },
            1340: {
              slidesPerView: images?.length,
            },
          }}
        >
          {images?.map((imageDetails, index) => {
            const hasBig : boolean = index === indexActive;
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
