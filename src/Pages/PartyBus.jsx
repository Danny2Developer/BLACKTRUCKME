import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import { Button } from "@nextui-org/react";
import LongTimeForm from "../components/LongTimeForm";
import MoreBrands from "../components/MoreBrands";
import Dream from "../components/Dream";
import Paragraph from "../components/ui/Paragraph";
import Heading from "../components/ui/Heading";
import ev1 from "../assets/images/wed3.jpg";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import { Cars } from "../../Data";

function PartBus() {
  const each = [
    "Classic Party Buses with ample space for large groups, featuring dance floors and dynamic lighting.",
    "VIP Buses for a more intimate and upscale experience, complete with leather seating and exclusive amenities. ",
    "Themed Buses to add a unique twist to your celebration, perfect for kids' parties or themed events.",
  ];
  return (
    <div className="long-time-rental">
      <HeaderBanner className={"lg:min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[50px] md:bottom-[60px] md:w-[40%] pe-[25px]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%]  lg:text-4xl tracking-wide ">
              Luxury Party Bus Rental
            </h1>
            <Link to="/party-bus-rental">
              <Button
                color="primary"
                className="mt-[18px] sm:mt-[20px] w-[130px] sm:w-[150px] md:w-[200px] h-[39px] sm:h-[46px] md:h-[50px] text-[14px] sm:text-[16px] font-dmsans font-semibold"
                variant="solid"
                onClick={() => {
                  const element = document.getElementById("form");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Reserve Now
              </Button>
            </Link>
          </div>
        </Section>
      </HeaderBanner>
      <Section>
        <Heading className="z-[2] relative mt-[-70px] md:mt-[-145px] ">
          we offer weekly and monthly party bus rentals to keep the celebration
          going as long as you need. Contact us today for a quote!
        </Heading>
        <Paragraph>
          New york is the largest city in Texas and a bustling hub of modern
          business, entertainment, and nightlife. Whether you're planning a
          corporate event, a birthday bash, or a night out on the town, you need
          a party bus rental that matches the energy and excitement of the city.
          A standard rental won’t cut it when it comes to making your event
          truly memorable.
        </Paragraph>
        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          If you're spending time in New york, you deserve a ride that can
          handle the party. BLACKTRUCKME is here to provide that experience with
          our fleet of top-of-the-line party buses, designed to offer luxury,
          comfort, and fun all in one
        </Paragraph>
        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          BLACKTRUCKME is pleased to offer party bus rental delivery services
          both in and outside of the New york area. We bring the party to you,
          saving you time and allowing you to focus on planning your event
          without the hassle of vehicle pick-up.
        </Paragraph>
        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          Whether you’re heading to a major event in New york or planning a road
          trip for a big celebration, BLACKTRUCKME has the perfect party bus to
          suit your needs.
        </Paragraph>
      </Section>
      <Section>
        <div className=" cars grid gap-y-[40px] md:gap-y-[70px] gap-[20px] grid-cols-1 lg:grid-cols-3 md:mt-[-50px] 2xl:max-w-[1440px] 2xl:px-0 mx-auto ">
          <CarCard cars={Cars} party prices />
        </div>
      </Section>
      <Section>
        <div className="md:mt-[-30px]">
          <Heading className={"md:mt-[40px] mt-[20px]"}>
            Make Your Event Unforgettable
          </Heading>
          <Paragraph>
            The right transportation can elevate any event, and BLACKTRUCKME
            party buses are designed to do just that. Our luxury party buses
            ensure that your guests experience the ultimate in comfort and
            style, with features that cater to every need and desire.
          </Paragraph>
          <Paragraph>
            Imagine hosting your next business outing, birthday, bachelor or
            bachelorette party, or prom in one of our stunning party buses.
            Instead of settling for a cramped car or a basic vehicle, let your
            guests enjoy a spacious, mobile venue that's fully equipped for fun.
          </Paragraph>
          <Heading className={"md:mt-[40px] mt-[20px]"}>
            Your Choice of Party Bus Experience
          </Heading>
          <Paragraph>
            When it comes to party bus rentals, BLACKTRUCKME offers the best
            selection to match any occasion:
          </Paragraph>

          {each.map((data, index) => {
            return (
              <ul
                className="ps-[15px] md:ps-[35px] mt-[10px] md:mt-[20px] mb-[15px]"
                key={index}
              >
                <li className="text-white text-[14.5px] font-monts md:mb-[10px] list-disc">
                  {data}
                </li>
              </ul>
            );
          })}
          <Paragraph>
            No matter how extravagant your event plans, we have a party bus that
            will cater to your needs and exceed your expectations.
          </Paragraph>
          <Heading className={"md:mt-[40px] mt-[20px]"}>
            Additional Services
          </Heading>
          <Paragraph>
            At BLACKTRUCKME, we don't just provide party bus rentals in New
            york—we go above and beyond to ensure your event runs smoothly. Our
            professional drivers are skilled and experienced, allowing you to
            focus on enjoying the ride without any worries.
          </Paragraph>
          <Paragraph>
            Professional Chauffeurs: Our drivers are not only courteous and
            knowledgeable about the city, but they also ensure that you and your
            guests arrive safely and on time to every destination.
          </Paragraph>
          <Paragraph>
            Customized Itineraries: Whether you need multiple stops or a
            specific route, we can customize your party bus experience to fit
            your event perfectly.
          </Paragraph>
          <Heading className={"md:mt-[40px] mt-[20px]"}>
            Your Ultimate Party Awaits
          </Heading>
          <Paragraph>
            BLACKTRUCKME is here to make your next celebration in New york a
            resounding success. Whether you're planning an event in town or
            beyond, our party buses are ready to provide the luxury and
            excitement you deserve. Don’t let the opportunity to elevate your
            event slip away.
          </Paragraph>
          <Paragraph>
            Our party bus rentals offer the space, luxury, and fun that your
            guests will remember. Make your event stand out and leave the right
            impression with BLACKTRUCKME. Your ultimate party experience starts
            here!
          </Paragraph>
        </div>
      </Section>
      <div className="mb-[0px] mt-[20px] md:mb-[90px]">
        <Dream />
      </div>
    </div>
  );
}

export default PartBus;
