import React from "react";
import Banner from "./Banner";
import { FaFacebook } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header w-full min-h-[320px] xs:min-h-[400px] sm:min-h-[500px] md:min-h-[80vh] xl:h-[100vh] flex justify-between">
      <div className=" content w-[10%] md:w-[20%] xl:w-[55%] ps-0 sm:ps-[25px] md:ps-[65px] 2xl:ps-[360px]">
        <div className="md:relative w-full flex h-full justify-start items-center mt-[32px]">
          <div className="social md:flex hidden flex-col gap-8 justify-center text-[18px]">
            <FaFacebook />
            <IoMail />
            <MdPhoneInTalk />
            <FaTwitter />
          </div>
          <div className=" z-[2] absolute left-[25px] md:left-[50px] xl:left-[120px] mt-[20px] md:mt-[60px]">
            <h3 className="text-[25px] xs:text-[37px] sm:text-[50px] lg:text-[62px] font-harma font-bold xs:leading-[2rem] tracking-tight xs:whitespace-nowrap">
              HOUSTON'S ULTIMATE
            </h3>
            <h1 className="text-[25px] mt-[-10px] xs:mt-0 lg:mt-[10px] xs:text-[37px] sm:text-[50px] lg:text-[62px] font-harma font-bold uppercase tracking-tight">
              Rental Experience
            </h1>

            <p className=" font-dmsans text-[13px] sm:text-[17px] mt-[-10px] font-normal xs:w-[95%] w-full">
              <span className="block">
                We make the world’s finest vehicles accessible to everyone.
              </span>
              Luxury & Exotic Car Rentals | Luxury Limo Services | Party Buses
            </p>
            <Link to="/car-fleet">
              <Button
                color="primary"
                className="mt-[18px] sm:mt-[30px] bg-gold sm:bg-[unset] sm:text-gold text-black w-[130px] sm:w-[150px] md:w-[200px] h-[39px] sm:h-[46px] md:h-[55px] text-[14px] sm:text-[16px] font-dmsans font-semibold"
                variant="ghost"
              >
                Reserve Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default Header;
