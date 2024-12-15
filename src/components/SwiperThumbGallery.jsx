import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwipeBtns from "../components/SwipeBtns";
import car from "../assets/images/lambo1.webp";
import car2 from "../assets/images/hd1-transformed.png";
import car3 from "../assets/images/hd2-transformed.png";
import car4 from "../assets/images/hd3-transformed.png";
import car5 from "../assets/images/hd4-transformed.png";
import car6 from "../assets/images/hd5-transformed.png";

function SwiperThumbGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const cars = [car, car2, car5, car6, car3, car4];
  return (
    <div className="w-full lg:w-[60%] md:min-h-[480px] rounded-xl">
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {cars.map((car, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={car} />
              </SwiperSlide>
            );
          })}
          <SwipeBtns className={"opacity-100"} />
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper"
        >
          {cars.map((car, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={car} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
}

export default SwiperThumbGallery;
