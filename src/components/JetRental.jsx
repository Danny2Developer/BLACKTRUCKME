import { Link } from "react-router-dom";
import Section from "./Section";
import { Button } from "@nextui-org/react";
function JetRental() {
  return (
    <Section className={"px-0 md:px-0"}>
      <div className="bggs relative w-full px-[10px] lg::px-[80px] 2xl:h-[50vh] min-h-[150px] sm:h-[28vh] lg:h-[40vh] xl:h-[70vh] mt-[200px] sm:mt-[150px] lg:mt-[180px]">
        <div className="absolute bottom-[-180px] sm:bottom-[-80px]">
          <h1 className="text-[20px] leading-snug xl:leading-normal mb-[10px] sm:text-[45px] font-semibold w-[70%] lg:w-[45%] xl:w-[35%] font-dmsans">
            Private Jet Rentals
          </h1>
          <p className="text-[12.5px] md:text-[14.5px] font-monts w-[95%] md:w-[70%]">
            Save time by skipping the lines and immediately boarding your
            aircraft. Avoid crowded terminals and long lines when you charter
            your flight. Relax in spacious leather seats and roomy interiors.
            Enjoy premium beverages and catering. Fly direct and travel when
            it’s convenient to you. It’s all possible when you charter a jet
            with BLACKTRUCKME.
          </p>
          <Link to="/services/private-jet-rental">
            <Button
              color="primary"
              className="mt-[20px] md:mt-[30px] w-[150px] md:w-[200px] h-[45px] md:h-[55px] md:text-[16px] font-dmsans md:font-semibold"
              variant="solid"
            >
              PRIVATE JET
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default JetRental;
