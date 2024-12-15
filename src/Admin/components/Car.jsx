import { Link } from "react-router-dom";
import car from "../../assets/images/lambo1.webp";
import car2 from "../../assets/images/hd1-transformed.png";
import car3 from "../../assets/images/hd2-transformed.png";
import car4 from "../../assets/images/hd3-transformed.png";
import { Button } from "@nextui-org/react";
import seatIMG from "../../assets/images/Seating.png";
import speedIMG from "../../assets/images/speed.png";
import { IoPricetagsOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { PiGasPumpLight } from "react-icons/pi";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import SwipeBtns from "../../components/SwipeBtns";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const cars = [car, car2, car3, car4];

function Car({}) {
  return (
    <div className=" col-span-1 group rounded-xl border-2 overflow-hidden border-gold">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        loop={true}
        className="img-holder w-full max-h-[350px] overflow-hidden mb-[20px]"
        pagination={{ clickable: true }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index} className="">
              <img
                src={car}
                className="max-w-full h-full relative z-[1] object-cover object-center"
                alt="car"
              />
            </SwiperSlide>
          );
        })}
        <SwipeBtns className={"group-hover:opacity-100 transition-opacity"} />
      </Swiper>
      <div className="px-[20px]">
        <div className=" px-[20px] flex items-center justify-between gap-[10px]">
          <Link to="/dashboard/cars/view-car">
            <h1 className=" font-monts font-semibold md:font-bold text-[21px] md:text-[25px] line-clamp-2">
              BMW 740i (Chalk)
            </h1>
          </Link>
          <p className=" font-monts border-gold px-[16px] border-dashed border-1 md:border-2 font-medium md:font-semibold text-[15px] md:text-[17px] py-[3px] rounded-xl">
            2023
          </p>
        </div>
        <p className="flex items-center gap-3 font-dmsans   md:text-[25px] mt-[10px]">
          <IoPricetagsOutline className="text-[#C6A135] text-[25px]" />
          <span>
            $499<span className="md:text-[15px]">/Day</span>
          </span>
        </p>

        <div className=" grid grid-cols-2 gap-x-[30px] gap-y-[20px] mt-[20px]">
          <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
            <img className="w-[13%]" src={seatIMG} alt="" />{" "}
            <span className="font-dmsans font-normal">4 Passengers</span>
          </div>
          <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
            <img className="w-[13%]" src={speedIMG} alt="" />{" "}
            <span className="font-dmsans font-normal">400</span>
          </div>
          <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
            <GiGearStickPattern className="text-[#C6A135] text-[35px]" />
            <span className="font-dmsans font-normal">Automatic</span>
          </div>
          <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
            <PiGasPumpLight className="text-[#C6A135] text-[35px]" />
            <span className="font-dmsans font-normal">Desiel</span>
          </div>
        </div>
      </div>
      <div
        className={`px-[20px] price mt-[20px] md:mt-[30px] flex justify-between items-center flex-wrap gap-[10px] gap-y-[20px]`}
      >
        <Link className="w-full" to="/dashboard/cars/view-car">
          <Button
            variant="solid"
            className={`bg-white text-black w-full mb-[20px] md:mb-[35px] h-[45px] md:h-[47px] text-[15px] font-dmsans font-medium  md:font-semibold`}
          >
            View Car
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Car;
