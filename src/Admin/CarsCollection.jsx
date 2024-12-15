import Button from "../components/ui/Button";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Card from "../Admin/components/Card";
import car1 from "../assets/images/lambo1.webp";
import car2 from "../assets/images/mc1.webp";
import car3 from "../assets/images/bently1.webp";
import car4 from "../assets/images/bently2.webp";
import car5 from "../assets/images/lambo3.webp";
import car6 from "../assets/images/r&r.webp";
import brandLogo1 from "../assets/images/lambo-logo.png";
import brandLogo2 from "../assets/images/bently-logo.png";
import brandLogo3 from "../assets/images/mclarenlogo.png";
import brandLogo4 from "../assets/images/r&r-logo.png";
import CarCard from "../components/CarCard";
import Car from "./components/Car";

function CarsCollection() {
  const CarsData = [
    {
      brandIcon: brandLogo1,
      carImage: car1,
      carName: "Lamborghini Urus",
      price: "$1,499",
      URL: "/dashboard/cars/view-car",
    },
    {
      brandIcon: brandLogo3,
      carImage: car2,
      carName: "McLaren 570S",
      price: "$1,599",
      URL: "",
    },
    {
      brandIcon: brandLogo2,
      carImage: car3,
      carName: "Bentley Continental GT ",
      price: "$849",
      URL: "",
    },
    {
      brandIcon: brandLogo2,
      carImage: car4,
      carName: "Bentley Bentayga",
      price: "$1,299",
      URL: "",
    },
    {
      brandIcon: brandLogo1,
      carImage: car5,
      carName: "Lamborghini Huracan Coupe",
      price: "$1,599",
      URL: "",
    },
    {
      brandIcon: brandLogo4,
      carImage: car6,
      carName: "Rolls Royce Ghost",
      price: "$1,599",
      URL: "",
    },
  ];
  return (
    <div className="mt-[10px]">
      <div className="top flex gap-2 justify-between items-center">
        <p className="font-Cabin text-white text-[14px] md:text-lg">
          Popular Cars
        </p>
        <div className="w-[60%] md:block hidden border border-dashed border-[#1F2937]"></div>
        <Link to="/dashboard/cars">
          <Button className=" flex items-center font-syne md:font-extralight whitespace-nowrap gap-2 bg-gold md:py-[7px] md:pe-[10px] md:px-[10px] rounded-md md:rounded-large text-mod justify-center">
            All Cars
            <IoIosArrowRoundForward className="text-[15px] md:text-[22px]" />
          </Button>
        </Link>
      </div>
      <div className=" cars grid gap-y-[40px] md:gap-y-[70px] gap-[30px] grid-cols-1 lg:grid-cols-2 mt-[50px] 2xl:max-w-[1440px] 2xl:px-0 mx-auto px-[0px]">
        <Car />
        <Car />
        <Car />
        <Car />
        <Car />
      </div>
    </div>
  );
}

export default CarsCollection;
