import cover from "../assets/images/blog1.jpg";
import def from '../assets/images/def.jpg'
import { IoIosLock } from "react-icons/io";
import Buttons from "../components/ui/Button";
function Settings() {
  return (
    <div>
      <div className="px-4 py-3 mb-8 rounded-lg shadow-md bg-gray-800 pb-[20px] md:pb-[30px] h-fit">
        <h2 className="font-Cabin text-white text-[17px] md:text-[20px] tracking-wide pb-[7px] md:pb-[13px] border-b-1 border-white/40 mb-[10px] md:mb-[20px]">
          Admin Details
        </h2>
        <div className="cover w-full h-[200px] md:min-h-[300px] overflow-hidden rounded-lg">
          <img src={cover} className="w-full object-cover h-full" alt="" />
        </div>
        <div className="details grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-5 mt-[15px] md:mt-[20px]">
          <div className="relative mt-[-70px] md:mt-0">
            <div className="w-fit flex flex-col md:block items-center mx-auto md:mx-0 md:w-auto md:absolute top-[-100px] left-[25px]">
            <div className="profile-img w-[100px] overflow-hidden max-h-[100px] md:w-[180px]  md:max-h-[200px] border-2 md:border-4 rounded-md">
                <img src={def} className="w-full h-full object-cover" alt="" />
            </div>
            <h1 className=" font-Cabin font-semibold text-white mt-[10px] text-center text-[16px] md:text-[18px]">Astro Soft</h1>
            <p className="mt-[10px] py-2 px-3 whitespace-nowrap bg-gold rounded-md text-black flex items-center gap-1 font-syne justify-center"><IoIosLock className="text-black text-[15px]"/> Adminstrator</p>
            </div>
          </div>
          <div className="grid font-Cabin lg:col-span-2 grid-cols-1 gap-5">
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text  text-[15px] text-white">
                  FullName
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
                  Email
                </span>
              </div>
              <input
                type="Email"
                value={"example@gmail.com"}
                className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
              />
            </div>
           
          </div>
        </div>
      </div>
      <div >
        <div className="px-4 py-3 mb-8 rounded-lg shadow-md bg-gray-800 pb-[20px] md:pb-[30px] h-fit">
        <h2 className="font-Cabin text-white text-[17px] md:text-[20px] tracking-wide pb-[7px] md:pb-[13px] border-b-1 border-white/40 mb-[10px] md:mb-[20px]">
          Update Details
        </h2>
          <form action="" className="font-syne">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text  text-[15px] text-white">
                    Full Name
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text  text-[15px] text-white">
                    Email
                  </span>
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
             
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text  text-[15px] text-white">
                    Upload Cover Image
                  </span>
                </div>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text  text-[15px] text-white">
                    Upload Profile Image
                  </span>
                </div>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text  text-[15px] text-white">
                    Password
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
            </div>

            <Buttons className="bg-gold text-black rounded-md py-[7px] w-full md:w-auto justify-center mb-[10px] md:font-medium md:rounded-md md:py-[8px] mt-[30px] ms-auto flex">
              Update
            </Buttons>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
