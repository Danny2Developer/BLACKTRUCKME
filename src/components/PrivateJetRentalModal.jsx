import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { useState, useRef } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Input from "../components/ui/Input";
import { Link } from "react-router-dom";
import { DatePicker, Select, SelectItem } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function PrivateJetRentalModal({ isOpen, onOpenChange }) {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const handlesubmit = () => {
    navigate("/thanks");
  };
  const passengers = [
    { key: "1", label: "1" },
    { key: "2", label: "2" },
    { key: "3", label: "3" },
    { key: "4", label: "4" },
    { key: "5", label: "5" },
    { key: "7", label: "7" },
    { key: "8", label: "8" },
    { key: "9", label: "9" },
    { key: "10", label: "10" },
    { key: "11", label: "11" },
    { key: "12", label: "12" },
    { key: "13", label: "13" },
    { key: "14", label: "14" },
    { key: "15", label: "15" },
    { key: "16", label: "16" },
    { key: "17", label: "17" },
    { key: "18", label: "18" },
  ];
  const tripType = [
    { key: "one_way", label: "One Way" },
    { key: "round_trip", label: "Round Trip" },
  ];
  return (
    <div className="flex flex-col gap-2">
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="2xl"
        backdrop="opaque"
        scrollBehavior="outside"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
          closeButton: "text-white",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form
                className="reservation ddate font-dmsans pb-[20px]"
                onSubmit={handlesubmit}
                action=""
              >
                <ModalHeader className="flex flex-col gap-1  md:mb-[30px] text-[25px]">
                  Car Rental for Photo/Video Shoot
                </ModalHeader>
                <ModalBody>
                  <div className="grid grid-cols-1  mx-auto w-full items-end gap-[15px] md:gap-[26px]">
                    <Select
                      label="Number of Passengers"
                      classNames={{
                        label:
                          "text-sm md:text-base font-medium mb-2 text-white z-[1]",
                        selectorIcon: "text-gold",
                        trigger:
                          "!bg-[#242427] !hover:bg-[#242427] !border-gold border h-[46px]",
                      }}
                      labelPlacement="outside"
                      defaultSelectedKeys={["1"]}
                      className="w-full font-dmsans"
                    >
                      {passengers.map((passenger) => (
                        <SelectItem key={passenger.key}>
                          {passenger.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      label="Trip Type "
                      classNames={{
                        label:
                          "text-sm md:text-base font-medium mb-2 text-white z-[1]",
                        selectorIcon: "text-gold",
                        trigger:
                          "!bg-[#242427] !hover:bg-[#242427] !border-gold border h-[46px]",
                      }}
                      labelPlacement="outside"
                      defaultSelectedKeys={["one_way"]}
                      className="w-full font-dmsans"
                    >
                      {tripType.map((type) => (
                        <SelectItem key={type.key}>{type.label}</SelectItem>
                      ))}
                    </Select>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                      <Input
                        label="Departure City/State"
                        placeHolder=""
                        type="text"
                      />
                      <Input
                        label="Arrival City/State"
                        placeHolder=""
                        type="text"
                      />
                    </div>
                    <DatePicker
                      labelPlacement="outside"
                      label="Departure Date "
                      className="w-full"
                    />
                    <Input
                      label="Departure Time"
                      defaultValue="09:00"
                      type="time"
                    />
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
                    <div>
                      <p className="font-monts text-sm mb-[10px] font-semibold">
                        Have you chartered a private jet before?
                      </p>
                      <RadioGroup
                        className="font-dmsans "
                        orientation="horizontal"
                        color="primary"
                      >
                        <Radio value="I_live_here">Yes</Radio>
                        <Radio value="I'm_flying_in">No</Radio>
                      </RadioGroup>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter className="flex justify-start">
                  <Button
                    type="submit"
                    className="font-dmsans font-semibold md:w-[130px]"
                    color="primary"
                    onPress={onClose}
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default PrivateJetRentalModal;
