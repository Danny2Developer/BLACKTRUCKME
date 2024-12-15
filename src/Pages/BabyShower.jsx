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

import { Swiper, SwiperSlide } from "swiper/react";
import SwipeBtns from "../components/SwipeBtns";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperBtn from "../components/SwiperBtn";
import BabyShowerModal from "../components/BabyShowerModal";
import CarCard from "../components/CarCard";
import { Cars } from "../../Data";
function BabyShower() {
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
    <div className="baby-shower">
      <HeaderBanner className={"lg:min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[30px] md:bottom-[60px] right-[25px] left-[25px] md:left-[unset] md:right-[unset] md:w-[40%]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide ">
              Baby Shower Car Rental
            </h1>
            <p className=" font-monts font-meduim xs:w-[80%] w-full md:w-auto text-sm md:text-base md:mt-3">
              Get ready to make unforgettable memories at your baby shower with
              our stunning car rentals. Let us help you make a grand entrance
              and celebrate this special occasion in style.
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
      <Section className={"!mt-[30px] md:mt-[70px]"}>
        <Heading className={"mt-[15px] md:mt-[30px]"}>
          Make Your Baby Shower Unforgettable with BLACKTRUCKME
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          The right car makes a statement, and there’s no better way to elevate
          your baby shower than with a luxury or exotic car from BLACKTRUCKME.
          We offer Houston’s most exclusive selection of luxury and exotic cars,
          perfect for making your celebration one to remember. Whether you’re
          arriving in a Ferrari, Lamborghini, or Rolls Royce, pulling up in one
          of these stunning cars will add a touch of elegance and style to your
          special day.
        </Paragraph>
        <div className=" cars grid gap-y-[40px] md:gap-y-[70px] gap-[20px] grid-cols-1 lg:grid-cols-3  2xl:max-w-[1440px] 2xl:px-0 mx-auto md:mb-[80px] mt-[40px] md:mt-[80px]">
          <CarCard cars={Cars} onPress={onOpen} />
        </div>
        <Heading className={"mt-[40px] md:mt-[30px]"}>
          Why Rent a Luxury Car for Your Baby Shower?
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          A baby shower is a special celebration of a new life, and arriving in
          style can add to the excitement and joy of the day. Imagine the
          delight on your guests' faces when they see you arrive in a McLaren GT
          or a Lamborghini Huracán. These cars aren’t just vehicles; they’re a
          way to create lasting memories and make your baby shower truly
          exceptional.
        </Paragraph>
        <Heading className={"mt-[15px] md:mt-[30px]"}>
          Our Fleet for Your Baby Shower
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          BLACKTRUCKME offers a wide range of luxury and exotic vehicles to suit
          your style and make your baby shower extraordinary. You don’t have to
          be a millionaire to experience the thrill of riding in a luxury car.
          Our fleet includes top brands such as Ferrari, Lamborghini, McLaren,
          Mercedes-Benz, and more. Whatever your style, we have the perfect car
          to match your vision for the day.
        </Paragraph>
        <Heading className={"mt-[15px] md:mt-[30px]"}>
          The Perfect Arrival
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          At BLACKTRUCKME, we not only provide the car but also ensure a
          seamless experience. From arranging the perfect drop-off to making
          sure your ride is as smooth as it is glamorous, we handle every
          detail. If you need assistance with planning, our team is here to help
          create the perfect arrival that matches your vision for your baby
          shower.
        </Paragraph>
        <Heading className={"mt-[15px] md:mt-[30px]"}>
          Questions About Baby Shower Car Rentals in Houston?
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          If you have any questions about our baby shower car rental service,
          availability, pricing, or reservations, don’t hesitate to contact us
          at 713-806-5866 or email info@dreamcharters.us. Book your ride today
          and make your baby shower a truly memorable event!
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
      <BabyShowerModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}

export default BabyShower;
