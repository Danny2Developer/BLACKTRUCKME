import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/images/BTM.png";
function Footers() {
  return (
    <Footer className=" px-[25px] md:px-[60px] py-[20px] md:py-[30px] bg-[#1A1C23] rounded-none font-monts">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex flex-col gap-2 h-fit items-start md:mb-auto mb-[20px]">
            <div className="logo bg-gold px-1 py-1 w-fit rounded-md h-fit">
              <img className="w-[25px] md:w-[45px]" src={logo} alt="" />
            </div>
            <h1 className="font-dmsans text-[12px] md:text-[15px]">BLACKTRUCKME</h1>
          </div>
          <div className="grid ffz grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-[70px]">
            <div>
              <Footer.Title title="Links" />
              <Footer.LinkGroup col>
                <Link to="/">Home</Link>
                <Link to="/car-fleet">Cars</Link>
                <Link to="/about-us">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/car-fleet">Reserve Now</Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Services" />
              <Footer.LinkGroup col>
                <Link to="/services/party-bus-rental">Party Bus Rental</Link>
                <Link to="/services/wedding-car-rental">Wedding Rental</Link>
                <Link to="/services/chauffeur-service">Chauffeur Rental</Link>
                <Link to="/services/baby-shower">Baby Shower Rentals</Link>
                <Link to="/services/prom-car-rental">Prom Rental</Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="border-white" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="BLACKTRUCKME" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footers;
