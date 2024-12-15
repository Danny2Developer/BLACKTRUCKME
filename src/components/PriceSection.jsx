import React from "react";
import { Button, DatePicker } from "@nextui-org/react";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { Link } from "react-router-dom";
import seatIMG from "../assets/images/Seating.png";
import powerIMG from "../assets/images/Horsepower.png";
import speedIMG from "../assets/images/speed.png";
import engineIMG from "../assets/images/Engine-Type.png";
import { CiClock2 } from "react-icons/ci";
import { IoAirplaneOutline } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
import { PiGasPumpLight } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
function PriceSection() {
  const [value, setValue] = React.useState(parseDate("2024-04-04"));
  let formatter = useDateFormatter({ dateStyle: "full" });
  return (
    <form className="w-full  md:w-[40%] h-fit bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gold px-[20px] py-[30px]">
      <div className="w-full flex md:flex-row flex-col gap-y-2 gap-x-4 font-dmsans mb-[30px]">
        <DatePicker
          className="w-full md:max-w-[284px]"
          label="Trip Start"
          value={value}
          onChange={setValue}
        />
        <DatePicker
          className="w-full md:max-w-[284px]"
          label="Trip End"
          value={value}
          onChange={setValue}
        />
      </div>
      <div>
        <h4 className="font-monts font-semibold mb-[10px]">Price</h4>
        <p className="flex items-center gap-2 font-dmsans font-medium md:font-semibold md:text-[18px] mt-[10px]">
          <IoPricetagsOutline className="text-[#C6A135] text-[23px]" /> $499/Day
        </p>
        <p className="text-gold block py-[10px] md:py-[10px] border-t-1 border-b-1 border-gold font-monts text-[14px] mt-[20px] font-medium">
          Also available for Chauffeur service
        </p>
        <h4 className="font-monts font-semibold mb-[10px] mt-[20px]">
          Car Details
        </h4>
        <div className=" grid grid-cols-2 gap-x-[30px] gap-y-[20px]">
          <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
            <img className="w-[13.5%]" src={seatIMG} alt="" />{" "}
            <span className="font-dmsans font-normal">4 Passengers</span>
          </div>
          <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
            <img className="w-[14%]" src={speedIMG} alt="" />{" "}
            <span className="font-dmsans font-normal">400</span>
          </div>
          <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
            <GiGearStickPattern className="text-[#C6A135] text-[28px]" />
            <span className="font-dmsans font-normal">Automatic</span>
          </div>
          <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
            <PiGasPumpLight className="text-[#C6A135] text-[28px]" />
            <span className="font-dmsans font-normal">Desiel</span>
          </div>
          <div className="font-monts col-span-1 text-[13.5px] font-medium flex items-center gap-2">
            <CiClock2 className="text-[28px] text-[#C6A135]" />
            <span className="font-dmsans font-normal">
              24/7 Delivery and Pickup
            </span>
          </div>
        </div>
        <Button
          className="w-full font-dmsans font-semibold mt-[30px]"
          size="lg"
          color="primary"
        >
          <Link to="/reservation">Schedule</Link>
        </Button>
      </div>
    </form>
  );
}

export default PriceSection;
