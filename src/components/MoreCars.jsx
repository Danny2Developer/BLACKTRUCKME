import { Button } from "@nextui-org/react";
import { GoArrowRight } from "react-icons/go";
import CarCard from "./CarCard";
import { Cars } from "../../Data";

function MoreCars() {
  return (
    <div className="car-fleet mt-[40px] md:mt-[100px] mb-[100px]">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="name font-dmsans text-[15px] md:text-[30px] text-gold">
          You may also like
        </h1>
        <Button
          className=" font-dmsans text-[12px] md:text-[15px]"
          color="transparent"
          endContent={<GoArrowRight className="text-gold text-[18px]" />}
        >
          View More
        </Button>
      </div>
      <div className=" cars grid gap-y-[40px] md:gap-y-[70px]  gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[30px] md:mt-[50px]">
        <CarCard cars={Cars} />
      </div>
    </div>
  );
}

export default MoreCars;
