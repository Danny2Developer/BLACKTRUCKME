import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import { Button } from "@nextui-org/react";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import Dream from "../components/Dream";
import MoreBrands from "../components/MoreBrands";
import { useDisclosure } from "@nextui-org/react";
import PhotoShootModal from "../components/PhotoShootModal";
import Paragraph from "../components/ui/Paragraph";
import Heading from "../components/ui/Heading";
import logo from "../assets/images/bently-logo.webp";
import car from "../assets/images/hd1-transformed.png";
import car2 from "../assets/images/hd2-transformed.png";
import car4 from "../assets/images/lambo2.webp";
import car5 from "../assets/images/lambo3.webp";
import car3 from "../assets/images/interior1.jpg";
import { GrGallery } from "react-icons/gr";
import { Link } from "react-router-dom";
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
function PromCarRental() {
  const data = [
    {
      img: [car, car2, car, car2],
      logo: logo,
      name: " Bentley Flying Spur (Black)",
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const Brands = [
    "Audi",
    "Cadillac ",
    "Chevy Corvette",
    "Ferrari",
    "Lamborghini",
    "McLaren",
    "Porsche",
    "Rolls Royce",
  ];
  return (
    <div className="photoshoot">
      <HeaderBanner className={"lg:min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[30px] md:bottom-[60px] md:w-[40%]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide ">
              Prom Car Rental
            </h1>
            <p className=" font-monts font-meduim xs:w-[80%] w-full md:w-auto text-sm md:text-base md:mt-3">
              Get ready to make unforgettable memories on your prom night with
              our stunning car rentals. Let us help you make a grand entrance
              and celebrate in style.
            </p>
            <Button
              onPress={onOpen}
              color="primary"
              className="mt-[18px] sm:mt-[20px] w-[130px] sm:w-[150px] md:w-[200px] h-[39px] sm:h-[46px] md:h-[50px] text-[14px] sm:text-[16px] font-dmsans font-semibold"
              variant="solid"
            >
              Reserve Now
            </Button>
          </div>
        </Section>
      </HeaderBanner>
      <Section className={"!mt-[45px] md:mt-[70px]"}>
        <Heading className={"mt-[15px] md:mt-[30px]"}>
          Make Your Prom Unforgettable with BLACKTRUCKME
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          The right car makes a statement, and there's no better way to make an
          entrance at your prom than with a luxury or exotic car from Dream
          Charters. We offer Houston’s most exclusive selection of luxury and
          exotic cars, perfect for making your prom night one to remember.
          Whether you’re arriving in a Ferrari, Lamborghini, or Rolls Royce,
          pulling up in one of these stunning cars will turn heads and make your
          night unforgettable.
        </Paragraph>
        <div className=" cars grid gap-y-[40px] md:gap-y-[70px] gap-[20px] grid-cols-1 lg:grid-cols-3 2xl:grid-col-3  2xl:max-w-[1440px] 2xl:px-0 mx-auto mb-[45px] md:mb-[80px] mt-[40px] md:mt-[80px]">
          <CarCard cars={Cars} onPress={onOpen} />
        </div>
        <Heading className={"mt-[15px] md:mt-[30px]"}>
          Why Rent a Luxury Car for Prom?
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          Prom is a once-in-a-lifetime event, and arriving in style can elevate
          the entire experience. Imagine the excitement and attention you’ll
          receive when you arrive in a McLaren GT or a Lamborghini Huracán.
          These cars aren’t just vehicles; they’re a way to create memories and
          make your prom night truly special.
        </Paragraph>
        <Heading className={"mt-[15px] md:mt-[30px]"}>
          Our Fleet for Your Prom Night
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          BLACKTRUCKME offers a wide range of luxury and exotic vehicles to suit
          your style and make your prom night extraordinary. You don’t have to
          be a millionaire to experience the thrill of riding in a luxury car.
          Our fleet includes top brands such as Ferrari, Lamborghini, McLaren,
          Mercedes-Benz, and more. Whatever your taste, we have the perfect car
          to match your dream prom night.
        </Paragraph>
        <Heading className={"mt-[15px] md:mt-[30px]"}>
          The Perfect Arrival
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          At BLACKTRUCKME, we not only provide the car but also the red-carpet
          treatment. From arranging the perfect drop-off to ensuring your ride
          is as smooth as it is glamorous, we take care of every detail. If you
          need assistance with planning, our team is here to help create the
          perfect arrival that matches your vision for the night.
        </Paragraph>
        <Heading className={"mt-[15px] md:mt-[30px]"}>
          Questions About Prom Car Rentals in Houston?
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          If you have any questions about our prom car rental service,
          availability, pricing, or reservations, don’t hesitate to contact us
          at 713-806-5866 or email info@dreamcharters.us. Book your ride today
          and make your prom night a legendary one!
        </Paragraph>
        <Link to="/faq">
          <Button
            variant="ghost"
            className="border-2 mt-[40px] border-white w-full lg:w-[180px] md:w-[170px] h-[45px] md:h-[49px] text-[15px] font-dmsans font-medium  md:font-semibold"
          >
            See All FAQs
          </Button>
        </Link>
      </Section>
      <div className="mt-[40px] md:mt-[80px] md:mb-[-50px]">
        <MoreBrands />
      </div>
      <Dream />
      {/* modal */}
      <PhotoShootModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}

export default PromCarRental;
