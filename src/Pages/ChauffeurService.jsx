import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import car1 from "../assets/images/priv1.webp";
import car2 from "../assets/images/priv2.webp";
import car3 from "../assets/images/priv3.webp";
import car4 from "../assets/images/priv4.webp";
import car5 from "../assets/images/priv5.webp";
import car6 from "../assets/images/priv6.webp";
import car7 from "../assets/images/priv7.webp";
import Dream from "../components/Dream";
import PersonalDriverModal from "../components/PersonalDriverModal";
import { useDisclosure } from "@nextui-org/react";
import Paragraph from "../components/ui/Paragraph";
import Heading from "../components/ui/Heading";
import CarCard from "../components/CarCard";
import { Cars } from "../../Data";
function ChauffeurService() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const CarData = [
    {
      IMG: car1,
      Name: "Rolls Royce Cullinan",
      Seat: 2,
      Hour: "500",
    },
    {
      IMG: car2,
      Name: "Rolls Royce Ghost",
      Seat: 2,
      Hour: "500",
    },
    {
      IMG: car3,
      Name: "GLS Maybach",
      Seat: 2,
      Hour: "350",
    },
    {
      IMG: car4,
      Name: "Maybach Sprinter",
      Seat: 8,
      Hour: "300",
    },
    {
      IMG: car5,
      Name: "Mercedes Sprinter",
      Seat: 10,
      Hour: "300",
    },
    {
      IMG: car6,
      Name: "Mercedes S580",
      Seat: 2,
      Hour: "150",
    },
    {
      IMG: car7,
      Name: "Escalade Platinum",
      Seat: 5,
      Hour: "125",
    },
  ];
  return (
    <div className="personal-dv">
      <HeaderBanner className={"lg:min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[25px] md:bottom-[60px] md:w-[35%]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[80%] lg:text-4xl tracking-wide ">
              Chauffeur Service
            </h1>
            {/* <p className=" font-monts font-semibold text-sm md:mt-3">
              4 HOUR MINIMUM
            </p> */}
            <p className=" font-monts font-meduim xs:w-[80%] w-full md:w-auto text-sm md:text-base md:mt-3">
              Experience the luxury of a personal chauffeur with BLACKTRUCKME.
              Whether it's airport pickup, drop-off, or a special occasion, our
              professional chauffeurs are available with a 2-hour minimum
              booking.
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
      <Section>
        <div className=" cars grid gap-y-[40px] md:gap-y-[70px] gap-[20px] grid-cols-1 lg:grid-cols-3 md:mt-[-50px] 2xl:max-w-[1440px] 2xl:px-0 mx-auto mb-[45px] md:mb-[80px]">
          <CarCard prices cars={Cars} onPress={onOpen} />
        </div>
        <div className="md:!mt-[40px] mt-[8px]">
          <Heading className={"md:mb-[20px] mb-[10px] mt-[10px] md:mt-[20px]"}>
            Take in Every Moment with a Chauffeur Service
          </Heading>
          <Paragraph className={"mt-[10px] md:mt-[20px]"}>
            Enjoy your night out with the luxury and convenience of a personal
            chauffeur from BLACKTRUCKME. With our professional chauffeurs, you
            can focus on your evening, avoid the hassle of parking, and relax in
            one of Houston's most exclusive cars. Whether attending the biggest
            concert of the year, a star-studded premiere, or a major sporting
            event, make a grand entrance in style with BLACKTRUCKME.
          </Paragraph>

          <Heading className={"md:mb-[20px] mb-[10px] mt-[10px] md:mt-[20px]"}>
            Experience Luxury and Peace of Mind
          </Heading>
          <Paragraph className={"mt-[10px] md:mt-[20px]"}>
            When you're headed out for a special occasion, a chauffeur service
            is the way to go. Enjoy your night out, knowing your dedicated
            chauffeur will handle all the driving, no matter how many stops you
            need to make. At the end of the evening, your chauffeur will be
            there to take you home safely, so you can fully enjoy your time
            without any worries.
          </Paragraph>
          <Paragraph className={"mt-[10px] md:mt-[20px]"}>
            Our chauffeurs are professional, courteous, and impeccably dressed,
            ready to provide discreet and exceptional service. With Dream
            Charters, every night is a special night, and we strive to make your
            experience unforgettable. Sit back, relax, and let us take care of
            the driving.
          </Paragraph>
        </div>
        <div className="faq mt-[25px] md:mt-[40px]">
          <Heading className={"md:mb-[20px] mb-[10px]"}>
            Chauffeur Service Rates
          </Heading>
          <Paragraph className={"mt-[10px] md:mt-[20px]"}>
            Our chauffeur service is available at an hourly rate with a
            four-hour minimum. We offer competitive rates for superior service,
            ensuring you receive the best value for your special event.
            Remember, having a professional chauffeur is not just a luxury but a
            smart choice for your safety and comfort. To request a quote for
            your event, call 713-806-5866.
          </Paragraph>
          <Heading className={"md:mb-[20px] mb-[10px] mt-[15px] md:mt-[25px]"}>
            Why Choose a Chauffeur Over Ride-Sharing?
          </Heading>
          <Paragraph className={"mt-[10px] md:mt-[20px]"}>
            While services like Uber and Lyft offer convenience, they may not
            provide the luxury experience you seek for special occasions.
            Arriving in a 2022 Lamborghini Urus with a dedicated chauffeur is
            far more impressive than an Uber’s standard vehicle. With Dream
            Charters, you have a personal chauffeur focused solely on your
            needs—no waiting by the curb, no surge charges, and no compromises
            on comfort.
          </Paragraph>
          <Paragraph className={"mt-[10px] md:mt-[20px]"}>
            Elevate your experience with an exotic car and a professional
            chauffeur ready to take you to your next destination. Our chauffeurs
            are experienced, reliable, and committed to providing a safe and
            comfortable ride, making your special night truly memorable.
          </Paragraph>

          <Heading className={"md:mb-[20px] mb-[10px] mt-[15px] md:mt-[25px]"}>
            Chauffeur Services for Any Occasion
          </Heading>
          <Paragraph className={"mt-[10px] md:mt-[20px]"}>
            Whether it’s a wedding, business event, concert, sporting event, or
            a night out, our chauffeurs are trained to provide exceptional
            service for any occasion. Let us ensure your night is unforgettable
            with the perfect ride.
          </Paragraph>
          <Heading className={"md:mb-[20px] mb-[10px] mt-[15px] md:mt-[25px]"}>
            Questions About Our Chauffeur Service?
          </Heading>
          <Paragraph className={"mt-[10px] md:mt-[20px]"}>
            If you have any questions about our chauffeur services, exotic car
            rentals, or other offerings, please contact us at 713-806-5866 or
            email info@dreamcharters.us. Book your chauffeur today and elevate
            your experience with BLACKTRUCKME.
          </Paragraph>
          <Link to="/faq">
            <Button
              variant="ghost"
              className="border-2 mt-[25px] md:mt-[40px] border-white w-full lg:w-[180px] md:w-[170px] h-[45px] md:h-[49px] text-[15px] font-dmsans font-medium  md:font-semibold"
            >
              See All FAQs
            </Button>
          </Link>
        </div>
      </Section>
      <Dream />
      <PersonalDriverModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}

export default ChauffeurService;
