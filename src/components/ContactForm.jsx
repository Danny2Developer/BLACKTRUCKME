import { useState, useRef } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Input from "./ui/Input";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

import { useNavigate } from "react-router-dom";

function ContactForm() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const handlesubmit = () => {
    navigate("/thanks");
  };
  return (
    <div className="">
      <form onSubmit={handlesubmit} action="">
        <div className="grid grid-cols-1 w-full items-end gap-[15px] md:gap-[26px]">
          <Input label="First Name" placeHolder="" type="text" />
          <Input label="Last Name" placeHolder="" type="text" />
          <Input label="Email" placeHolder="" type="email" />
          <div className="font-dmsans reservation">
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
          <div className="w-full font-dmsans">
            <label
              for="textarea-label-with-helper-text"
              className="block text-sm md:text-base font-medium mb-2 dark:text-white"
            >
              How can we help you?
            </label>
            <textarea
              id="textarea-label-with-helper-text"
              className="py-3 px-4 block w-full rounded-lg text-sm bg-[#242427] border-gold placeholder-neutral-500  focus:border-gold focus:ring-neutral-600"
              rows="5"
              defaultValue=""
              aria-describedby="hs-textarea-helper-text"
            ></textarea>
          </div>
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

export default ContactForm;
