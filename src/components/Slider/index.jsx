/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";

// eslint-disable-next-line react/prop-types
function Slider({ info, title }) {
  console.log(info, title);
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        slidesPerView={"auto"}
        spaceBetween={10}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{ color: "#ffffff" }}>{item.original_title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
