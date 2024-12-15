import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div className="car-fleet">
      <HeaderBanner>
        <Section>
          <div className=" absolute bottom-[70px]">
            <p className=" font-monts font-semibold text-md md:text-lg">
              How it Works
            </p>
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide md:mt-1">
              Rent Your Dream Car in 3 Simple Steps
            </h1>
          </div>
        </Section>
      </HeaderBanner>
      <Section className={"!mt-[50px]"}>
        <div className=" flex flex-col gap-y-[40px]  lg:max-w-[85%] mx-auto w-full">
          <div className="each w-full md:flex-row flex-col gap-y-[15px] md:w-[50%] h-fit gap-x-[30px] flex items-start">
            <div className="num w-[45px] md:w-[65px] h-[45px] md:h-[65px] rounded-[50%] flex-shrink-0 flex justify-center items-center bg-gold text-black font-semibold font-monts text-[25px] md:text-[40px]">
              1
            </div>
            <div className="md:mt-[10px]">
              <h1 className="font-dmsans font-semibold text-[20px] md:text-[30px]">
                Choose your luxury car and confirm your rental dates.
              </h1>
              <p className=" font-monts text-sm font-medium text-white/80 mt-2">
                Browse our inventory online or text to see photos of our exotic
                and luxury car fleet. Once you’ve selected your dream car, we
                will confirm that it is available for your desired dates.
              </p>
            </div>
          </div>
          <div className="each md:self-end w-full md:w-[50%] h-fit gap-x-[30px] flex md:flex-row flex-col gap-y-[15px] items-start">
            <div className="num w-[45px] md:w-[65px] h-[45px] md:h-[65px] rounded-[50%] flex-shrink-0 flex justify-center items-center bg-gold text-black font-semibold font-monts text-[25px] md:text-[40px]">
              2
            </div>
            <div className="md:mt-[10px]">
              <h1 className="font-dmsans font-semibold text-[20px] md:text-[30px]">
                Verify your driver's license and insurance.
              </h1>
              <p className=" font-monts text-sm font-medium  text-white/80 mt-2">
                Snap and send a photo of your driver’s license and insurance.
                (see insurance requirements below) If you need to make an
                adjustment to your policy, we can have a short conference call
                with you and your insurance agent.
              </p>
              <p className=" font-monts text-sm font-medium text-white/80 mt-[10px]">
                On the call we will increase your coverage ONLY for the days of
                your rental. This may increase your premium by a small amount,
                but for most clients, it is less than $25.
              </p>
            </div>
          </div>
          <div className="each w-full md:w-[50%] h-fit gap-x-[30px] flex md:flex-row flex-col gap-y-[15px] items-start">
            <div className="num w-[45px] md:w-[65px] h-[45px] md:h-[65px] rounded-[50%] flex-shrink-0 flex justify-center items-center bg-gold text-black font-semibold font-monts text-[25px] md:text-[40px]">
              3
            </div>
            <div className="md:mt-[10px]">
              <h1 className="font-dmsans font-semibold text-[20px] md:text-[30px]">
                Pay for and pick up your luxury vehicle
              </h1>
              <p className=" font-monts text-sm font-medium text-white/80 mt-2">
                At pick up or delivery, you will need to make your reservation
                deposit, pay your rental fee and sign your rental agreement/
                waiver.
              </p>
              <p className=" font-monts text-sm font-medium text-white/80 mt-[10px]">
                Get ready to turn heads – your car is gassed up and ready to go!
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section className={"w-full flex justify-center mb-[140px]"}>
        <Button
          variant="ghost"
          color="primary"
          className="w-[250px] font-monts h-[50px] text-white font-semibold text-[15px]"
        >
          <Link to="/faq">Sell All Faq's</Link>
        </Button>
      </Section>
    </div>
  );
}

export default HowItWorks;
