import React, { useState } from "react";
import car1 from "../assets/images/lambo1.webp";
import car2 from "../assets/images/mc1.webp";
import car3 from "../assets/images/bently1.webp";
import car4 from "../assets/images/bently2.webp";
import car5 from "../assets/images/lambo3.webp";
import car6 from "../assets/images/r&r.webp";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import AdminModal from "./components/AdminModal";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
  Input,
} from "@nextui-org/react";
import Inputs from "../components/ui/Input";
import { Link } from "react-router-dom";
import AddCarRental from "./components/AddCarRental";

function Cars() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const TableData = [
    {
      car: car4,
      carName: "Bently vanushsduhgysduy",
      price: "13,000",
      brand: "Bently",
      FuelType: "Eletric",
      status: "active",
      ViewURL: "",
      Type: "Super Car",
      EditURL: "",
    },
    {
      car: car1,
      carName: "Bently vanushsduhgysduy",
      price: "13,000",
      brand: "Bently",
      FuelType: "Eletric",
      status: "Retired",
      ViewURL: "",
      EditURL: "",
      Type: "Luxury Car",
    },
    {
      car: car2,
      carName: "Bently vanushsduhgysduy",
      price: "13,000",
      brand: "Bently",
      FuelType: "Eletric",
      status: "active",
      ViewURL: "",
      EditURL: "",
      Type: "Luxury Car",
    },
    {
      car: car3,
      carName: "Bently vanushsduhgysduy",
      price: "13,000",
      brand: "Bently",
      FuelType: "Eletric",
      status: "Rented",
      ViewURL: "",
      EditURL: "",
      Type: "Muscle car",
    },
    {
      car: car5,
      carName: "Bently vanushsduhgysduy",
      price: "13,000",
      brand: "Ferrari",
      FuelType: "Gas",
      status: "active",
      ViewURL: "",
      EditURL: "",
      Type: "Super Suv",
    },
    {
      car: car2,
      carName: "Bently vanushsduhgysduy",
      price: "13,000",
      brand: "Bently",
      FuelType: "Eletric",
      status: "active",
      ViewURL: "",
      EditURL: "",
      Type: "Luxury Suv",
    },
    {
      car: car1,
      carName: "Bently vanushsduhgysduy",
      price: "13,000",
      brand: "Bently",
      FuelType: "Eletric",
      status: "Retired",
      ViewURL: "",
      EditURL: "",
      Type: "Limozin",
    },
    {
      car: car2,
      carName: "Bently vanushsduhgysduy",
      price: "13,000",
      brand: "Bently",
      FuelType: "Eletric",
      status: "Rented",
      ViewURL: "",
      EditURL: "",
      Type: "Sports Car",
    },
  ];
  const [data, setData] = useState(TableData);

  const handleFilter = (e) => {
    console.log(e.target.value);
    const filteredData = TableData.filter(
      (item) => item.Type === e.target.value
    );
    setData(filteredData);
    if (e.target.value === "All") {
      setData(TableData);
    }
    console.log(data);
  };
  return (
    <div className="overflow-hidden">
      <div className="flex justify-between items-center mb-4 md:mb-8">
        <h4 className=" text-lg font-semibold text-gray-300 font-syne">
          All Cars
        </h4>
        <Link to="/dashboard/cars/add-cars">
          <Button className="bg-transparent border-2 border-sec text-white">
            Add Car
          </Button>
        </Link>
      </div>
      <div className="flex justify-between items-center gap-[20px] flex-wrap">
        <form action="">
          <Input
            isClearable
            radius="sm"
            variant="bordered"
            className="max-w-xs "
            classNames={{
              label: "text-white/90",
              input: [
                "bg-transparent",
                "text-white/90",
                " placeholder:text-white/60 border-0 focus:border-red-300 active:border-0",
              ],
              innerWrapper: "bg-transparent ",
              inputWrapper: [
                "group-data-[focus=true]:border-white h-[50px] rounded-md",
              ],
            }}
            placeholder="Type to search..."
            labelPlacement="outside"
            startContent={
              <CiSearch className=" mb-0.5 text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </form>
        <div className="flex items-center gap-[20px]">
          {/* <form action="" className="text-syne w-full md:w-auto font-syne">
            <div className="form-control w-full md:w-[250px]">
              <select onChange={handleFilter} className="select select-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white">
                <option value="All" selected className="text-black text-[16px]">
                  All
                </option>
                <option value="Sports Car" className="text-black text-[16px]">
                  Sports Cars
                </option>
                <option value="Muscle car" className="text-black text-[16px]">
                  Muscle Cars
                </option>
                <option value="Luxury Suv" className="text-black text-[16px]">
                  Luxury Suvs
                </option>
                <option value="Luxury Car" className="text-black text-[16px]">
                  Luxury Cars
                </option>
                <option value="Super Car" className="text-black text-[16px]">
                  Super Cars
                </option>
                <option value="Super Suv" className="text-black text-[16px]">
                  Super Suvs
                </option>
                <option value="Limozin" className="text-black text-[16px]">
                  Limozin
                </option>
              </select>
            </div>
          </form> */}
          {/* <form action="" className="text-syne w-full md:w-auto font-syne">
            <div className="form-control w-full md:w-[250px]">
              <select  className="select select-bordered w-full bg-transparent border-sec border-2 focus:border-sec text-white">
                <option selected className="text-black text-[16px]">
                  Filter By Status
                </option>
                <option className="text-black text-[16px]">active</option>
                <option className="text-black text-[16px]">Rented</option>
                <option className="text-black text-[16px]">Retired</option>
              </select>
            </div>
          </form> */}
        </div>
      </div>
      <div className="w-full rounded-lg shadow-xs mt-[20px] md:mt-[40px]">
        <div className="w-full overflow-x-auto table-over scrollbar  scrollbar-thumb-slate-700 scrollbar-track-slate-300">
          <table className="w-full whitespace-nowrap ">
            <thead>
              <tr className="font-syne text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-800">
                <th className="px-4 py-4">#</th>
                <th className="px-4 py-4">CAR</th>
                <th className="px-4 py-4">Brand</th>
                <th className="px-4 py-4">Fuel</th>
                <th className="px-4 py-4">Type</th>
                <th className="px-4 py-4">Availability</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className=" font-Cabin divide-y divide-gray-700/50 whitespace-nowrap">
              {data.map((data, index) => {
                const { carName, car, price, brand, FuelType, Type, status } =
                  data;
                return (
                  <tr className="text-gray-400 even:bg-gray-800 odd:bg-[#121317]">
                    <td className="px-4 py-3" key={index}>
                      {index + 1}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div className="relative w-[70px] md:w-[150px] h-[50px] md:h-[70px] border-2 mr-3 rounded-md  md:block">
                          <img
                            className="object-cover w-full h-full object-center"
                            src={car}
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm md:text-[16px] w-[150px] whitespace-nowrap text-ellipsis overflow-hidden">
                            {carName}
                          </p>
                          <p className="flex items-center mt-[5px] gap-1 text-xs text-gray-400">
                            <LiaMoneyBillWaveSolid className="text-[18px] text-white" />
                            <span className="text-sm">${price}</span>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm md:text-[16px]">
                      {brand}
                    </td>

                    <td className="px-4 py-3 text-sm md:text-[16px]">
                      {FuelType}
                    </td>
                    <td className="px-4 py-3 text-sm md:text-[16px]">{Type}</td>
                    <td className="px-4 py-3 text-sm md:text-[16px]">
                      2024-04-05 - 2024-06-05
                    </td>
                    <td className="px-4 py-3 text-xs md:text-sm">
                      <span
                        className={`px-3 py-1 font-semibold leading-tight  rounded-full ${
                          status === "active"
                            ? "bg-green-700 text-green-100"
                            : status === "Retired"
                            ? "bg-gray-700 text-gray-100"
                            : "text-white bg-orange-600"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-4 text-sm">
                        <Tooltip
                          showArrow={true}
                          classNames={{
                            base: ["before:bg-[#374151]"],
                            content: [
                              "py-2 px-3 ",
                              "text-black bg-[#374151] text-white font-syne rounded-md",
                            ],
                          }}
                          content="View"
                          closeDelay="200"
                        >
                          <Link to="/dashboard/cars/view-car">
                            <Button
                              isIconOnly
                              size="sm"
                              className=" bg-white/70 rounded-md flex justify-center items-center"
                            >
                              <HiOutlineClipboardDocumentList className="text-black text-[18px]" />
                            </Button>
                          </Link>
                        </Tooltip>
                        <Tooltip
                          showArrow={true}
                          classNames={{
                            base: ["before:bg-[#374151]"],
                            content: [
                              "py-2 px-3 ",
                              "text-black bg-[#374151] text-white font-syne rounded-md",
                            ],
                          }}
                          content="Edit"
                          closeDelay="200"
                        >
                          <Link to="/dashboard/cars/edit-car">
                            <Button
                              isIconOnly
                              size="sm"
                              className=" bg-white/70 capitalize rounded-md flex justify-center items-center"
                            >
                              <MdOutlineEdit className="text-black text-[18px]" />
                            </Button>
                          </Link>
                        </Tooltip>
                        <Tooltip
                          showArrow={true}
                          classNames={{
                            base: ["before:bg-[#374151]"],
                            content: [
                              "py-2 px-3 ",
                              "text-black bg-[#374151] text-white font-syne rounded-md",
                            ],
                          }}
                          content="Delete"
                          closeDelay="200"
                        >
                          <Button
                            title="delete"
                            onPress={onOpen}
                            isIconOnly
                            size="sm"
                            className=" bg-white/70 rounded-md flex justify-center items-center"
                          >
                            <RiDeleteBin6Line className="text-black text-[15px]" />
                          </Button>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide uppercase border-t border-gray-700 sm:grid-cols-9 text-gray-400 bg-gray-800">
          <span className="flex items-center col-span-3">
            Showing 21-30 of 100
          </span>
          <span className="col-span-2"></span>

          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    1
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    2
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                    3
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    4
                  </button>
                </li>
                <li>
                  <span className="px-3 py-1">...</span>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    8
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    9
                  </button>
                </li>
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
      <div className="mod">
        <AdminModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onOpen={onOpen}
          size="sm"
          placement="center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <p className="font-Cabin text-[16px] md:text-[17px]">
                    Are you sure you want to delete this car ?
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="success" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color="danger"
                    className=" text-white"
                    onPress={onClose}
                  >
                    delete
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </AdminModal>
      </div>
    </div>
  );
}

export default Cars;
