import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Section from "../components/Section";
import { Button } from "@nextui-org/react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Dream from "../components/Dream";
import SeeFaq from "../components/SeeFaq";

function Contact() {
  return (
    <div className="contact">
      <HeaderBanner className={"!min-h-[295px] lg:!min-h-[420px]"}>
        <Section>
          <div className=" absolute bottom-[30px] md:bottom-[60px] w-full md:w-[40%]">
            <h1 className="font-semibold font-dmsans md:text-3xl text-2xl md:w-full w-full xs:w-[90%] lg:text-4xl tracking-wide ">
              Contact Us
            </h1>
            
          </div>
        </Section>
      </HeaderBanner>
      <Section className={"!mt-[30px]"}>
        <div className="grid md:grid-cols-2 gap-[35px] grid-cols-1">
          <div className="">
            <h1 className="font-semibold text-[20px] md:text-[26px] font-monts pb-[6px] border-b-1">
              Get In Touch
            </h1>
            <div className="mt-[10px] md:mt-[20px] flex gap-[25px] items-center">
              <FaPhoneAlt className="text-white text-[20px] md:text-[24px]" />
              <div>
                <p className="font-dmsans text-[17px] md:text-[20px]">Call</p>
                <i className="font-monts text-[16px]">713-000-0000</i>
              </div>
            </div>
            <div className="mt-[20px] flex gap-[20px] items-center">
              <IoMailOutline className="text-white  text-[20px] md:text-[28px]" />
              <div>
                <p className="font-dmsans text-[17px] md:text-[20px]">Email</p>
                <i className="font-monts text-[16px]">info@dreamcharters.us</i>
              </div>
            </div>
            <div className="mt-[20px] flex gap-[20px] items-center">
              <FaUserGroup className="text-white text-[20px] md:text-[28px]" />
              <div>
                <p className="font-dmsans text-[17px] md:text-[20px]">Social Media</p>
                <i className="flex gap-[20px] items-center mt-[7px]">
                  <FaFacebook className="text-white text-[24px]" />
                  <FaInstagram className="text-white text-[24px]" />
                </i>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-[20px] md:text-[26px] font-monts  pb-[6px] border-b-1">
              How Can We Help You?
            </h1>
            <div className="mt-[20px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
      <SeeFaq />
    </div>
  );
}

export default Contact;
