import Buttons from "../components/ui/Button";
import { useState } from "react";
import car3 from "../assets/images/bently1.webp";

function SingleBookingHistory() {
  return (
    <div>
      <div className="px-4 py-3 mb-8 rounded-lg shadow-md bg-gray-800 pb-[20px] md:pb-[30px] h-fit">
        <h2 className="font-Cabin text-white text-[17px] md:text-[20px] tracking-wide pb-[7px] md:pb-[13px] border-b-1 border-white/40 mb-[10px] md:mb-[20px]">
          Booking Details
        </h2>
        <div className="car-im mb-[10px] md:mb-[15px]">
          <img
            className="w-[100px] h-[70px] md:w-[150px] md:h-[100px] rounded-md object-cover"
            src={car3}
            alt=""
          />
          <p className="mt-2 text-white text-[15px] md:text-[18px] font-Cabin font-semibold">
            Bently Veran
          </p>
        </div>
        <div className="infos grid grid-cols-2 gap-[20px] md:gap-[40px]">
          <div className="font-syne flex flex-col gap-2 ">
            <p className="text-white">
              Name:{" "}
              <span className="font-Cabin text-[15px] opacity-80">
                {" "}
                Ebuka Ibekwe
              </span>
            </p>
            <p className="text-white">
              Booking Date:{" "}
              <span className="font-Cabin text-[15px] opacity-80">
                {" "}
                2024-05-12
              </span>
            </p>
            <p className="text-white">
              Start Date:{" "}
              <span className="font-Cabin text-[15px] opacity-80">
                2024-05-12
              </span>
            </p>
            <p className="text-white">
              Pickup Time:{" "}
              <span className="font-Cabin text-[15px] opacity-80">
                11:00 AM
              </span>
            </p>
            <p className="text-white">
              Pickup Location:{" "}
              <span className="font-Cabin text-[15px] opacity-80">
                Team Exotics
              </span>
            </p>
            <p className="text-white">
              Payment Status: <br />
              <span className="block w-fit font-Cabin text-[15px] mt-1 px-3 py-1 font-semibold leading-tight  rounded-full bg-green-700 text-green-100">
                Completed
              </span>
            </p>
          </div>
          <div className="font-syne flex flex-col gap-2 ">
            <p className="text-white">
              Email{" "}
              <span className="font-Cabin text-[15px] opacity-80">
                {" "}
                Exmaple@gmail.com
              </span>
            </p>
            <p className="text-white">
              Days:{" "}
              <span className="font-Cabin text-[15px] opacity-80">
                {" "}
                10 days
              </span>
            </p>
            <p className="text-white">
              End Date:{" "}
              <span className="font-Cabin text-[15px] opacity-80">
                2024-05-12
              </span>
            </p>
            <p className="text-white">
              Return Time:{" "}
              <span className="font-Cabin text-[15px] opacity-80">
                11:00 AM
              </span>
            </p>
            <p className="text-white">
              Return Location:{" "}
              <span className="font-Cabin text-[15px] opacity-80">
                Team Exotics
              </span>
            </p>
            <p className="text-white">
              Payment Status:
              <span className="block w-fit font-Cabin text-[15px] mt-1 px-3 py-1 font-semibold leading-tight  rounded-full bg-green-700 text-green-100">
                Completed
              </span>
            </p>
          </div>
        </div>
        <p className="text-white font-syne pt-[7px] md:pt-[13px] border-t-1 border-white/40 mt-[10px] md:mt-[30px]">
          Total Price:{" "}
          <span className="font-Cabin text-[17px] opacity-80">$120,000</span>
        </p>
      </div>
    </div>
  );
}

export default SingleBookingHistory;
