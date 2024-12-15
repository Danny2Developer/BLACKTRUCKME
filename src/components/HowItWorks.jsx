import React from "react";
import Section from "./Section";
import woman from "../assets/images/woman.jpg";
import man from "../assets/images/man.jpg";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <Section>
      <div className="sm:flex items-center gap-[20px] md:gap-[40px]">
        <div className="left relative w-full sm:w-[60%] min-h-[280px] sm:min-h-[400px] md:min-h-[500px] xl:min-h-[75vh] 2xl:h-[60vh]">
          <div className="ca border-0 sm:border-2 rounded-sm border-gold w-[95%] sm:w-[93%] absolute left-0 top-0 overflow-hidden">
            <img
              src={woman}
              className="w-full h-full opacity-[90%] object-cover object-top sm:object-right"
              alt=""
            />
          </div>
          <div className="ca2 border-0 sm:border-2 border-t-0 sm:border-t-3 border-l-0 sm:border-l-3 rounded-sm border-gold w-[96%] sm:w-[93%]  absolute right-0 top-0 sm:top-[15px] md:top-[30px]">
            <img
              src={man}
              className=" w-full h-full opacity-[90%] object-cover rotate-180 sm:object-bottom"
              alt=""
            />
          </div>
        </div>
        <div className="right mt-[30px] sm:mt-0 sm:w-[40%]">
          <h5 className="text-1xl sm:text-lg md:text-[27px] font-harma mb-[-1px] sm:mb-[25px]">
            RENT THE LUXURY
          </h5>
          <h1 className="text-2xl leading-snug xl:leading-normal sm:text-[40px] font-semibold font-dmsans mb-[10px] md:mb-unset">
            Own the Experience
          </h1>
          <p className="text-[14.5px] font-monts">
            Rent an exotic car with a simple phone call. Complete the process in
            less time than it takes to wash and wax your vehicle.
          </p>
          <Link to="/how-it-works">
            <Button
              color="primary"
              className="mt-[15px] md:mt-[30px] w-[150px] md:w-[200px] h-[46px] md:h-[55px] md:text-[16px] font-dmsans md:font-semibold"
              variant="ghost"
            >
              How It Works
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default HowItWorks;
