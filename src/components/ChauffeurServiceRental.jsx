import React from "react";
import Section from "./Section";
import driver1 from "../assets/images/driver.jpg";
import driver2 from "../assets/images/driver3.jpg";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function ChauffeurServiceRental() {
  return (
    <Section>
      <div className="w-full h-fit sm:h-[65vh] md:h-[60vh] xl:h-[68vh] 2xl:h-[70vh] mt-[70px] md:mt-0 md:flex-row flex-col flex gap-[30px] items-center justify-between">
        <div className="left relative w-full md:w-[65%] min-h-[210px] md:h-full  flex">
          <div className="w-[65%] md:w-[60%] min-h-[180px] md:h-full rounded-md overflow-hidden">
            <img
              src={driver1}
              className="w-full h-full object-cover opacity-[90%]"
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
        <div className="right w-full mt-[40px] md:mt-0 md:w-[35%]">
          <h1 className="text-2xl leading-snug xl:leading-normal mb-[10px] sm:text-[40px] font-semibold lg:w-[90%] font-dmsans ">
            Chauffeur Rental
          </h1>
          <p className="text-[14.5px] font-monts">
            Take in every second of a special night out with BLACKTRUCKME
            premier chauffeur service. When you hire one of our professional
            chauffeurs, you can fully focus on your evening whether it’s a
            romantic date, a business outing, or a night on the town. Forget the
            hassle of parking, navigating traffic, or finding directions.
            Instead, sit back, relax, and enjoy the luxury of being driven in
            one of the most exclusive vehicles in New york. <br />
            <br className="md:block hidden" />
            Whether you're attending the biggest concert of the year, a
            star-studded premiere, or a major sporting event, make a statement
            when you arrive.
          </p>
          <Link to="/services/chauffeur-service">
            <Button
              color="primary"
              className="mt-[20px] md:mt-[30px] w-[220px] md:w-[250px] h-[50px] md:h-[55px] md:text-[16px] font-dmsans md:font-semibold"
              variant="ghost"
            >
              CHAUFFEUR RENTAL
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default ChauffeurServiceRental;
