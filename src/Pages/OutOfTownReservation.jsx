import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import { useState, useRef } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Input from "../components/ui/Input";
import { Link } from "react-router-dom";
import { Button, Select, SelectItem } from "@nextui-org/react";
import FileUploader from "../components/FileUploader";
import { useNavigate } from "react-router-dom";
import { DateRangePicker } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import SeeFaq from "../components/SeeFaq";
import Dream from "../components/Dream";

function OutOfTownReservation() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [Dl, setDl] = useState([]);
  const [Insurance, setInsurance] = useState([]);
  const [DateValue, setDateValue] = useState({
    start: "",
    end: "",
  });
  const handlesubmit = () => {
    navigate("/thanks");
  };
  const cars = [
    { key: "", label: "Select One" },
    { key: "audi_r8", label: "Audi R8" },
    { key: "bmw_se", label: "Bmw se" },
  ];
  const spaces = [
    { key: "", label: "Select One" },
    { key: "Hotel", label: "Hotel" },
    { key: "Home", label: "Home" },
    { key: "Airbnd", label: "Airbnd" },
    { key: "Airport", label: "Airport" },
    { key: "Others", label: "Others" },
  ];
  return (
    <div className="out reservation">
      <HeaderBanner className={"lg:min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[30px] md:bottom-[60px]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide ">
              Not in Houston?
            </h1>
            <p className=" font-monts font-semibold text-md  md:mt-7 mt-[10px]">
              We'll come to you!
            </p>
            <p className=" font-monts font-semibold text-md md:text-xl md:mt-3">
              Out of Town Rentals
            </p>
          </div>
        </Section>
      </HeaderBanner>

      <div className="2xl:max-w-[1440px] 2xl:px-0 mx-auto px-[25px] md:px-[60px] mt-[20px] md:mt-[100px] mb-[25px] md:mb-[45px]">
        <form className="" onSubmit={handlesubmit} action="">
          <div className="grid grid-cols-1 lg:max-w-[55%] mx-auto w-full items-end gap-[15px] md:gap-[26px]">
            <div className="ddate">
              <DateRangePicker
                label="Dates"
                labelPlacement="outside"
                visibleMonths={2}
                pageBehavior="single"
                classNames={{ base: "font-monts", selectorButton: "text-gold" }}
                // value={DateValue}
                // onChange={"change function enters here!!!"}
              />
            </div>
            <Input label="Drop-off Time" defaultValue="09:00" type="time" />
            <Input label="Drop-off Address" type="text" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              <Input label="City" type="text" />
              <Input label="State" type="text" />
              <Input label="Zip Code" type="text" />
            </div>
            <div>
              <p className="font-monts text-sm mb-[10px] font-semibold">
                Do you live at this location or are you flying in?
              </p>
              <RadioGroup className="font-dmsans " orientation="horizontal" color="primary">
                <Radio value="I_live_here">I live here</Radio>
                <Radio value="I'm_flying_in">I'm flying in</Radio>
              </RadioGroup>
            </div>
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
              {spaces.map((space) => (
                <SelectItem key={space.key}>{space.label}</SelectItem>
              ))}
            </Select>
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
            {/* DL License */}
            <FileUploader
              Data={Dl}
              setData={setDl}
              label={"Upload Drivers License"}
            />
            {/* Insurance License */}
            <FileUploader
              Data={Insurance}
              setData={setInsurance}
              label={"Upload Proof of Insurance "}
            />
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
      <SeeFaq />
      <Dream />
    </div>
  );
}

export default OutOfTownReservation;
