import logo1 from "../assets/images/audi-logo.webp";
import logo2 from "../assets/images/bmw-logo.webp";
import logo3 from "../assets/images/bently-logo.webp";
import logo4 from "../assets/images/esca-logo.webp";
import logo5 from "../assets/images/chevrolet-logo.webp";
import logo6 from "../assets/images/dodge-logo.webp";
import logo7 from "../assets/images/Ferrari-logo.webp";
import logo8 from "../assets/images/lambo-logo.webp";
import logo9 from "../assets/images/landrover-logo.webp";
import logo10 from "../assets/images/benz-logo.webp";
import logo11 from "../assets/images/Porsche-logo.webp";
import logo12 from "../assets/images/royce-logo.webp";
import { Link } from "react-router-dom";
import Section from "../components/Section";
function Brand() {
  const logo = [
    {
      IMG: logo1,
      URL: "",
    },
    {
      IMG: logo2,
      URL: "",
    },
    {
      IMG: logo3,
      URL: "",
    },
    {
      IMG: logo4,
      URL: "",
    },
    {
      IMG: logo5,
      URL: "",
    },
    {
      IMG: logo6,
      URL: "",
    },
    {
      IMG: logo7,
      URL: "",
    },
    {
      IMG: logo8,
      URL: "",
    },
    {
      IMG: logo9,
      URL: "",
    },
    {
      IMG: logo10,
      URL: "",
    },
    {
      IMG: logo11,
      URL: "",
    },
    {
      IMG: logo12,
      URL: "",
    },
  ];
  return (
    <Section className={" xx:mt-[20px] md:mt-[20px]"}>
      <div className="brand pb-[15px] md:pb-[40px] border-b-2 border-gold flex flex-wrap  gap-y-[20px] w-full md:max-w-[83%] items-center justify-between md:justify-center mx-auto">
        {logo.map((data, index) => {
          const { IMG, URL } = data;
          return (
            <Link
              key={index}
              className="w-[25%] md:w-[15%] flex justify-center hover:opacity-80 transition-opacity "
              to={URL}
            >
              <img className="w-[55px] md:w-[85px]" src={IMG} alt="" />
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

export default Brand;
