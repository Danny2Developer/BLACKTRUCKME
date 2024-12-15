import React from "react";
import Section from "./Section";
import driver2 from "../assets/images/prom.jpg";
import driver1 from "../assets/images/prom2.jpg";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
function PromRentalBanner() {
  return (
    <Section>
      <div className="w-full h-fit sm:h-[65vh] md:h-[60vh] xl:h-[68vh] 2xl:h-[70vh] mt-[80px] md:mt-0 md:flex-row flex-col flex gap-[30px] items-center justify-between">
        <div className="right order-2 w-full mt-[40px] md:mt-0 md:w-[35%]">
          <h1 className="text-2xl leading-snug xl:leading-normal mb-[10px] sm:text-[40px] font-semibold lg:w-[90%] font-dmsans ">
            Prom Rental
          </h1>
          <p className="text-[14.5px] font-monts">
            The right car makes a statement. Elevate your prom night with a
            luxury or exotic car from BLACKTRUCKME. We offer Houston’s most
            exclusive selection of luxury and exotic cars, perfect for making
            your prom entrance unforgettable. Whether you’re arriving in a sleek
            Ferrari, a stylish Lamborghini, or another luxury vehicle, pulling
            up in one of these cars will turn heads and set the tone for an
            incredible night. Make your prom a night to remember with the
            perfect ride that captures attention and leaves a lasting
            impression.
          </p>

          <Link to="/services/prom-car-rental">
            <Button
              color="primary"
              className="mt-[20px] md:mt-[30px] w-[220px] md:w-[250px] h-[50px] md:h-[55px] md:text-[16px] font-dmsans md:font-semibold"
              variant="ghost"
            >
              PROM RENTAL
            </Button>
          </Link>
        </div>
        <div className="left md:order-2 relative w-full md:w-[65%] h-full flex">
          <div className="w-[65%] md:w-[60%] min-h-[190px] md:h-full rounded-md overflow-hidden">
            <img
              src={driver1}
              className="w-full h-full object-cover object-center opacity-[80%]"
              alt=""
            />
          </div>
          <div className="w-[60%] md:w-[55%] absolute border-[7px] md:border-r-[10px] border-r-0 md:border-[10px] rounded-md border-[#121317] right-0 h-full mt-[50px] overflow-hidden ">
            <img
              src={driver2}
              className="w-full h-full object-cover object-right opacity-[90%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PromRentalBanner;
