import Buttons from "../components/ui/Button";
import { useState } from "react";
import car3 from "../assets/images/bently1.webp";
function SingleBooking() {
  const [bookStatus, setBookStatus] = useState("Upcoming");
  const handleBooking = (e) => {
    setBookStatus(e.target.value);
  };
  // let stat = ['Booked'];
  return (
    <div>
      <div className="px-4 py-3 mb-8 rounded-lg shadow-md bg-gray-800 pb-[20px] md:pb-[30px] h-fit">
        <h2 className="font-Cabin text-white text-[17px] md:text-[20px] tracking-wide pb-[7px] md:pb-[13px] border-b-1 border-white/40 mb-[10px] md:mb-[20px]">
          Booking Details
        </h2>
        <div className="car-im mb-[10px] md:mb-[15px]">
          <img
            className="w-[150px] h-[100px] md:w-[150px] md:h-[100px] rounded-md object-cover"
            src={car3}
            alt=""
          />
          <p className="mt-2 text-white text-[15px] md:text-[18px] font-Cabin font-semibold">
            Bently Veran
          </p>
        </div>
        <div className="infos grid md:grid-cols-2 gap-[20px] md:gap-[40px]">
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
              <span className="block w-fit mt-1 font-Cabin text-[15px] opacity-80 px-3 py-1 font-semibold leading-tight  rounded-full bg-green-600 text-green-100">
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
              Payment Status: <br />
              <span
                className={`block w-fit mt-1 font-Cabin text-[15px] opacity-80 px-3 py-1 font-semibold leading-tight  rounded-full ${
                  bookStatus === "Booked"
                    ? "bg-blue-600 text-blue-100"
                    : bookStatus === "Upcoming"
                    ? "bg-green-600 text-green-100"
                    : bookStatus === "Live"
                    ? 'bg-yellow-600 text-yellow-100'
                    : bookStatus === 'Completed'
                    ? "bg-green-600 text-green-100"
                    : 'bg-red-600 text-red-100'
                }`}
              >
                {bookStatus}
              </span>
            </p>
          </div>
        </div>
        <p className="text-white font-syne pt-[7px] md:pt-[13px] border-t-1 border-white/40 mt-[10px] md:mt-[30px]">
          Total Price:{" "}
          <span className="font-Cabin text-[15px] opacity-80">$120,000</span>
        </p>
      </div>

      <div className="px-4 py-3 mb-8 rounded-lg shadow-md bg-gray-800 pb-[20px] md:pb-[30px] h-fit">
        <h2 className="font-Cabin text-white text-[17px] md:text-[20px] tracking-wide pb-[7px] md:pb-[13px] border-b-1 border-white/40 mb-[10px] md:mb-[20px]">
          Update Status
        </h2>
        <form action="" className="font-syne">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Select the Status</span>
              </div>
              <select
                onChange={handleBooking}
                className="select select-bordered bg-transparent border-sec border-2 focus:border-sec text-white"
              >
                <option value="Booked" className="text-black text-[16px]">
                  Booked
                </option>
                <option value="Live" className="text-black text-[16px]">
                  Live
                </option>
                <option value="Cancelled" className="text-black text-[16px]">
                  Cancelled
                </option>
                <option value="Completed" className="text-black text-[16px]">
                  Completed
                </option>
              </select>
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">
                  Select Payment Status
                </span>
              </div>
              <select className="select select-bordered bg-transparent border-sec border-2 focus:border-sec text-white">
                <option className="text-black text-[16px]">completed</option>
                <option className="text-black text-[16px]">Refunded</option>
              </select>
            </div>
          </div>

          <Buttons className="bg-sec text-white rounded-md py-[7px] w-full md:w-auto justify-center mb-[10px] md:font-medium md:rounded-md md:py-[8px] mt-[30px] ms-auto flex">
            Submit
          </Buttons>
        </form>
      </div>
    </div>
  );
}

export default SingleBooking;
