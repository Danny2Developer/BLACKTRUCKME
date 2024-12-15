import { useState, useRef } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Input from "./ui/Input";
import { Link } from "react-router-dom";
import { Button, Select, SelectItem } from "@nextui-org/react";
import FileUploader from "./FileUploader";
import { useNavigate } from "react-router-dom";

function ReserveForm() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [Dl, setDl] = useState([]);
  const [Insurance, setInsurance] = useState([]);
  const handlesubmit = () =>{
    navigate('/thanks')
  }
  const cars = [
    { key: "", label: "Select One" },
    { key: "audi_r8", label: "Audi R8" },
    { key: "bmw_se", label: "Bmw se" },
  ];
  return (
    <div className="2xl:max-w-[1440px] 2xl:px-0 mx-auto px-[25px] md:px-[60px] mt-[20px] md:mt-[100px] mb-[25px] md:mb-[45px]">
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
          <div className="w-full font-dmsans">
            <label
              for="textarea-label-with-helper-text"
              className="block text-sm md:text-base font-medium mb-2 dark:text-white"
            >
              Reservation Information
            </label>
            <textarea
              id="textarea-label-with-helper-text"
              className="py-3 px-4 block w-full rounded-lg text-sm bg-[#242427] border-gold placeholder-neutral-500  focus:border-gold focus:ring-neutral-600"
              rows="5"
              defaultValue="Refundable Security Deposit Amount: $1500"
              aria-describedby="hs-textarea-helper-text"
            ></textarea>
            <p className="font-monts text-sm mt-[15px] md:mt-[25px]">
              *Please note that vehicles cannot be reserved further out than 30
              days due to inventory rotation. If you have questions about a
              specific vehicle, please{" "}
              <Link to="" className="text-gold">
                contact us.
              </Link>
            </p>
          </div>
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
            label={"Driver's License Upload"}
            mini={"Please upload the front and back of your driver's license"}
          />
          {/* Insurance License */}
          <FileUploader
            Data={Insurance}
            setData={setInsurance}
            label={"Insurance Documentation Upload"}
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
  );
}

export default ReserveForm;
