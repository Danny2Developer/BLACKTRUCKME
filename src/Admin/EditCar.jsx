import { Button } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import { Link, json } from "react-router-dom";
import { RadioGroup, Radio } from "@nextui-org/react";
import Buttons from "../components/ui/Button";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import car1 from "../assets/images/lambo1.webp";
import car2 from "../assets/images/mc1.webp";
import car3 from "../assets/images/bently1.webp";
import car4 from "../assets/images/bently2.webp";
import car5 from "../assets/images/lambo3.webp";
import Files from "react-files";
function EditCar() {
    const [front, setFront] = useState("");
    const [files, setFiles] = useState([]);
    const handleChange = (newFiles) => {
      // setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setFiles(newFiles);
    };
    const handleFrontImage = (e) => {
      const res = e.target.files[0];
      setFront(res);
      console.log();
    };
  return (
    <div>
      <div className="flex justify-between items-center mb-4 md:mb-8">
        <h4 className=" text-lg font-semibold text-gray-300 font-syne">
          Edit Car
        </h4>
        <Link to="/dashboard/cars">
          <Button className="bg-transparent font-syne border-2 border-red-600 text-white">
            back
          </Button>
        </Link>
      </div>
      <div>
        <div className="px-4 py-3 mb-8 rounded-lg shadow-md bg-gray-800">
          <form action="" className="font-syne">
            <div className="form-control w-full mb-[30px]">
              <div className="label mb-[3px] md:mb-[7px]">
                <span className="label-text text-[15px] text-white">
                  Images Preview{" "}
                </span>
              </div>
              <div className="grid gap-[10px] lg:gap-[20px] grid-cols-2 md:grid-cols-4 w-[100%] grid-flow-dense auto-rows-[100px] lg:auto-rows-[200px] md:auto-rows-[100px]">
                {files.map((file) => {
                  return (
                    <div
                      key={file.id}
                      className="each border border-white/70 overflow-hidden flex justify-center items-center front-image bg-[#2B3440] rounded-md relative"
                    >
                      <div className="w-full h-full">
                        <img
                          className="w-full h-full object-cover"
                          src={file.preview.url}
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="form-control ">
                <div className="label">
                  <span className="label-text text-[15px] text-white">
                    Upload car images
                  </span>
                </div>
                <Files
                  className="files-dropzone-list bbg-transparent border-sec border-2 focus:border-sec text-white rounded-md w-[70%]"
                  dragActiveClassName="files-dropzone-active"
                  onChange={handleChange}
                  multiple
                  maxFiles={4}
                  maxFileSize={10000000}
                  minFileSize={0}
                  clickable
                >
                  click to upload max(4 images)
                </Files>
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-[15px] text-white">
                    Car Name
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
                    Car Year
                  </span>
                </div>
                <input
                  type="number"
                  className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">Select Brand</span>
                </div>
                <select className="capitalize text-[15px] w-full select select-bordered bg-transparent border-sec border-2 focus:border-sec text-white">
                  <option className="text-black text-[16px]">
                    Select Brand
                  </option>
                  <option className="text-black text-[16px]">Audi</option>
                  <option className="text-black text-[16px]">Honda</option>
                  <option className="text-black text-[16px]">Bently</option>
                </select>
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">Select type</span>
                </div>
                <select className="capitalize select text-[15px] w-full select-bordered bg-transparent border-sec border-2 focus:border-sec text-white">
                  <option className="text-black text-[16px]">
                    Luxury Cars
                  </option>
                  <option value="" className="text-black text-[16px]">
                    Luxury Suvs
                  </option>
                  <option value="" className="text-black text-[16px]">
                    Muscle Cars
                  </option>
                  <option value="" className="text-black text-[16px]">
                    Sports Cars
                  </option>
                  <option value="" className="text-black text-[16px]">
                    Super Cars
                  </option>
                  <option value="" className="text-black text-[16px]">
                    super Suvs
                  </option>
                </select>
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">Services</span>
                </div>
                <select className="capitalize select w-full select-bordered bg-transparent border-sec border-2 focus:border-sec text-white">
                  <option className="text-black text-[16px]">Car Rental</option>
                  <option
                    value="wedding_rental"
                    className="text-black text-[16px]"
                  >
                    Wedding Rental
                  </option>
                  <option
                    value="party_bus_rental"
                    className="text-black text-[16px]"
                  >
                    Party Bus Rental
                  </option>
                  <option
                    value="chauffeur_rental"
                    className="text-black text-[16px]"
                  >
                    Chauffeur Rental
                  </option>
                  <option
                    value="baby_shower_rental"
                    className="text-black text-[16px]"
                  >
                    Baby Shower Rental
                  </option>
                  <option
                    value="prom_rental"
                    className="text-black text-[16px]"
                  >
                    Prom Rental
                  </option>
                </select>
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">Transmission</span>
                </div>
                <select className="capitalize select w-full select-bordered bg-transparent border-sec border-2 focus:border-sec text-white">
                  <option className="text-black text-[16px]">
                    Select Transmission
                  </option>
                  <option value="automatic" className="text-black text-[16px]">
                    Automatic
                  </option>
                  <option value="manual" className="text-black text-[16px]">
                    Manual
                  </option>
                </select>
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">Fuel</span>
                </div>
                <select className="w-full select select-bordered bg-transparent border-sec border-2 focus:border-sec text-white">
                  <option className="text-black text-[16px]">
                    Select Fuel
                  </option>
                  <option value="gasoline" className="text-black text-[16px]">
                    gasoline
                  </option>
                  <option value="deisel" className="text-black text-[16px]">
                    deisel
                  </option>
                  <option value="kerosene" className="text-black text-[16px]">
                    kerosene
                  </option>
                  <option value="battery" className="text-black text-[16px]">
                    battery
                  </option>
                </select>
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">Status</span>
                </div>
                <select className="w-full select select-bordered bg-transparent border-sec border-2 focus:border-sec text-white">
                  <option className="text-black text-[16px]">
                    Select Status
                  </option>
                  <option value="active" className="text-black text-[16px]">
                    active
                  </option>
                  <option value="rentend" className="text-black text-[16px]">
                    rentend
                  </option>
                </select>
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">Price Type</span>
                </div>
                <select className="w-full select select-bordered bg-transparent border-sec border-2 focus:border-sec text-white">
                  <option value="Day" className="text-black text-[16px]">
                    Day
                  </option>
                  <option value="Hour" className="text-black text-[16px]">
                    Hour
                  </option>
                </select>
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-[15px] text-white">
                    Speed
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-[15px] text-white">
                    Price
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-[15px] text-white">
                    Person
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-[15px] text-white">
                    Available From
                  </span>
                </div>
                <input
                  type="date"
                  className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text text-[15px] text-white">
                    Available To
                  </span>
                </div>
                <input
                  type="date"
                  className="input input-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white"
                />
              </div>
            </div>
            <Buttons className="bg-gold text-black rounded-md py-[7px] w-full md:w-auto justify-center mb-[10px] md:font-medium md:rounded-md md:py-[8px] mt-[30px] ms-auto flex">
              Submit
            </Buttons>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCar;
