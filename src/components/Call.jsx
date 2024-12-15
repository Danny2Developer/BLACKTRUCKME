import React from "react";
import Section from "./Section";
import car from "../assets/images/car-2.png";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Call() {
  return (
    <Section className={""}>
      <div className="mt-[230px] md:mt-[200px] flex lg:flex-row flex-col gap-[50px] items-center">
        <div className="left lg:block hidden w-[60%]">
          <img src={car} className="w-full h-full" alt="" />
        </div>
        <div className="right w-full lg:block flex flex-col justify-center lg:w-[40%]">
          <h3 className="text-3xl lg:text-left text-center leading-snug xl:leading-normal sm:text-[50px] font-harma font-bold sm:leading-[3rem] tracking-tight ">
            Make Your Dream a Reality
          </h3>
          <h1 className="text-[18px] lg:text-left text-center md:text-[30px] font-harma font-medium uppercase md:mb-[30px] tracking-tight">
            CALL OR TEXT TO GET STARTED
          </h1>
          <Link to="/contact" className="mx-auto lg:mx-[unset]">
            <Button
              color="primary"
              className=" mt-[10px] md:mt-[30px] w-[130px] md:w-[170px] h-[45px] md:h-[55px] md:text-[16px] font-dmsans md:font-semibold"
              variant="solid"
            >
              Contact Us
            </Button>
          </Link>
          <p className=" md:block hidden font-dmsans text-[14px] md:text-[17px] text-white/80 mt-[15px] md:mt-[30px] font-normal">
            Weddings / Photoshoots / Client Meetings / Bachelor Parties /
            Reunions / Date Nights / Vacations / Anniversaries / Holidays /
            Special Events
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Call;
