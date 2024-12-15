import logo from "../../assets/images/comp-logo.png";
import { Link, NavLink } from "react-router-dom";
import { RiHome3Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { MdCollectionsBookmark } from "react-icons/md";
import { AiOutlineBook } from "react-icons/ai";
import { TbBrandSnowflake } from "react-icons/tb";
import '../../Admin/Admin.css';

function DesktopSidebar({close, isOpen}) {
  const Lists = [
    {
      title: "Dashboard",
      URL: "/dashboard/admin-home",
      icon: <RiHome3Fill />,
    },
    {
      title: "Users",
      URL: "/dashboard/users",
      icon: <FaUsers />,
    },
    {
      title: "Cars",
      URL: "/dashboard/cars",
      icon: <IoCarSportSharp />,
    },
    {
      title: "Bookings",
      URL: "/dashboard/bookings",
      icon: <MdCollectionsBookmark />,
    },
    {
      title: "Booking History",
      URL: "/dashboard/booking-history",
      icon: <AiOutlineBook />,
    },
    {
      title: "Brands",
      URL: "/dashboard/brands",
      icon: <TbBrandSnowflake />,
    },
  ];
  
  return (
    <div className="dashboard-sidebar">
      {isOpen && <div
        onClick={close}
        className="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 md:hidden sm:items-center sm:justify-center"
      ></div>}
     <aside
        className={`fixed mobz inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-[#1A1C23] md:hidden ${isOpen ? 'active' : 'translate-x-[-270px] opacity-0'}`}
      >
        <div className="py-4 text-gray-500">
          <div className="logo mt-[5px] mb-[15px] px-[20px] w-full">
            <Link to="/" className="">
              <img className="w-[60px] md:w-[60px]" src={logo} alt="" />
            </Link>
          </div>
          <div className="links mt-6">
            {Lists.map((data, index) => {
              const { title, icon, URL } = data;
              return (
                <NavLink to={URL} key={index} className=" relative flex items-center group px-6 py-[0.8rem] hover:bg-sec">
                  <li  
                    className={`inline-flex items-center w-full text-[16px] font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`}
                  >
                    <span className="text-[20px] group-hover:text-white">
                      {icon}
                    </span>
                    <span className="ml-4 group-hover:text-white">{title}</span>
                  </li >
                </NavLink>
              );
            })}
          </div>
        </div>
      </aside>
      <aside className="z-20 hidden h-screen sticky top-0 w-64 font-syne overflow-y-auto bg-[#1A1C23] md:block flex-shrink-0">
        <div className="py-4 text-gray-500">
          <div className="logo mt-[5px] mb-[15px] px-[20px] w-full">
            <div className="">
              <img className="w-[60px] md:w-[60px]" src={logo} alt="" />
            </div>
          </div>
          <div className="links mt-6">
            {Lists.map((data, index) => {
              const { title, icon, URL } = data;
              return (
                <NavLink to={URL} key={index} className=" relative flex items-center group px-6 py-[0.8rem] hover:bg-sec">
                  <li  
                    className={`inline-flex items-center w-full text-[16px] font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`}
                  >
                    <span className="text-[20px] group-hover:text-white">
                      {icon}
                    </span>
                    <span className="ml-4 group-hover:text-white">{title}</span>
                  </li >
                </NavLink>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default DesktopSidebar;
