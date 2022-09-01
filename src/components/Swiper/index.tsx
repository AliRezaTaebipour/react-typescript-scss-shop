import { FC, ReactElement } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { ISlider } from "../../types/slider";

const Slider: FC<ISlider> = ({ spaceBetween, slidesPerView, slides }) => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    // when window width is >= 993px
    993: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      autoplay={true}
      speed={500}
      loop={true}
      breakpoints={breakpoints}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div>{slide}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
