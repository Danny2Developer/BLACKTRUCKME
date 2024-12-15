import Section from "../components/Section";
import caricon from "../assets/images/super-suv.png";
import caricon2 from "../assets/images/super-car.png";
import caricon3 from "../assets/images/luxury-suv.png";
import caricon4 from "../assets/images/luxury-car.png";
import caricon5 from "../assets/images/sports-car.png";
import caricon6 from "../assets/images/muscle-suv.png";
import { Link } from "react-router-dom";

function Browse() {
  const CarBodyData = [
    {
      image: caricon,
      name: "Super Suvs",
      URL: '/car-fleet'
    },
    {
      image: caricon2,
      name: "Super Cars",
      URL: '/car-fleet'
    },
    {
      image: caricon3,
      name: "Luxury Suvs",
      URL: '/car-fleet'
    },
    {
      image: caricon4,
      name: "Luxury Cars",
      URL: '/car-fleet'
    },
    {
      image: caricon5,
      name: "Sports Cars",
      URL: '/car-fleet'
    },
    {
      image: caricon6,
      name: "Muscle Cars",
      URL: '/car-fleet'
    },
  ];
  return (
    <Section>
      <div className="">
        <div className="top">
          <h4 className="font-harma text-center text-md md:text-[20px]">
            GET NOTICED
            <span className="w-[170px] h-[1.5px] bg-white block mx-auto mt-[5px] md:mt-[30px]"></span>
          </h4>
          <h2 className="text-center mt-[10px] md:mt-[20px] font-dmsans text-lg md:text-[35px] font-normal">
            BROWSE OUR EXOTIC/LUXURY CARS
          </h2>
        </div>
        <div className="each-hold mx-auto grid grid-cols-1 xx:grid-cols-2 xs:grid-cols-3 lg:grid-cols-6 grid-flow-dense gap-[10px] md:gap-[15px] md:auto-rows-[90px] mt-[20px] md:mt-[40px]">
          {CarBodyData.map((data, index) => {
            return (
              <Link
              to={data.URL}
                key={index}
                className="carddy rounded-[7px] md:rounded-[10px] bg-white flex flex-col gap-1 items-center justify-center px-[5px] sm:px-[10px] py-[10px] sm:py-[15px]"
              >
                <img src={data.image} className="w-[50px] sm:w-[70px] md:w-[90px] cursor-auto" alt="" />
                <p className="text-black font-dmsans font-semibold text-xs sm:text-md md:text-[14.5px]">
                  {data.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Browse;
