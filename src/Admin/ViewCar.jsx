import Preview from "../components/Preview";
import car from "../assets/images/hd1-transformed.png";
import car2 from "../assets/images/hd2-transformed.png";
import car3 from "../assets/images/hd3-transformed.png";
import car4 from "../assets/images/hd4-transformed.png";
import car5 from "../assets/images/hd5-transformed.png";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import CarDescription from "../components/CarDescription";
import CarDetailsHeading from "../components/CarDetailsHeading";
import seatIMG from "../assets/images/Seating.png";
import powerIMG from "../assets/images/Horsepower.png";
import speedIMG from "../assets/images/speed.png";
import { IoPricetagsOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { IoAirplaneOutline } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
import { PiGasPumpLight } from "react-icons/pi";

function ViewCar() {
  const Carimages = [
    {
      IMG: car,
    },
    {
      IMG: car2,
    },
    {
      IMG: car3,
    },
    {
      IMG: car4,
    },
    {
      IMG: car5,
    },
  ];
  const content = {
    title: "BMW 740i (Chalk)",
  };
  return (
    <div className="car-details view-car">
      <div className=" mx-auto">
        <CarDetailsHeading Data={content}>
          <p className="w-fit font-monts border-gold px-[16px] border-dashed border-1 md:border-2 font-medium md:font-semibold text-[15px] md:text-[17px] py-[2px] rounded-xl">
            2023
          </p>
        </CarDetailsHeading>
        <Preview>
          {Carimages.map((data, index) => {
            return (
              <div key={index}>
                <img src={data.IMG} />
              </div>
            );
          })}
        </Preview>
        <section className="description mt-[30px] md:mt-[40px] text-headingFs md:text-[27px]">
          <h1 className="heading text-white font-outfit font-semibold pb-[10px] border-b-1 border-white/30">
            Prices
          </h1>
          <div className="">
            <p className=" font-dmsans font-medium md:font-semibold md:text-[18px] mt-[10px]">
              $499/Day
            </p>
          </div>
        </section>
        <section className="description mt-[30px] md:mt-[40px] text-headingFs md:text-[27px]">
          <h1 className="heading text-white font-outfit font-semibold pb-[10px] border-b-1 border-white/30">
            Car Details
          </h1>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-x-[30px] gap-y-[20px] mt-[20px]">
            <div className="font-monts text-[13.5px] font-medium flex items-center gap-2">
              <img className="w-[18%]" src={seatIMG} alt="" />{" "}
              <span className="font-dmsans font-normal">4 Passengers</span>
            </div>
            <div className="font-monts text-[13.5px] font-medium flex items-center gap-2">
              <img className="w-[18%]" src={speedIMG} alt="" />{" "}
              <span className="font-dmsans font-normal">400</span>
            </div>
            <div className="font-monts text-[13.5px] font-medium flex items-center gap-2">
              <GiGearStickPattern className="text-[#C6A135] text-[45px]" />
              <span className="font-dmsans font-normal">Automatic</span>
            </div>
            <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
              <PiGasPumpLight className="text-[#C6A135] text-[45px]" />
              <span className="font-dmsans font-normal">Desiel</span>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default ViewCar;
