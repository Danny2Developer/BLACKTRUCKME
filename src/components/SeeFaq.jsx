import { Link } from "react-router-dom";
import img from "../assets/images/Question2.jpg";
import Section from "./Section";
import { Button } from "@nextui-org/react";

function SeeFaq() {
  return (
    <Section className={"mb-[65px] md:mb-[150px]"}>
        <div className="w-full flex justify-between gap-[40px] flex-col md:flex-row items-center">
          <div className="left w-full md:w-[50%] overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover" src={img} alt="" />
          </div>
          <div className="right w-ful; md:w-[50%]">
            <h1 className="font-monts font-medium text-[17px]">Ready to learn more?</h1>
            <p className="font-dmsans text-[22px] md:text-[30px] md:w-[80%] mb-[20px] font-medium md:font-semibold">
              Check out our FAQs to find out more about the charter process.
            </p>
            <Link to="/faq">
              <Button color="primary" className="font-dmsans font-semibold w-[140px] md:w-[120px]">
                FAQs
              </Button>
            </Link>
          </div>
        </div>
      </Section>
  )
}

export default SeeFaq