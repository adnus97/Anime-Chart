import { styled } from "../../stiches.theme";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css/free-mode";

export const SliderContainer = styled("div", {
  display: "flex",
  position: "absolute",
  bottom: "0",
  maxHeight: "5rem",
  width: "calc(100% - 20rem)",
  alignItems: "center",

  padding: "$2",
  variants: {
    size: {
      1: {
        width: "calc(100% - 20rem)",
      },
      2: {
        width: "calc(100% - 15rem)",
      },
      3: {
        width: "calc(100% - 10rem)",
      },
      4: {
        width: "50%",
      },
    },
  },
});

export const SwiperContainer = styled(Swiper, {
  width: "100%",
  height: "100%",
  fontSize: "$1",
  color: "$white",
  display: "flex",
  "> .swiper-button-next,.swiper-button-prev": {
    color: "$green500",
    "&::after": {
      fontSize: "$2",
      position: "absolute",
    },
  },
  "> .swiper-button-next": {
    right: "-5px",
  },
  "> .swiper-button-prev": {
    left: "-5px",
  },
});

export const SwiperSlideStyle = styled("div", {
  textAlign: "center",
  padding: "$1",
  border: "1px solid $red500",
  borderRadius: ".6rem",
  fontSize: "1rem",
});
