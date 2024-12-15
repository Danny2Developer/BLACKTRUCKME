import { TbManualGearbox } from "react-icons/tb";
import Button from '../../components/ui/Button';
import { Link } from "react-router-dom";
import { TbUsers } from "react-icons/tb";
import { RiGasStationLine } from "react-icons/ri";
import { IoSpeedometerOutline } from "react-icons/io5";

function Card({icon, title, image, price,URL}) {
  return (
    <div className='flex flex-col rounded-[24px] shop-card bg-[#1F2937]'>
        <div className="top p-[8px] min-h-[230px] md:min-h-[260px] lg:min-h-[240px] w-full">
            <div className=" cursor-pointer rounded-[18px] overflow-hidden lg:h-full">
            <img className="w-full h-full object-cover hover:scale-[105%] transition-all" src={image} alt="" />
            </div>
        </div>
        <div className="bottom p-[15px] md:p-[24px] py-[20px] pt-[10px] ">
            <Link to={URL}>
            <div className="font-fig font-semibold text-[#fff] mb-[7px] md:mb-[10px] text-[20px] flex items-center gap-2"><img className="com opacity-[100%] w-[30px] md:w-[40px]" src={icon} alt="" /><h1 className=" line-clamp-1">{title}</h1></div>
            </Link>
            <p className="mb-[13px] font-outfit font-extrabold text-gold text-[27px] md:text-[32px]">{price}<span className="text-[13px] md:text-[16px] font-medium text-white opacity-[80%]">/24 hrs</span></p>
            <div className="flex gap-2 mb-[20px] justify-between items-center bg-[#e0e0e0] py-[8px] px-[10px] md:px-[16px] rounded-[16px]">
                <p className="flex flex-col items-center gap-1 font-syne font-medium text-black text-[14px]">
                <IoSpeedometerOutline className="text-[15px] md:text-[20px] text-black" />
                4,000
                </p>
                <p className="flex flex-col items-center gap-1 font-syne font-medium text-black text-[14px]">
                <TbManualGearbox className="text-[15px] md:text-[20px] text-black" />
                Auto
                </p>
                <p className="flex flex-col items-center gap-1 font-syne font-medium text-black text-[14px]">
                <TbUsers className="text-[15px] md:text-[20px] text-black" />
                2 Person
                </p>
                <p className="flex flex-col items-center gap-1 font-syne font-medium text-black text-[14px]">
                <RiGasStationLine className="text-[15px] md:text-[20px] text-black" />
                Gasoline
                </p>
            </div>
            <Button className=' w-full font-syne font-semibold text-white border border-white hover:border-sec rounded-[32px] hover:text-white hover:bg-sec'>
                <Link to={URL}>View Details</Link>
            </Button>
        </div>
    </div>
  )
}

export default Card