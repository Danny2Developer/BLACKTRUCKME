import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState, useRef } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Input from "../components/ui/Input";
import { Link } from "react-router-dom";
import { DatePicker, Select, SelectItem } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function BabyShowerModal({ isOpen, onOpenChange }) {
     const navigate = useNavigate();
     const [phone, setPhone] = useState("");
     const handlesubmit = () => {
       navigate("/thanks");
     };
     const cars = [
       { key: "", label: "Select One" },
       { key: "audi_r8", label: "Audi R8" },
       { key: "bmw_se", label: "Bmw se" },
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
                  Baby Shower Car Rental
                </ModalHeader>
                <ModalBody>
                  <div className="grid grid-cols-1  mx-auto w-full items-end gap-[15px] md:gap-[26px]">
                    <Select
                      label="Vehicle"
                      classNames={{
                        label:
                          "text-sm md:text-base font-medium mb-2 text-white z-[1]",
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
                    </div>
                    <DatePicker
                      labelPlacement="outside"
                      label="Date "
                      className="w-full"
                    />
                    <Input label="Time" defaultValue="09:00" type="time" />
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

export default BabyShowerModal;
