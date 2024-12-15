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

function MoreBrands() {
    const logo = [
        {
          IMG: logo1,
        },
        {
          IMG: logo2,
        },
        {
          IMG: logo3,
        },
        {
          IMG: logo4,
        },
        {
          IMG: logo5,
        },
        {
          IMG: logo6,
        },
        {
          IMG: logo7,
        },
        {
          IMG: logo8,
        },
        {
          IMG: logo9,
        },
        {
          IMG: logo10,
        },
        {
          IMG: logo11,
        },
        {
          IMG: logo12,
        },
      ];
  return (
    <div className="brand pb-[15px] md:pb-[40px]  flex flex-wrap  gap-y-[20px] w-full md:max-w-[83%] items-center justify-between md:justify-center mx-auto">
          {logo.map((data, index) => {
            const { IMG } = data;
            return (
              <div
                key={index}
                className="w-[25%] md:w-[15%] flex justify-center hover:opacity-80 transition-opacity "
              >
                <img className="w-[55px] md:w-[85px]" src={IMG} alt="" />
              </div>
            );
          })}
        </div>
  )
}

export default MoreBrands