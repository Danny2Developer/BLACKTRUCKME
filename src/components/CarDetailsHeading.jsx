import { IoMdStar } from "react-icons/io";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";


function CarDetailsHeading({children, Data}) {
  const {title} = Data;
  console.log(title)
  return (
    <div className="details mb-[25px] lg:flex-row flex-col flex gap-[15px] lg:gap-3 justify-between lg:items-center">
    <div>
      <h1 className=" font-outfit text-[25px] md:text-[30px] font-semibold mb-[5px] ">
        {title}
      </h1>
    </div>
    <div className="flex items-center flex-wrap gap-3 md:gap-5">
      
      {children}
    </div>
  </div>
  )
}

export default CarDetailsHeading