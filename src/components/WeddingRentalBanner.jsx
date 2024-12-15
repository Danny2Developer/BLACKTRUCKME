import Section from "./Section";
import img from "../assets/images/wed2.jpg";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function WeddingRentalBanner() {
  return (
    <Section className={"pe-0 md:pe-0 ps-0 md:ps-[60px]"}>
      <div className="flex bbl2 justify-between gap-[20px] lg:gap-[30px] items-center 2xl:h-[70vh] h-fit md:h-[50vh] lg:h-[85vh] mt-[80px] md:mt-[50px] mb-[90px] md:mb-[unset] px-[25px] md:px-0">
        <div className="right left-[25px] md:left-[unset] w-full md:w-[45%] lg:w-[35%] before:w-[20%] md:before:block before:hidden lg:before:w-[35%] before:h-[400px] before:z-[1] before:bg-mod before:rounded-sm before:right-[-43px] lg:before:right-[-90px] before:top-[50%] before:translate-y-[-50%] before:absolute md:relative">
          <div className="relative z-[2]">
            <h1 className="text-2xl leading-snug xl:leading-normal mb-[10px] sm:text-[40px] font-semibold lg:w-[90%] font-dmsans ">
              Wedding Rental
            </h1>
            <p className="text-[14.5px] font-monts">
              With BLACKTRUCKME, we’re not offering a standard limo. We know you
              want something more special. On the most special day of their
              life, let them drive away with one of the most special cars on the
              planet. We can bring our amazing vehicles to you so that you don’t
              have to take time out of your busy schedule to pick one up.
            </p>

            <Link to="/services/wedding-car-rental">
              <Button
                color="primary"
                className="mt-[20px] md:mt-[30px] w-[220px] md:w-[250px] h-[50px] md:h-[55px] md:text-[16px] font-dmsans md:font-semibold"
                variant="ghost"
              >
                WEDDING RENTAL
              </Button>
            </Link>
          </div>
        </div>
        <div className="left md:block hidden w-full md:w-[65%] h-[43vh] md:h-full">
          <img
            src={img}
            className="w-full h-full opacity-[70%] md:opacity-[90%] object-cover"
            alt=""
          />
        </div>
      </div>
    </Section>
  );
}

export default WeddingRentalBanner;
