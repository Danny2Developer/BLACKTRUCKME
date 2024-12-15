import React from "react";
import Section from "./Section";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function BabyShowerBanner() {
  return (
    <Section className={"px-0 md:px-0"}>
      <div className="bgg relative w-full px-[10px] lg:px-[80px] 2xl:h-[50vh] min-h-[150px] sm:h-[28vh] lg:h-[40vh] xl:h-[70vh] mt-[70px] lg:mt-[180px]">
        <div className="absolute bottom-[-150px] sm:bottom-[-80px]">
          <h1 className="text-[20px] leading-snug xl:leading-normal mb-[5px] md:mb-[10px] sm:text-[45px] font-semibold w-full lg:w-[45%] xl:w-[35%] font-dmsans">
            We Deliver Luxury for Your Baby Shower
          </h1>
          <p className="text-[12.5px] md:text-[14.5px] font-monts w-[95%] md:w-[70%]">
            No matter where your baby shower is being held, BLACKTRUCKME can
            bring the luxury car of your dreams right to your doorstep. Make
            your celebration extra special with our exclusive fleet of luxury
            and exotic cars, perfect for creating unforgettable memories.
            Whether you’re hosting a baby shower at a venue or a private home.
          </p>
          <Link to="/services/baby-shower">
            <Button
              color="primary"
              className="mt-[20px] md:mt-[30px] w-[200px] md:w-[250px] h-[45px] md:h-[55px] md:text-[16px] font-dmsans md:font-semibold"
              variant="solid"
            >
              BABY SHOWER CAR RENTAL
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default BabyShowerBanner;
