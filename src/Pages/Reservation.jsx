import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import ReserveForm from "../components/ReserveForm";

function Reservation() {
  return (
    <div className="reservation">
      <HeaderBanner className={"lg:min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[60px]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide ">
              Ready, set, GO!
            </h1>
            <p className=" font-monts font-semibold text-md md:text-lg md:mt-3">
              Reserve Your Dream Charter today
            </p>
          </div>
        </Section>
      </HeaderBanner>
      <ReserveForm />
    </div>
  );
}

export default Reservation;
