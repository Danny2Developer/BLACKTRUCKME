import React, { useRef } from "react";
import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import { Button } from "@nextui-org/react";
import VehicleRentalFaq from "../components/VehicleRentalFaq";
import Dream from "../components/Dream";
import { Link } from "react-router-dom";
import PromRentalFAQ from "../components/PromRentalFAQ";
import BabyShowerFaq from "../components/BabyShowerFaq";
import ChauffeurServiceFAQ from "../components/ChauffeurServiceFAQ";
import WeddingFAQ from "../components/WeddingFAQ";
import PartyBusFAQ from "../components/PartyBusFAQ";

const faqButton = [
  {
    text: "Vehicle Rental",
    URL: "vehicle_rental",
  },
  {
    text: "Chauffeur Service",
    URL: "chaffeur_service",
  },
  {
    text: "Wedding Rental",
    URL: "wedding_rental",
  },
  {
    text: "Party Bus Rental",
    URL: "party_bus",
  },
  {
    text: "Prom Rental",
    URL: "prom_rental",
  },
  {
    text: "Baby Shower Rental",
    URL: "baby_shower",
  },
];

function Faq() {
  
  const handlescroll = (e) => {
    if (e.target.name === "party_bus") {
      const element = document.getElementById("party_bus");
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }else if (e.target.name === "vehicle_rental") {
      const element = document.getElementById("vehicle_rental");
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (e.target.name === "prom_rental") {
      const element = document.getElementById("prom_rental");
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (e.target.name === "chaffeur_service") {
      const element = document.getElementById("chaffeur_service");
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (e.target.name === "baby_shower") {
      const element = document.getElementById("baby_shower");
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      const element = document.getElementById("wedding_rental");
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <div className="faq">
      <HeaderBanner>
        <Section>
          <div className=" absolute bottom-[70px] ">
            <p className=" font-monts font-semibold text-md md:text-lg">
              See Most Asked Questions
            </p>
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide md:mt-1">
              Frequently Asked Questions
            </h1>
          </div>
        </Section>
      </HeaderBanner>
      <Section className={"md:mt-[70px]"}>
        <div className="buttons-group gap-x-[15px] md:gapx-[20px] gap-[20px] flex-wrap flex justify-center mx-auto w-full md:max-w-[95%]">
          {faqButton.map((data, index) => {
            const { text, URL } = data;
            return (
              <Button
                key={index}
                name={URL}
                onClick={handlescroll}
                variant="ghost"
                className="w-[45%]  md:w-[170px] font-monts border-white text-white h-[50px] text-[15px]"
              >
                {text}
              </Button>
            );
          })}
        </div>
      </Section>
      <Section className="md:mt-[70px]">
        <VehicleRentalFaq id="vehicle_rental" className={"scroll-mt-[130px]"} />
        <ChauffeurServiceFAQ
          id="chaffeur_service"
        />
        <WeddingFAQ id="wedding_rental" />
        <PartyBusFAQ id="party_bus" />
        <PromRentalFAQ id="prom_rental" />
        <BabyShowerFaq id="baby_shower"/>
      </Section>
      <Dream />
    </div>
  );
}

export default Faq;
