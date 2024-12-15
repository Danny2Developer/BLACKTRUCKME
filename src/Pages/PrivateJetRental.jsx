import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import { Button } from "@nextui-org/react";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import Dream from "../components/Dream";
import MoreBrands from "../components/MoreBrands";
import { useDisclosure } from "@nextui-org/react";
import PhotoShootModal from "../components/PhotoShootModal";
import SeeFaq from "../components/SeeFaq";
import PrivateJetRentalModal from "../components/PrivateJetRentalModal";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";

function PrivateJetRental() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="private-jet-rental">
      <HeaderBanner className={"lg:min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[30px] md:bottom-[60px] w-full md:w-[40%]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide ">
              Private Jet Rental
            </h1>
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
      <Section className={"!mt-[30px] md:mt-[40px]"}>
        <Heading className={"md:mt-[30px] mt-[15px]"}>
          Privacy, Luxury & Convenience
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          They say the journey is more important than the destination and that’s
          certainly true when you fly in a private jet. Whether you are
          traveling for business or pleasure, nothing matches the privacy,
          luxury and convenience of a private jet.
        </Paragraph>

        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          Save time by skipping the lines and immediately boarding your
          aircraft. Avoid crowded terminals and long lines when you charter your
          flight. Relax in spacious leather seats and roomy interiors. Enjoy
          premium beverages and catering. Fly direct and travel when it’s
          convenient to you. It’s all possible when you charter a jet.
        </Paragraph>
        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          Make your next trip special with the most exclusive way to fly.
        </Paragraph>
        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          Read to charter a private jet? Call BLACKTRUCKME at 713-806-5866 or
          email info@dreamcharters.us.
        </Paragraph>
        <Heading className={"md:mt-[30px] mt-[15px]"}>
          Ground Transportation
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          Most charter companies offer a simple, black sedan for your ground
          transportation. But at BLACKTRUCKME, we elevate your entire
          experience. We can provide transportation to and from the airport in
          one of our luxury or exotic cars.
        </Paragraph>
        <Paragraph className={"mt-[10px]"}>
          You can truly experience VIP status…no frequent flier miles required.
        </Paragraph>
      </Section>

      <Section className={"jet h-fit !py-[30px] md:py-[100px]"}>
        <div className="w-full md:w-[50%]">
          <Heading className={"md:mt-[30px] mt-[0px]"}>
            Skip the Lines & Get There Faster
          </Heading>
          <Paragraph className={"mt-[10px]"}>
            Long lines, missed connections and lengthy layovers add hours to
            your travel time. Get to your destination faster with a privately
            chartered direct flight.
          </Paragraph>
          <Paragraph className={"mt-[10px] md:mt-[20px]"}>
            {" "}
            Whether you are on your way to an important business meeting, taking
            a special trip or headed to a sporting event, a private jet offers
            the ultimate luxury experience.
          </Paragraph>
          <Paragraph className={"mt-[10px] md:mt-[20px]"}>
            {" "}
            Nothing beats the comfort, quiet and privacy you’ll experience on a
            private jet. Catch up on work, visit with someone special or simply
            take a nap in the spacious interior of your aircraft. There’s plenty
            of room to relax, unwind and enjoy the ride.
          </Paragraph>
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
      <Section className={"!mt-[30px] md:mt-[60px]"}>
        <Heading className={"md:mt-[30px] mt-[15px]"}>
          Are You Ready to Elevate Your Charter Experience?
        </Heading>
        <Paragraph className={"mt-[10px]"}>
          Even when you fly First Class, you’ll still have to deal with crowded
          terminals, long lines and cancelations. When you fly private, you are
          typically able to board your aircraft directly after your arrival. On
          board, you’ll have the space and privacy to have important
          conversations, relax and rest. Plus, you usually have the option to
          select your own catering and beverage service.
        </Paragraph>
        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          Most planes are equipped with Wifi, so you can watch whatever movie or
          entertainment you like or connect to the internet.
        </Paragraph>
        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          Once you arrive at your destination, you can immediately disembark.
          Your ground transportation will be waiting for you.
        </Paragraph>
        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          If your schedule changes, your private charter will never leave
          without you. Last minute requests or destination changes are typically
          not a problem.
        </Paragraph>
        <Paragraph className={"mt-[10px] md:mt-[20px]"}>
          Elevate your travel experience with you charter a jet with Dream
          Charters.
        </Paragraph>
      </Section>
      <SeeFaq />
      <Dream />
      <PrivateJetRentalModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}

export default PrivateJetRental;
