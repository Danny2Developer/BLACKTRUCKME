import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import { useState, useRef } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Input from "../components/ui/Input";
import { Link } from "react-router-dom";
import { Button, DatePicker, Select, SelectItem } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function PartyBusRental() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const handlesubmit = () => {
    navigate("/thanks");
  };
  const times = [
    { key: "4_hours", label: "4 Hours" },
    { key: "5_hours", label: "5 Hours" },
    { key: "6_hours", label: "6 Hours" },
    { key: "7_hours", label: "7 Hours" },
    { key: "8_hours", label: "8 Hours" },
    { key: "9_hours", label: "9 Hours" },
    { key: "10_hours", label: "10 Hours" },
  ];
  const cars = [
    { key: "", label: "Select One" },
    { key: "audi_r8", label: "Audi R8" },
    { key: "bmw_se", label: "Bmw se" },
  ];
  return (
    <div className="reservation ref">
      <HeaderBanner className={"min-h-[370px] lg:min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[60px] md:w-[50%]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide ">
              Reserve Your Dream Charter Sprinter Van Service
            </h1>
            <p className=" md:w-full w-[90%] font-monts font-semibold text-md md:text-lg md:mt-3">
              Your Dream Charter sprinter van service includes one of our
              professional chauffeurs for the extent of your service.
            </p>
          </div>
        </Section>
      </HeaderBanner>
      <div className="2xl:max-w-[1440px] 2xl:px-0 mx-auto px-[25px] md:px-[60px] mt-[40px] md:mt-[100px] mb-[90px] md:mb-[45px]">
        <form onSubmit={handlesubmit} action="">
          <div className="grid grid-cols-1 lg:max-w-[55%] mx-auto w-full items-end gap-[15px] md:gap-[26px]">
            <Select
              label="Vehicle"
              classNames={{
                label: "text-sm md:text-base font-medium mb-2 text-white z-[1]",
                selectorIcon: "text-gold",
                trigger:
                  "!bg-[#242427] !hover:bg-[#242427] !border-gold border h-[46px]",
              }}
              labelPlacement="outside"
              defaultSelectedKeys={[""]}
              className="w-full font-dmsans"
            >
              {cars.map((car) => (
                <SelectItem key={car.key}>{car.label}</SelectItem>
              ))}
            </Select>
            {/* <Input label="Vehicle Preference" placeHolder="" type="text" /> */}
            <Input label="First Name" placeHolder="" type="text" />
            <Input label="Last Name" placeHolder="" type="text" />
            <Input label="Email" placeHolder="" type="email" />
            <div className="font-dmsans">
              <label
                for="textarea-label-with-helper-text"
                className="block text-sm md:text-base font-medium mb-2 dark:text-white"
              >
                Phone
              </label>
              <PhoneInput
                defaultCountry="us"
                value={phone}
                className=" font-dmsans"
                inputClassName={
                  "py-3 px-4 !rounded-r-lg text-sm !text-white w-full !bg-[#242427] !border-gold !placeholder-neutral-500 !h-[45px] !focus:border-gold focus:ring-neutral-600"
                }
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <Select
              label="Length Of Time"
              classNames={{
                label: "text-sm md:text-base font-medium mb-2 text-white z-[1]",
                selectorIcon: "text-gold",
                trigger:
                  "!bg-[#242427] !hover:bg-[#242427] !border-gold border h-[46px]",
              }}
              labelPlacement="outside"
              defaultSelectedKeys={["4_hours"]}
              className="w-full font-dmsans"
            >
              {times.map((time) => (
                <SelectItem key={time.key}>{time.label}</SelectItem>
              ))}
            </Select>
            <DatePicker
              labelPlacement="outside"
              label="Date "
              classNames={{
                label: "text-sm md:text-base font-medium mb-2 text-white z-[1]",
                selectorIcon: "text-gold",
                trigger:
                  "!bg-[#242427] !hover:bg-[#242427] !border-gold border h-[46px]",
              }}
            />
            <Input label="Start Time" defaultValue="09:00" type="time" />
            <Button
              type="submit"
              color="primary"
              className="font-dmsans md:h-[44px] md:text-[15px]"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PartyBusRental;
