import React from "react";
import Section from "./Section";
import IMG from "../assets/images/dream2.png";
import car from "../assets/images/one-face.png";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Dream() {
  return (
    <Section className={"overflow-hidden !px-0 xs:!px-[25px] md:px-[60px]"}>
      <div className="relative h-fit xs:min-h-[240px] sm:min-h-[240px] md:min-h-[290px] lg:min-h-[360px] dream bg-center px-[15px] xs:px-[20px] lg:px-[30px] lg:ps-[45px] max-w-full lg:max-w-[85%] mx-auto bg-mod py-[25px] xs:rounded-xl mb-[80px] flex flex-row justify-between gap-[10px] items-center">
        <div className=" flex flex-col items-center justify-center xs:block xs:mt-[-75px] md:mt-[unset] w-full xs:w-[65%] sm:w-[45%]">
          <h1 className="xs:text-left text-center font-dmsans leading-tight font-semibold text-[22px] sm:text-[25px] md:text-[35px]">
            Make your dream a reality today.
          </h1>
          <h3 className="xs:text-left text-center font-monts font-semibold text-[11px] md:text-[14px] mt-[4px] md:mt-[3px]">
            CALL OR TEXT TO GET STARTED
          </h3>
          <Link to="/contact">
            <Button
              color="primary"
              className=" mt-[15px] text-[12px] font-medium h-[35px] md:h-[40px] md:w-[150px] sm:text-[14px] font-dmsans md:font-semibold"
              variant="solid"
              size="md"
            >
              Contact Us
            </Button>
          </Link>
        </div>
        <img
          className="absolute xs:block hidden max-w-[320px] mt-[100px] md:mt-[unset] sm:max-w-[640px] xl:max-w-[850px] right-[-65px] sm:right-[-100px] lg:right-[-180px] xl:right-[-200px]"
          src={car}
          alt=""
        />
      </div>
    </Section>
  );
}

export default Dream;
