import { Button } from "@nextui-org/react";
import React from "react";
import { useSwiper } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function SwiperBtn({className}) {
   const swiper = useSwiper();
   return (
     <div
       className={`swiper-nav-btn  w-full justify-between items-center z-10 top-[50%] translate-y-[-50%]  md:flex hidden absolute ${className}`}
     >
       <Button
         isIconOnly
         onClick={() => swiper.slidePrev()}
         variant="solid"
         color="primary"
         className="left-[20px] relative z-[10] bg-[#997D2D]"
       >
         <FaArrowLeft className="arrow" />
       </Button>
       <Button
         isIconOnly
         onClick={() => swiper.slideNext()}
         variant="solid"
         color="primary"
         className="right-[20px] relative z-[10]"
       >
         <FaArrowRight className="arrow" />
       </Button>
     </div>
   );
}

export default SwiperBtn;
