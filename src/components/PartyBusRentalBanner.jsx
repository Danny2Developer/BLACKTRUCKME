import React from "react";
import Section from "./Section";
// import img from "../assets/images/car1z.jpg";
import img from "../assets/images/party7.jpeg";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function PartyBusRentalBanner() {
  return (
    <Section className={"ps-0 md:ps-0 md:pe-[60px] pe-0"}>
      <div className="flex bbl justify-between gap-[20px] lg:gap-[30px] items-center 2xl:h-[70vh] h-fit md:h-[50vh] lg:h-[85vh] mt-[80px] md:mt-[180px] px-[25px] md:px-0">
        <div className="left w-full md:w-[65%] h-auto md:block hidden ">
          <img
            src={img}
            className="w-full h-full opacity-[70%] md:opacity-[100%] object-cover"
            alt=""
          />
        </div>
        <div className="right left-[25px] md:left-[unset] w-full  md:w-[45%] lg:w-[35%] before:w-[20%] md:before:block before:hidden lg:before:w-[35%] md:before:h-[400px] md:before:bg-mod before:rounded-sm before:left-[-43px] lg:before:left-[-90px] before:top-[50%] before:translate-y-[-50%] before:absolute md:relative h-auto">
          <div className="relative z-[1]">
            <h1 className="text-2xl leading-snug xl:leading-normal mb-[10px] sm:text-[40px] font-semibold lg:w-[90%] font-dmsans ">
              Party Bus Rentals
            </h1>
            <p className="text-[14.5px] font-monts">
              With a BLACKTRUCKME party bus, you’re not just renting a ride
              you’re setting the stage for an unforgettable experience. Our
              party buses are fully equipped with top-of-the-line amenities that
              keep the celebration going, no matter where your destination is.
              Whether it’s a birthday, bachelor or bachelorette party, or just a
              night out with friends, our party buses ensure that your event
              starts the moment you step on board.
            </p>

            <Link to="/services/party-bus-rental">
              <Button
                color="primary"
                className="mt-[20px] md:mt-[30px] w-[220px] md:w-[250px] h-[50px] md:h-[55px] md:text-[16px] font-dmsans md:font-semibold"
                variant="ghost"
              >
                PARTY BUS RENTALS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PartyBusRentalBanner;
