import { IoCarSportSharp } from "react-icons/io5";
import { MdCollectionsBookmark } from "react-icons/md";
import { TbBrandSnowflake } from "react-icons/tb";

function AdminHeader() {
  return (
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      {/* <!-- Card --> */}
      {/* <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
        <div className="p-3 mr-4 rounded-full text-green-100 bg-green-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div>
          <p className="mb-2 text-sm font-syne font-medium text-gray-400">
            Est. Revenue
          </p>
          <p className="text-lg font-Cabin font-semibold text-gray-200">
            $ 46,760.89
          </p>
        </div>
      </div> */}
      {/* <!-- Card --> */}
      <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
        <div className="p-3 mr-4  rounded-full text-blue-100 bg-blue-500">
          <MdCollectionsBookmark className="text-[19px]" />
        </div>
        <div>
          <p className="mb-2 text-sm font-syne font-medium text-gray-400">
            Total Bookings
          </p>
          <p className="text-lg font-Cabin font-semibold text-gray-200">100</p>
        </div>
      </div>

      <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
        <div className="p-3 mr-4 rounded-full text-orange-100 bg-red-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
          </svg>
        </div>
        <div>
          <p className="mb-2 text-sm font-syne font-medium text-gray-400">
            Users
          </p>
          <p className="text-lg font-Cabin font-semibold text-gray-200">6389</p>
        </div>
      </div>
      {/* <!-- Card --> */}
      <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
        <div className="p-3 mr-4 rounded-full text-orange-100 bg-orange-500">
          <IoCarSportSharp className="text-[19px]" />
        </div>
        <div>
          <p className="mb-2 text-sm font-syne font-medium text-gray-400">
            Total Cars
          </p>
          <p className="text-lg font-Cabin font-semibold text-gray-200">6389</p>
        </div>
      </div>
      {/* <!-- Card --> */}
      <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
        <div className="p-3 mr-4  rounded-full text-teal-100 bg-teal-500">
          <TbBrandSnowflake className="text-[19px]" />
        </div>
        <div>
          <p className="mb-2 text-sm font-syne font-medium text-gray-400">
            Total Brands
          </p>
          <p className="text-lg font-semibold font-Cabin text-gray-200">35</p>
        </div>
      </div>
      {/* <!-- Card --> */}
      <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
        <div className="p-3 mr-4  rounded-full text-pink-100 bg-pink-500">
          <IoCarSportSharp className="text-[19px]" />
        </div>
        <div>
          <p className="mb-2 text-sm font-syne font-medium text-gray-400">
            Avaliable Cars
          </p>
          <p className="text-lg font-semibold font-Cabin text-gray-200">35/100</p>
        </div>
      </div>
      {/* <!-- Card --> */}
      <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
        <div className="p-3 mr-4  rounded-full text-yellow-100 bg-yellow-500">
          <TbBrandSnowflake className="text-[19px]" />
        </div>
        <div>
          <p className="mb-2 text-sm font-syne font-medium text-gray-400">
            Completed Rental
          </p>
          <p className="text-lg font-semibold font-Cabin text-gray-200">35</p>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
