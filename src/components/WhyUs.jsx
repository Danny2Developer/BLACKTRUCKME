import React from "react";
import Section from "./Section";
import woman from "../assets/images/zezz.jpg";
import man from "../assets/images/cop9.jpg";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
function WhyUs() {
  return (
    <Section>
      <div className="sm:flex-row flex-col flex items-center sm:gap-[20px] md:gap-[40px] mt-[60px] lg:mt-[150px]">
        <div className="right order-2 mt-[30px] sm:mt-0 sm:w-[40%]">
          <h5 className="text-1xl sm:text-lg md:text-[27px] font-harma mb-[-1px] sm:mb-[25px] uppercase">
            Why Choose Us?
          </h5>
          <h1 className="text-2xl leading-snug xl:leading-normal mb-[10px] sm:text-[40px] font-semibold font-dmsans ">
            The BLACKTRUCKME Difference
          </h1>
          <p className="text-[14.5px] font-monts">
            Performance, luxury and unmatchable service are just the beginning
            of the BLACKTRUCKME experience. Our team is passionate about
            providing one-of-a-kind exotic and luxury vehicle experiences that
            you just can’t find anywhere else.
          </p>
          <Link to="/our-difference">
            <Button
              color="primary"
              className="mt-[15px] md:mt-[30px] w-[150px] md:w-[200px] h-[46px] md:h-[55px] md:text-[16px] font-dmsans md:font-semibold"
              variant="ghost"
            >
              Learn More
            </Button>
          </Link>
        </div>
        <div className="left sm:order-2 relative w-full sm:w-[60%] min-h-[280px] sm:min-h-[400px] md:min-h-[500px] xl:min-h-[75vh] 2xl:h-[60vh]">
          <div className="ca sm:border-2 rounded-sm border-gold w-[95%] sm:w-[96%] absolute left-0 top-0 sm:top-[30px] overflow-hidden">
            <img
              src={woman}
              className="w-full h-full object-cover opacity-[90%] object-center"
              alt=""
            />
          </div>
          <div className="ca2 border-0 sm:border-2 border-t-0 sm:border-t-3 border-l-0 sm:border-l-3 rounded-sm border-gold w-[96%] sm:w-[96%]  absolute right-0 top-0">
            <img
              src={man}
              className=" w-full h-full object-cover opacity-[90%] rotate-180 object-bottom"
              alt=""
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default WhyUs;
