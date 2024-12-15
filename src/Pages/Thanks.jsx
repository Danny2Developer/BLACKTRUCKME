import { Button } from "@nextui-org/react";
import img from "../assets/images/email.gif";
import Section from "../components/Section";
import { Link } from "react-router-dom";

function Thanks() {
  return (
    <Section
      className={
        "md:!pt-[135px] md:!mt-0 !mt-[-40px] !mb-0 flex items-center h-[100vh] md:h-auto"
      }
    >
      <div className="flex flex-col items-center md:mb-[200px]  md:pt-[50px]">
        <img className="w-[60px] md:w-[85px]" src={img} alt="" />
        <div className="text-hold text-center mt-[10px]">
          <h1 className="text-center text-white font-dmsans font-semibold tracking-wide mb-[5px] text-[25px] md:text-[30px] ">
            Thank You
          </h1>
          <p className="font-monts text-[14px] md:text-[16px] text-white/90">
            We have received your request
          </p>
          <p className="font-monts text-[14px] md:text-[16px] text-white/90">
            our team will be in touch with you as quickly as possible.
          </p>
          <div className="btns mt-[20px] font-monts">
            <Link to="/">
              <Button
                color="primary"
                className="font-medium md:h-[43px]"
                variant="ghost"
              >
                Back To Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Thanks;
