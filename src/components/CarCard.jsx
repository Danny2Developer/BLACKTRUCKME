import { Link } from "react-router-dom";
import car from "../assets/images/lambo1.webp";
import car2 from "../assets/images/hd1-transformed.png";
import car3 from "../assets/images/hd2-transformed.png";
import car4 from "../assets/images/hd3-transformed.png";
import { Button } from "@nextui-org/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import seatIMG from "../assets/images/Seating.png";
import powerIMG from "../assets/images/Horsepower.png";
import speedIMG from "../assets/images/speed.png";
import { IoPricetagsOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { IoAirplaneOutline } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
import { PiGasPumpLight } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwipeBtns from "../components/SwipeBtns";
import logo from "../assets/images/bmw-logo.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// const cars = [car, car2, car3, car4];

function CarCard({ link, party, prices, onPress, cars }) {
  const links = link
    ? "/sepcial-event-reservsation"
    : party
    ? "/party-bus-rental"
    : "/car-fleet/car-details";

  const price = prices ? "Hour" : "Day";
  return (
    <>
      {cars.map((car, index) => (
        <div
          key={index}
          className=" col-span-1 group rounded-xl border-2 overflow-hidden border-gold"
        >
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            slidesPerView={1}
            loop={true}
            className="img-holder w-full h-[220px]  md:max-h-[350px] overflow-hidden mb-[20px]"
            pagination={{ clickable: true }}
          >
            {car.image.map((carIMG) => (
              <SwiperSlide className="">
                <img
                  src={carIMG}
                  className="max-w-full h-full relative z-[1] object-cover object-center"
                  alt="car"
                />
              </SwiperSlide>
            ))}
            <SwipeBtns
              className={"group-hover:opacity-100 transition-opacity"}
            />
          </Swiper>
          <div className="relative px-[20px] flex items-center justify-between gap-[10px]">
            <div className="flex items-start gap-2">
              <img src={car.logo} className="w-[28px]" alt="" />
              <div>
                <h1 className=" font-monts font-medium md:font-semibold text-[17px] md:text-[20px] line-clamp-1">
                  {car.name}
                </h1>
              </div>
            </div>
            <p className=" absolute right-[15px] z-10 top-[-33px] font-monts border-gold bg-mod px-[18px] border-dashed border-1 md:border-[1.5px] font-medium md:font-semibold text-[14px] md:text-[14px] py-[2px] rounded-lg">
              {car.year}
            </p>
          </div>
          <div className="px-[20px]">
            <p className="flex items-center gap-3 font-dmsans md:text-[22px] mt-[5px]">
              <span>
                ${car.price}
                <span className="md:text-[15px]">/{price}</span>
              </span>
            </p>
            <div className=" grid grid-cols-2 gap-x-[30px] gap-y-[17px] mt-[20px]">
              <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
                <img className="w-[18%]" src={seatIMG} alt="" />{" "}
                <span className="font-dmsans font-normal">
                  {car.passenger} Passengers
                </span>
              </div>
              <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
                <GiGearStickPattern className="text-[#C6A135] text-[33px] opacity-[75%]" />
                <span className="font-dmsans font-normal">
                  {car.transmission}
                </span>
              </div>
              <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
                <img className="w-[20%] opacity-[75%]" src={speedIMG} alt="" />{" "}
                <span className="font-dmsans font-normal">{car.speed}</span>
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
            {onPress ? (
              <Button
                variant="solid"
                onPress={onPress}
                className={`bg-white text-black w-full mb-[20px] md:mb-[30px] h-[45px] md:h-[47px] text-[15px] font-dmsans font-medium  md:font-semibold`}
              >
                RESERVE NOW
              </Button>
            ) : (
              <Link className="w-full" to={links}>
                <Button
                  variant="solid"
                  className={`bg-white text-black w-full mb-[20px] md:mb-[30px] h-[45px] md:h-[47px] text-[15px] font-dmsans font-medium  md:font-semibold`}
                >
                  RESERVE NOW
                </Button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default CarCard;
