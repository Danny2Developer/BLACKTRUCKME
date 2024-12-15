import { Button } from "@nextui-org/react";
import React from "react";
import Section from "../components/Section";
import HeaderBanner from "../components/HeaderBanner";
import img from "../assets/images/interior1.jpg";
import SeeFaq from "../components/SeeFaq";
import MoreBrands from "../components/MoreBrands";
import Dream from "../components/Dream";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";

function AboutUs() {
  return (
    <div className="about-us">
      <HeaderBanner className={"lg:min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[30px] md:bottom-[60px] w-full md:w-[40%]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide ">
              About Us
            </h1>
            <p className=" font-monts font-medium text-md md:text-base md:mt-3 md:w-full w-full xs:w-[60%]">
              Houston’s Ultimate Luxury Experience
            </p>
            <Button
              color="primary"
              className="mt-[18px] sm:mt-[30px] w-[130px] sm:w-[150px] md:w-[200px] h-[39px] sm:h-[46px] md:h-[50px] text-[14px] sm:text-[16px] font-dmsans font-semibold"
              variant="solid"
            >
              Reserve Now
            </Button>
          </div>
        </Section>
      </HeaderBanner>
      <Section
        className={
          "flex lg:flex-row gap-[30px] flex-col justify-between w-full !mt-[35px]"
        }
      >
        <div className="w-full md:w-[65%] mx-auto lg:w-[40%] h-fit">
          <Heading className={""}>
            Everything You Need For The Ultimate Driving Experience
          </Heading>
          <Paragraph className={"mt-[10px]"}>
            We make the world’s finest vehicles accessible to everyone.
          </Paragraph>
          <Paragraph className={"mt-[10px] md:mt-[20px]"}>
            Explore our fleet of exotic cars and luxury SUVs. BLACKTRUCKME has
            all of the top brands at our showroom, all serviced to run through
            Houston roads with confidence and a superior touch. The variety of
            exotic cars and luxury vehicles is unparalleled in the Houston area.
          </Paragraph>
          <Paragraph className={"mt-[10px] md:mt-[20px]"}>
            We want to hand you the keys to the ultimate driving experience in
            Houston and make your dream a reality.
          </Paragraph>
        </div>
        <div className="w-full mx-auto sm: md:w-[60%] max-h-[320px] overflow-hidden">
          <img src={img} className="w-full h-full object-cover" alt="" />
        </div>
      </Section>
      <Section className={"!mt-[25px] md:mt-[40px]"}>
        <Heading className={""}>Curated by Our Expert Team</Heading>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[10px] md:gap-[25px] mt-[10px]">
          <Paragraph>
            The BLACKTRUCKME team is made up of exotic vehicle experts that work
            every week to keep our fleet in top-level condition so that you can
            walk in any time and have the ultimate driving experience.
          </Paragraph>
          <Paragraph>
            Every new luxury vehicle that comes into our facilities must pass a
            quality test before we rent out. All of our available cars not only
            look great but feel good too.
          </Paragraph>
          <Paragraph>
            We understand the need for the ultimate driving experience in
            Houston. We only bring the top brands of the industry into our
            showroom. All of our available stock is carefully vetted,
            well-maintained, and enhanced to ensure perfect journeys every time.
          </Paragraph>
          <Paragraph>
            {" "}
            Luxury, class, and exceptionalism are only the beginning of the
            BLACKTRUCKME experience. Reserve your vehicle today and find out
            why.
          </Paragraph>
        </div>
        <Heading className={"mt-[15px] md:mt-[30px]"}>
          A Refined Driving Experience
        </Heading>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[10px] md:gap-[25px] mt-[10px]">
          <Paragraph>
            BLACKTRUCKME is dedicated to ensuring our vehicles deliver the most
            exciting and refined driving experience. Our cars have the most
            advanced features and luxurious interiors, creating a bastion of
            comfort with visual flair. Driving one of our motors for any
            occasion will have our customers feeling on top of the world.
            Complete client satisfaction is our
          </Paragraph>
          <Paragraph>
            {" "}
            aim with every rental. BLACKTRUCKME has a dedicated customer support
            team available 24/7 to address any requirements or provide solutions
            to any queries. Should there be any issue with your vehicle, our
            strong service partnerships can be deployed with haste ensuring you
            are back on the road.
          </Paragraph>
        </div>
      </Section>
      <SeeFaq />
      <MoreBrands />
      <Dream />
    </div>
  );
}

export default AboutUs;
