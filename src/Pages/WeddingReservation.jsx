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
import { DatePicker } from "@nextui-org/react";

function WeddingReservation() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [Dl, setDl] = useState([]);
  const [Insurance, setInsurance] = useState([]);
  const handlesubmit = () => {
    navigate("/thanks");
  };
  const cars = [
    { key: "", label: "Select One" },
    { key: "audi_r8", label: "Audi R8" },
    { key: "bmw_se", label: "Bmw se" },
  ];
  return (
    <div className="reservation ref2 mb-[50px] md:mb-[100px]">
      <HeaderBanner className={"lg:min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[60px]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide ">
              Ready, set, GO!
            </h1>
            <p className=" font-monts font-semibold text-md md:text-lg md:mt-3">
              Reserve Your Dream Charter today
            </p>
          </div>
        </Section>
      </HeaderBanner>
      <div className="2xl:max-w-[1440px] 2xl:px-0 mx-auto px-[25px] md:px-[60px] mt-[40px] md:mt-[100px] mb-[80px] md:mb-[45px]">
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
              <p className="font-monts text-sm mt-[15px]">
                *Please note that there is a 2 day minimum for all weekend
                reservations.
              </p>
            </div>
            <div>
              <DatePicker
                labelPlacement="outside"
                label="Pick Up"
                className="w-full"
                dateInputClassNames={{
                  inputWrapper: "border-gold border-1 !h-[45px]",
                  label:
                    "text-sm md:text-base font-medium mb-[0.5px] dark:text-white",
                }}
                classNames={{ selectorIcon: "text-gold" }}
              />
              <p className="font-monts text-sm mt-[15px]">
                *Please note that vehicles cannot be reserved further out than
                30 days due to inventory rotation. If you have questions about a
                specific vehicle, please{" "}
                <Link to="" className="text-gold">
                  contact us.
                </Link>
              </p>
            </div>
            {/* DL License */}
            <FileUploader
              Data={Dl}
              setData={setDl}
              label={"Driver's License Upload"}
              mini={"Please upload the front and back of your driver's license"}
            />
            {/* Insurance License */}
            <FileUploader
              Data={Insurance}
              setData={setInsurance}
              label={"Insurance Documentation Upload"}
            />
            <DatePicker
              labelPlacement="outside"
              label="Drop Off"
              className="w-full"
              dateInputClassNames={{
                inputWrapper: "border-gold border-1 !h-[45px]",
                label:
                  "text-sm md:text-base font-medium mb-[0.5px] dark:text-white",
              }}
              classNames={{ selectorIcon: "text-gold" }}
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
    </div>
  );
}

export default WeddingReservation;
