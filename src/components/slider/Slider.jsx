import {
  SliderContainer,
  SwiperContainer,
  SwiperSlideStyle,
} from "./slider.style";
import { SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Navigation } from "swiper";
import "swiper/css/bundle";
import { useRef } from "react";
import { darkTheme } from "../../stiches.theme";
export const Slider = (props) => {
  const sliders = props.genre.map((el, index) => {
    return (
      <SwiperSlide key={index}>
        <SwiperSlideStyle>{el}</SwiperSlideStyle>
      </SwiperSlide>
    );
  });

  return (
    <SliderContainer
      className={props.toggle ? darkTheme : ""}
      size={{
        "@initial": "1",
        "@bp1": "2",
        "@bp2": "4",
        "@bp3": "1",
        "@bp4": "3",
      }}
    >
      <SwiperContainer
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={2}
      >
        {sliders}
      </SwiperContainer>
    </SliderContainer>
  );
};
