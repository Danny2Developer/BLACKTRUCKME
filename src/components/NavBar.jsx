import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/BTM.png";
import Button from "./ui/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import { VscClose } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [sidemenu, setSidemenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 100], ["", "rgba(26, 28, 35)"]);
  const { pathname } = useLocation();
  const dropDown = () => {
    setIsOpen(!isOpen);
  };
  const dropDown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handle = () => {
    setSidemenu(false);
  };

  const zeez = document.querySelectorAll("#zee a");
  zeez.forEach((link) => {
    link.addEventListener("click", handle);
  });
  return (
    <div className=" w-full h-auto relative">
      <div>
        <motion.nav
          id="navigation"
          style={{
            background,
          }}
        >
          <div className="h-fit w-full 2xl:max-w-[1440px] 2xl:px-0 mx-auto px-[25px] md:px-[60px] flex justify-between items-center py-[15px] md:py-[20px]">
            <div className="flex items-center gap-20">
              <Link to="/" className="logo bg-gold px-1 py-1 rounded-md">
                <img className="w-[30px] md:w-[45px]" src={logo} alt="" />
              </Link>
              <ul className="nav-list capitalize navvy hidden xl:flex gap-10 text-white font-monts">
                <NavLink
                  className=" text-[14px] md:text-[14px] hover:text-gold"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className=" text-[14px] md:text-[14px] hover:text-gold"
                  to="/car-fleet"
                >
                  Cars
                </NavLink>

                <li
                  className={`cursor-pointer flex relative items-center text-[14px]  ${
                    pathname === "/services" ? "text-gold" : "text-white"
                  }`}
                  onClick={() => {
                    dropDown();
                  }}
                >
                  <span className="hover:text-gold ss md:text-[14px]">
                    Services{""}
                  </span>
                  <span
                    className={
                      isOpen
                        ? "ms-1 text-[16px] rotate-180 mt-[1px]"
                        : "ms-1 text-[16px] mt-[1px]"
                    }
                  >
                    <IoChevronDown />
                  </span>
                  {isOpen && (
                    <div className="absolute w-[240px] z-10 whitespace-nowrap bg-mod h-fit py-[7px] rounded-md top-[25px] right-0">
                      <Link
                        to="/services/party-bus-rental"
                        className=" block hover:bg-[#1A1C23] py-[8px] px-[15px]  text-[15px] font-dmsans "
                      >
                        Party Bus Rental
                      </Link>
                      <Link
                        to="/services/wedding-car-rental"
                        className=" block hover:bg-[#1A1C23] py-[8px] px-[15px]  text-[15px] font-dmsans "
                      >
                        Wedding Rental
                      </Link>
                      <Link
                        to="/services/chauffeur-service"
                        className=" block hover:bg-[#1A1C23] py-[8px] px-[15px]  text-[15px] font-dmsans "
                      >
                        Chauffeur Rental
                      </Link>
                      <Link
                        to="/services/prom-car-rental"
                        className=" block hover:bg-[#1A1C23] py-[8px] px-[15px]  text-[15px] font-dmsans "
                      >
                        Prom Rental
                      </Link>
                      <Link
                        to="/services/baby-shower"
                        className=" block hover:bg-[#1A1C23] py-[8px] px-[15px]  text-[15px] font-dmsans "
                      >
                        Baby Shower Rentals
                      </Link>
                    </div>
                  )}
                </li>
                <NavLink
                  className=" text-[14px] md:text-[14px] hover:text-gold"
                  to="/about-us"
                >
                  About
                </NavLink>
                <NavLink
                  className=" text-[14px] md:text-[14px] hover:text-gold"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </ul>
            </div>
            <Link to="/car-fleet">
              <Button className="hidden xl:block bg-gold text-black rounded-sm md:rounded-md ">
                Reserve Now
              </Button>
            </Link>
            <label htmlFor="" className="tog xl:hidden block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                viewBox="0 0 24 24"
                className="text-white w-5 h-5 stroke-current cursor-pointer"
                onClick={() => setSidemenu(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </motion.nav>

        {/* Side Menu */}
        <div className="">
          <div className=" w-full ">
            <label
              htmlFor=""
              aria-label=""
              onClick={() => setSidemenu(false)}
              className={`overlay bg-black/50 w-full h-full fixed top-0 left-0 z-[20] translate-x-[-100%] ${
                sidemenu ? "translate-x-[0%]" : "translate-x-[-100%]"
              }`}
            ></label>
            <ul
              className={`menu w-[90%] bg-pri top-0 px-[25px] p-4 fixed z-[40] h-full text-base-content translate-x-[-100%] transition-all duration-300 ease-in-out ${
                sidemenu ? "translate-x-[0%]" : "translate-x-[-100%]"
              }`}
            >
              <div className="logo mt-[10px] mb-[45px] flex justify-between items-center w-full">
                <div className="logo bg-gold px-1 py-1 rounded-md">
                  <img className="w-[30px] " src={logo} alt="" />
                </div>

                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className=""
                >
                  <VscClose
                    onClick={() => setSidemenu(false)}
                    className="text-white text-[25px] mt-[-5px] cursor-pointer"
                  />
                </label>
              </div>
              <div
                id="zee"
                className="flex zoo font-dmsans flex-col gap-[25px] text-white items-center text-[17px] tracking-wide"
              >
                <NavLink className="" to="/">
                  Home
                </NavLink>
                <NavLink className="" to="/car-fleet">
                  Cars
                </NavLink>
                <li
                  className=" cursor-pointer flex-row flex items-center relative w-full justify-center"
                  onClick={dropDown2}
                >
                  Services{" "}
                  <span className="ms-1 text-[18px] p-0">
                    <IoMdArrowDropdown />
                  </span>
                  {isOpen2 && (
                    <div className="absolute flex flex-col w-[90%] left-[50%] translate-x-[-50%] z-10 whitespace-nowrap bg-mod h-fit py-[7px] rounded-md top-[25px] right-0">
                      <Link
                        onClick={() => setSidemenu(false)}
                        to="/services/party-bus-rental"
                        className=" block hover:bg-[#151715] py-[8px] px-[15px]  text-[15px] font-Cabin "
                      >
                        Party Bus Rental
                      </Link>
                      <Link
                        onClick={() => setSidemenu(false)}
                        to="/services/wedding-car-rental"
                        className=" block hover:bg-[#151715] py-[8px] px-[15px]  text-[15px] font-Cabin "
                      >
                        Wedding Rental
                      </Link>
                      <Link
                        onClick={() => setSidemenu(false)}
                        to="/services/chauffeur-service"
                        className=" block hover:bg-[#151715] py-[8px] px-[15px]  text-[15px] font-Cabin "
                      >
                        Chauffeur Rental
                      </Link>
                      <Link
                        onClick={() => setSidemenu(false)}
                        to="/services/prom-car-rental"
                        className=" block hover:bg-[#151715] py-[8px] px-[15px]  text-[15px] font-Cabin "
                      >
                        Prom Rental
                      </Link>
                      <Link
                        onClick={() => setSidemenu(false)}
                        to="/services/baby-shower"
                        className=" block hover:bg-[#151715] py-[8px] px-[15px]  text-[15px] font-Cabin "
                      >
                        Baby Shower Rentals
                      </Link>
                    </div>
                  )}
                </li>
                <NavLink className="" to="/about-us">
                  About
                </NavLink>
                <NavLink className="" to="/contact">
                  Contact
                </NavLink>
                <Button className=" w-[80%] text-pri bg-gold rounded-md md:rounded-2xl py-[13px]">
                  <Link to="/car-fleet">Reserve Now</Link>
                </Button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
