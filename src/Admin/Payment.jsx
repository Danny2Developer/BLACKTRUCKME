import { CiSearch } from "react-icons/ci";
import car1 from "../assets/images/lambo1.webp";
import car2 from "../assets/images/mc1.webp";
import car3 from "../assets/images/bently1.webp";
import car4 from "../assets/images/bently2.webp";
import car5 from "../assets/images/lambo3.webp";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { Link } from "react-router-dom";
import AdminModal from "./components/AdminModal";
import { RiDeleteBin6Line } from "react-icons/ri";
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

function Payment() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const TableData = [
    {
      amount: "12,000",
      status: "successful",
      date: "2024-04-05",
      user: "Ebuka Ibekwe",
    },
    {
      amount: "12,000",
      status: "pending",
      date: "2024-04-05 ",
      user: "Ebuka Ibekwe",
    },
    {
      amount: "12,000",
      status: "successful",
      date: "2024-04-05",
      user: "Ebuka Ibekwe",
    },
    {
      amount: "12,000",
      status: "pending",
      date: "2024-04-05",
      user: "Ebuka Ibekwe",
    },
    {
      amount: "12,000",
      status: "successful",
      date: "2024-04-05",
      user: "Ebuka Ibekwe",
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="flex justify-between items-center mb-4 md:mb-8">
        <h4 className=" text-lg font-semibold text-gray-300 font-syne">
          Payments
        </h4>
        <form action="">
          <Input
            isClearable
            radius="sm"
            variant="bordered"
            className="max-w-xs"
            classNames={{
              label: "text-white/90",
              input: [
                "bg-transparent",
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
      </div>
      <div className="w-full rounded-lg shadow-xs mt-[20px] md:mt-[40px]">
        <div className="w-full overflow-x-auto table-over scrollbar  scrollbar-thumb-slate-700 scrollbar-track-slate-300">
          <table className="w-full whitespace-nowrap ">
            <thead>
              <tr className="font-syne text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700 text-gray-400 bg-gray-800">
                <th className="px-4 py-4">#</th>
                <th className="px-4 py-4">Customer Name</th>
                <th className="px-4 py-4">Date</th>
                <th className="px-4 py-4">Amount</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className=" font-Cabin divide-y divide-gray-700/50 whitespace-nowrap">
              {TableData.map((data, index) => {
                const { user, date, status, amount } = data;
                return (
                  <tr className="text-gray-400 even:bg-gray-800 odd:bg-[#121317]">
                    <td className="px-4 py-3" key={index}>
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 text-sm md:text-[16px]">{user}</td>

                    <td className="px-4 py-3 text-sm md:text-[16px]">{date}</td>
                    <td className="px-4 py-3 text-sm md:text-[16px]">
                      ${amount}
                    </td>

                    <td className="px-4 py-3 text-xs md:text-sm">
                      <span
                        className={`px-3 py-1 font-semibold leading-tight  rounded-full ${
                          status === "successful"
                            ? "bg-green-700 text-green-100"
                            : status === "pending"
                            ? "text-red-100 bg-red-600"
                            : null
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
                    Are you sure you want to delete this payment ?
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

export default Payment;
