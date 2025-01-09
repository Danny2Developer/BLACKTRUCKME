import React from "react";
import { Link } from "react-router-dom";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import im from "../assets/images/DL.jpg";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lg-zoom.css";
import Buttons from "../components/ui/Button";

function UsersDetails() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div>
      <div className="px-4 py-3 mb-8 rounded-lg shadow-md bg-gray-800 document pb-[20px] md:pb-[30px]">
        <h2 className="font-Cabin text-white text-[17px] md:text-[20px] tracking-wide pb-[7px] md:pb-[13px] border-b-1 border-white/40 mb-[10px] md:mb-[20px]">
          Documents
        </h2>
        <form action="" className="font-Cabin">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text  text-[15px] text-white">
                  Driving License Number
                </span>
              </div>
              <input
                type="text"
                value="ewedw-dsfcsdfc-sdfsd"
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div>

            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-[15px] text-white">
                  Insurance Company
                </span>
              </div>
              <input
                type="text"
                value={"webby insc"}
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-[15px] text-white">
                  Policy Number
                </span>
              </div>
              <input
                type="text"
                value={"2342354623544627"}
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-[15px] text-white">
                  Name Of Policy Holder
                </span>
              </div>
              <input
                type="text"
                value={"Developed Cyb"}
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div>
          </div> */}
          <div className="images grid grid-cols-1 md:grid-cols-2 gap-5 mt-[20px] md:mt-[30px]">
            <div className="form-control">
              <div className="label">
                <span className="label-text text-[15px] text-white mb-1">
                  Driving License Image
                </span>
              </div>
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgZoom]}
                elementClassNames="bg-red-500 w-full max-h-[300px] rounded-md overflow-hidden"
              >
                <Link to={im} className="img-hold">
                  <img className="w-full h-full object-cover" src={im} alt="" />
                </Link>
              </LightGallery>
            </div>
            <div className="form-control">
              <div className="label">
                <span className="label-text text-[15px] text-white mb-1">
                  Insurance Policy Image
                </span>
              </div>
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgZoom]}
                elementClassNames="bg-red-500 w-full max-h-[300px] rounded-md overflow-hidden"
              >
                <Link to={im} className="img-hold">
                  <img className="w-full h-full object-cover" src={im} alt="" />
                </Link>
              </LightGallery>
            </div>
          </div>
          <div className="form-control w-full mt-[10px] md:mt-[15px]">
            <div className="label">
              <span className="label-text text-[15px] text-white">
                Remark(optional)
              </span>
            </div>
            <textarea
              placeholder="Send Message to this user email"
              className=" whitespace-pre-line textarea textarea-bordered bg-transparent border-sec border-2 focus:border-sec text-white h-24 w-full"
            ></textarea>
          </div>
          <div className=" flex flex-wrap justify-between items-center mt-2 md:mt-6">
            <label className="label cursor-pointer flex-col items-start">
              <span className="label-text text-white font-syne mb-1 text-[14px] md:text-[17px]">
                Check if user documents is verified
              </span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-sm checkbox-primary"
              />
            </label>
            <Buttons className="bg-gold text-mod rounded-md py-[7px] w-full md:w-auto justify-center mt-[10px]  md:font-medium md:rounded-md md:py-[8px]">
              Submit
            </Buttons>
          </div>
        </form>
      </div>

      <div className="px-4 py-3 mb-8 rounded-lg shadow-md bg-gray-800 user-details pb-[20px] md:pb-[30px]">
        <h2 className="font-Cabin text-white text-[17px] md:text-[20px] tracking-wide pb-[7px] md:pb-[13px] border-b-1 border-white/40 mb-[10px] md:mb-[20px]">
          User Details
        </h2>
        <form action="" className="font-Cabin">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text  text-[15px] text-white">
                  FullName
                </span>
              </div>
              <input
                type="text"
                value="Daniel frank ibekwe"
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-[15px] text-white">Email</span>
              </div>
              <input
                type="email"
                value={"example@outlook.com"}
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-[15px] text-white">
                  Date Of Birth
                </span>
              </div>
              <input
                type="text"
                value={"05-05-1998"}
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-[15px] text-white">
                  Phone Number
                </span>
              </div>
              <input
                type="text"
                value={"03423472847"}
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div>
            {/* <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-[15px] text-white">
                  Country
                </span>
              </div>
              <input
                type="text"
                value={"United State Of America"}
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-[15px] text-white">State</span>
              </div>
              <input
                type="text"
                value={"New york"}
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-[15px] text-white">City</span>
              </div>
              <input
                type="text"
                value={"New york"}
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div>
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-[15px] text-white">
                  Zip Code
                </span>
              </div>
              <input
                type="text"
                value={"E11 113"}
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default UsersDetails;
