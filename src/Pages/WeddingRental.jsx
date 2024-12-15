import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import { Button } from "@nextui-org/react";
import ev1 from "../assets/images/wed3.jpg";
import logo from "../assets/images/bently-logo.webp";
import car from "../assets/images/hd1-transformed.png";
import car2 from "../assets/images/hd2-transformed.png";
import car3 from "../assets/images/interior1.jpg";
import { Link } from "react-router-dom";
import Dream from "../components/Dream";
import Paragraph from "../components/ui/Paragraph";
import Heading from "../components/ui/Heading";
import { GrGallery } from "react-icons/gr";
import { IoPricetagsOutline } from "react-icons/io5";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Cars } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwipeBtns from "../components/SwipeBtns";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperBtn from "../components/SwiperBtn";
import CarCard from "../components/CarCard";
function WeddingRental() {
  const data = [
    {
      img: [car, car2, car, car2],
      logo: logo,
      name: "Bentley Flying Spur (Black)",
      weekday: "$999",
      Weekend: "$1099",
      day_weekend: "$2997",
      weekly: "$4995",
    },
    {
      img: [car, car2, car, car2],
      logo: logo,
      name: "2022 Bentley Flying Spur (Black)",
      weekday: "$999",
      Weekend: "$1099",
      day_weekend: "$2997",
      weekly: "$4995",
    },
    {
      img: [car, car2, car, car2],
      logo: logo,
      name: "2022 Bentley Flying Spur (Black)",
      weekday: "$999",
      Weekend: "$1099",
      day_weekend: "$2997",
      weekly: "$4995",
    },
    {
      img: [car, car2, car, car2],
      logo: logo,
      name: "2022 Bentley Flying Spur (Black)",
      weekday: "$999",
      Weekend: "$1099",
      day_weekend: "$2997",
      weekly: "$4995",
    },
  ];
  return (
    <div className="wedding mb-[100px]">
      <HeaderBanner className={"lg:min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[60px] md:w-[40%] pe-[25px]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide ">
              Wedding Car Rental in Houston
            </h1>
            <Link to="/sepcial-event-reservsation">
              <Button
                color="primary"
                className="mt-[18px] sm:mt-[20px] w-[130px] sm:w-[150px] md:w-[200px] h-[39px] sm:h-[46px] md:h-[50px] text-[14px] sm:text-[16px] font-dmsans font-semibold"
                variant="solid"
              >
                Reserve Now
              </Button>
            </Link>
          </div>
        </Section>
      </HeaderBanner>
      <Section>
        <Paragraph className={" z-[2] relative mt-[-70px] md:mt-[-150px]"}>
          If you or a loved one has their special day coming up, you want them
          to have the best experience they can get. A wedding should be a
          once-in-a-lifetime experience, which is why you need a wedding car
          rental in Houston.
        </Paragraph>
        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          With BLACKTRUCKME, we’re not offering a standard limo. We know you
          want something more special. On the most special day of their life,
          let them drive away with one of the most special cars on the planet.
        </Paragraph>
        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          BLACKTRUCKME is pleased to offer exotic car rental delivery services
          both in and outside of the Houston area. We can bring our amazing
          vehicles to you so that you don’t have to take time out of your busy
          schedule to pick one up.
        </Paragraph>
        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          Whether you’re in need of a McLaren for your trip to Tulsa for the PGA
          Championship, or you want to roll up to LA’s SoFi Stadium in a
          Lamborghini for next year’s CFP National Championship, we’re happy to
          help.
        </Paragraph>
      </Section>
      <Section
        className={"md:max-w-[95%] mx-auto w-full md:!px-[25px] md:mt-[70px]"}
      >
        <div className="img-hold w-full max-h-[500px] overflow-hidden mb-[15px] md:mb-[20px]">
          <img
            src={ev1}
            className="w-full h-full object-bottom object-cover"
            alt=""
          />
        </div>
        <div className="">
          <Heading className={"md:mb-[20px] mb-[10px]"}>
            A Special Car for a Special Day
          </Heading>
          <Paragraph>
            When it comes to weddings, people are willing to spend big money for
            a memorable experience. Whether it’s the venue, or the decorations,
            it has to be amazing. No one wants to have a run-of-the-mill
            wedding.
          </Paragraph>
          <Paragraph>
            One thing a lot of people don’t think about is the vehicle that the
            bride and groom will be leaving in. For some people, the traditional
            limo is what they expect, for others a personal vehicle owned by the
            pair.
          </Paragraph>
          <Paragraph>
            What if you could do something that no one would expect?
          </Paragraph>
          <Paragraph>
            BLACKTRUCKME is here to provide you with the wedding car rental in
            Houston that will blow the minds of your guests.
          </Paragraph>
        </div>
        <div className="mt-[50px] md:mt-[40px] mb-[35px] md:mb-[80px]">
          <div className=" cars grid gap-y-[40px] md:gap-y-[70px] gap-[20px] grid-cols-1 lg:grid-cols-3 mt-[50px] 2xl:max-w-[1440px] 2xl:px-0 mx-auto ">
            <CarCard cars={Cars} link/>
          </div>
        </div>
        <Paragraph className={"mt-[15px] md:mt-[40px] mb-[20px] md:mb-[30px]"}>
          These are just a few of the varying models we offer. No matter what
          you’re looking for, we have a special vehicle waiting for your Wedding
          Day event.
        </Paragraph>
        <Heading>A Photo to Remember</Heading>
        <Paragraph>
          While driving off to your honeymoon in one of our amazing vehicles
          will make you the envy of the party, we can do more than that. We can
          even arrange for you to have a photoshoot with the car of your choice.
        </Paragraph>
        <Paragraph className={"md:mb-[30px] mb-[15px]"}>
          Imagine having wedding photos taken next to a McLaren GT. That’s a
          photo that people will want to see, and a memory you’ll want to share.
        </Paragraph>
        <Heading>A Personal Driver</Heading>
        <Paragraph className={"mb-[15px] md:mb-[30px]"}>
          BLACKTRUCKME doesn’t just provide amazing vehicles for weddings, we
          can also provide you a driver. A lot of weddings have a reception that
          is designed to celebrate the happy couple. Along with this celebration
          goes drinking and partying.
        </Paragraph>
        <Paragraph className={"mb-[15px] md:mb-[30px]"}>
          A personal driver from Dream Charter is a professional who can not
          only drop you off, but take you to your next destination. Whether
          you’re going to the airport for a long distance honeymoon, or one of
          Houston’s amazing resort hotels, we can get you there.
        </Paragraph>
        <Paragraph className={"mb-[15px] md:mb-[30px]"}>
          Driving drunk is never worth the risk, especially when it could ruin
          your wedding.
        </Paragraph>
        <Heading>Ditch the Limo</Heading>
        <Paragraph>
          Ditch the old-fashioned limo or worn-out personal vehicle. Let Dream
          Charters make your dream come true on the day that is supposed to be
          about your dreams. No one will forget your wedding when you ride in
          one of the vehicles we can provide.
        </Paragraph>
      </Section>
      <div className="mb-[-70px] md:mb-[unset]">
        <Dream />
      </div>
    </div>
  );
}

export default WeddingRental;
