import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import CarCard from "../components/CarCard";
import Brand from "../components/Brand";
import Dream from "../components/Dream";
import { Input } from "@nextui-org/react";
import { Cars } from "../../Data";

function CarFleet() {
  const arr = [0, 1, 2, 3, 4, 5];
  return (
    <div className="car-fleet">
      <HeaderBanner>
        <Section>
          <div className=" absolute bottom-[30px]">
            <p className=" font-monts font-semibold text-md md:text-lg">
              Luxury Vehicles
            </p>
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide md:mt-1">
              Choose Your Dream Charter
            </h1>
          </div>
        </Section>
      </HeaderBanner>
      <Brand />
      <Filter />
      <div className=" cars grid gap-y-[40px] md:gap-y-[70px] gap-[20px] grid-cols-1 lg:grid-cols-3 mt-[50px] 2xl:max-w-[1440px] 2xl:px-0 mx-auto px-[25px] md:px-[60px]">
        <CarCard cars={Cars} />
      </div>
      <Dream />
    </div>
  );
}

export default CarFleet;
