import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import { Button } from "@nextui-org/react";
import { IoPricetagOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import Dream from "../components/Dream";
import { Link } from "react-router-dom";
import SeeFaq from "../components/SeeFaq";
import MoreBrands from "../components/MoreBrands";
import PersonalDriverModal from "../components/PersonalDriverModal";
import { useDisclosure } from "@nextui-org/react";
import Paragraph from "../components/ui/Paragraph";
import Heading from "../components/ui/Heading";
function OurDifference() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const data = [
    {
      IMG: <IoCarSportOutline />,
      heading: "Incredible Performance",
      para: "Supercars and exotic sports cars are designed to push the envelope when it comes to performance. There is no comparison to the torque, horsepower, and speed these elite vehicles can produce. ",
      para2:
        "Keeping these exceptional cars at peak performance is no easy task. Maintaining our fleet is not as simple as taking the family sedan in for a tune-up. Cars of this caliber need mechanics and technicians that know the minutiae of the complex systems these cars contain.",
      para3:
        "We have a dedicated maintenance crew that keeps our vehicles running perfectly, so all you have to worry about is your destination.",
    },
    {
      IMG: <IoDiamondOutline />,
      heading: "The Ultimate Luxury Experience",
      para: "Quality, comfort, and elegance have long been synonymous with luxury. At BLACKTRUCKME, you’ll find meticulously maintained interiors elevate your experience. Our in-house detail team ensures each car is cared for with exceptional attention to detail.",
      para2:
        "Plus, we don’t want you to waste time at the pump. You’re ready to drive when we hand over the keys. Every car comes with a full tank of gas. The luxury experience doesn’t end there. From your reservation to the final mile, our Customer Support Team is dedicated to you. We want ever aspect of your charter experience to be perfect.",
      para3:
        "Whether you need rental assistance, roadside support, or simply a dinner recommendation, our Customer Support Team is always available.",
    },
    {
      IMG: <IoPricetagOutline />,
      heading: "Competitive Prices",
      para: "Don’t overpay for the luxury experience. You can drive the latest cars for an incredible price. We offer the finest cars at the best price in Texas. Enjoy free delivery for 3+ day rentals and ask about our weekday discounts. Whether you’re looking to hit the town or head out on the open road, you can own the experience when you rent the luxury.",
    },
  ];
  return (
    <div className="diff">
      <HeaderBanner className={"min-h-[400px] lg:min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[45px] md:bottom-[60px] md:w-[40%]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-[90%] lg:text-4xl tracking-wide ">
              The Dream Charter Difference
            </h1>
            <p className=" md:w-full w-[90%] font-monts font-medium text-md md:text-base md:mt-3">
              Whether you are looking for power, prestige, or performance, we
              have the ultimate luxury experience. Charter with us for access to
              the world’s most exclusive vehicles.
            </p>
            <Button
              onPress={onOpen}
              color="primary"
              className="mt-[18px] sm:mt-[30px] w-[130px] sm:w-[150px] md:w-[200px] h-[39px] sm:h-[46px] md:h-[50px] text-[14px] sm:text-[16px] font-dmsans font-semibold"
              variant="solid"
            >
              Reserve Now
            </Button>
          </div>
        </Section>
      </HeaderBanner>
      <div className="mt-[40px] md:mt-[60px]">
        <MoreBrands />
      </div>
      <Section className="md:max-w-[95%] w-full mx-auto md:mt-[50px]">
        <div className="top mb-[50px]">
          <h1 className="font-semibold text-[22px] md:text-[35px] font-dmsans">
            Unmatched Selection Of The Newest Vehicles On The Market
          </h1>
          <Paragraph className={"mt-[10px] md:mt-[15px]"}>
            Simply put – we have the best cars money can buy. We have the newest
            and most exclusive brands, the latest models, and the finest luxury
            interiors. Rolls Royce, Bentley, Lamborghini, Ferrari–we have it
            all.
          </Paragraph>
          <Paragraph className={"mt-[10px] md:mt-[15px]"}>
            Our fleet is impeccably maintained and constantly refreshed with the
            latest models available. We detail, wash and wax each vehicle before
            every charter. You won’t find a dent, ding or scratch on our
            pristine cars. Instead, you can expect new models that look just as
            perfect as the day they were delivered.
          </Paragraph>
          <Paragraph className={"mt-[10px] md:mt-[15px]"}>
            Whether you are looking for a luxury SUV, a supercar, or an exotic,
            we have cars that turn heads.
          </Paragraph>
        </div>
        <div className="flex flex-col gap-y-[50px]">
          {data.map((data, index) => {
            const { IMG, heading, para, para2, para3 } = data;
            return (
              <div className="flex flex-col gap-[5px]" key={index}>
                <i className="text-[60px] md:text-[80px] text-gold">{IMG}</i>
                <Heading>{heading}</Heading>
                <Paragraph className={"mt-[-8px]"}>{para}</Paragraph>
                <Paragraph className={"mt-[10px]"}>{para2}</Paragraph>
                <Paragraph className={"mt-[10px]"}>{para3}</Paragraph>
              </div>
            );
          })}
        </div>
      </Section>
      <Dream />
      <SeeFaq />
      <PersonalDriverModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}

export default OurDifference;
