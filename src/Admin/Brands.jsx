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
import { Link } from "react-router-dom";
import brandLogo1 from "../assets/images/lambo-logo.png";
import brandLogo2 from "../assets/images/bently-logo.png";
import brandLogo3 from "../assets/images/mclarenlogo.png";
import brandLogo4 from "../assets/images/r&r-logo.png";
import brandLogo5 from "../assets/images/bmw-logo.png";
import brandLogo6 from "../assets/images/caddilac-logo.png";
import brandLogo7 from "../assets/images/land-rover-logo.png";
import brandLogo8 from "../assets/images/polaris-logo.png";
import brandLogo9 from "../assets/images/Corvette-logo.png";
import brandLogo10 from "../assets/images/audi-logo.png";
import brandLogo11 from "../assets/images/ferrari-logo.png";
import brandLogo12 from "../assets/images/benz-logo.webp";
function Brands() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const TableData = [
    {
      BrandImage: brandLogo1,
      name: "lambo",
    },
    {
      BrandImage: brandLogo2,
      name: "bently",
    },
    {
      BrandImage: brandLogo3,
      name: "mclaren",
    },
    {
      BrandImage: brandLogo4,
      name: "Rolls Royce",
    },
    {
      BrandImage: brandLogo5,
      name: "bmw",
    },
    {
      BrandImage: brandLogo6,
      name: "caddilac",
    },
    {
      BrandImage: brandLogo7,
      name: "Land Rover",
    },
    {
      BrandImage: brandLogo8,
      name: "polari",
    },
    {
      BrandImage: brandLogo9,
      name: "corvette",
    },
    {
      BrandImage: brandLogo10,
      name: "audi",
    },
    {
      BrandImage: brandLogo11,
      name: "ferrari",
    },
    {
      BrandImage: brandLogo12,
      name: "mercedes",
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="flex justify-between items-center mb-4 md:mb-8">
        <h4 className=" text-lg font-semibold text-gray-300 font-syne">
          All Brands
        </h4>
        <Link to="/dashboard/brands/add-brands">
          <Button className="bg-transparent border-2 border-sec text-white">
            Add Brand
          </Button>
        </Link>
      </div>
      <form action="">
        <Input
          isClearable
          radius="sm"
          variant="bordered"
          className="max-w-xs"
          classNames={{
            label: "text-white/90",
            input: [
              "bg-transparent border-0",
              "text-white/90",
              " placeholder:text-white/60 ",
            ],
            innerWrapper: "bg-transparent ",
            inputWrapper: ["group-data-[focus=true]:border-white h-[50px]"],
          }}
          placeholder="Type to search..."
          labelPlacement="outside"
          startContent={
            <CiSearch className=" mb-0.5 text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </form>
      <div className="w-full rounded-lg shadow-xs mt-[20px] md:mt-[40px]">
        <div className="w-full overflow-x-auto table-over scrollbar  scrollbar-thumb-slate-700 scrollbar-track-slate-300">
          <table className="w-full whitespace-nowrap ">
            <thead>
              <tr className="font-syne text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-800">
                <th className="px-4 py-4">#</th>
                <th className="px-4 py-4">image</th>
                <th className="px-4 py-4">Brand Name</th>
                <th className="px-4 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className=" font-Cabin divide-y divide-gray-700/50 whitespace-nowrap">
              {TableData.map((data, index) => {
                const { BrandImage, name } = data;
                return (
                  <tr className="text-gray-400 even:bg-gray-800 odd:bg-[#121317]">
                    <td className="px-4 py-3" key={index}>
                      {index + 1}
                    </td>

                    <td className="px-4 py-3">
                      <div className="relative w-[80px]">
                        <img
                          className=" w-[60px] aspect-video h-[50px]"
                          src={BrandImage}
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm md:text-[16px]">{name}</td>
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
                          content="Edit"
                          closeDelay="200"
                        >
                          <Link to="/dashboard/brands/edit-brands">
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
                    Are you sure you want to delete this brand ?
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

export default Brands;
