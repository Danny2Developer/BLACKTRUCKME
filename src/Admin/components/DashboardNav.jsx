import { FaBell } from "react-icons/fa6";
import pot from "../../assets/images/def.jpg";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function DashboardNav({ opener}) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isprofileOpen, setIsprofileOpen] = useState(false);

  let notificationRef = useRef();
  let profileRef = useRef();

  
  useEffect(() => {
    let handler = (e) => {
      if (notificationRef && !notificationRef.current.contains(e.target)) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

 

  useEffect(() => {
    let handle = (e) => {
      if (!profileRef.current.contains(e.target)) {
        setIsprofileOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });

  const handleClose = () =>{
    setIsNotificationOpen(false);
    setIsprofileOpen(false);
  }
  return (
    <header className="sticky top-0 z-10 w-full py-4 h-fit shadow-md bg-[#1A1C23]">
      <div className=" flex items-center justify-between px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none"
          onClick={opener}
        >
          <svg className="w-6 h-6" fill="#fff" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="title font-Cabin text-white text-[13px] md:text-[16px] font-Medium">
          Welcome, <span className="ms-1">Astro Soft 👋</span>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              aria-label="Notifications"
            >
              <FaBell className="text-[19px] text-[#CABFFD]" />

              {/* <!-- Notification badge --> */}
              <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2  rounded-full border-gray-800"></span>
            </button>
            {isNotificationOpen && (
              <template ref={notificationRef} className="block">
                <ul onClick={handleClose} className="font-syne absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-300 border-gray-700 bg-gray-700 rounded-md shadow-md">
                  <li className="flex">
                    <Link
                      className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                      to="/dashboard/bookings"
                    >
                      <span>Bookings</span>
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                        13
                      </span>
                    </Link>
                  </li>
                  
                  <li className="flex">
                    <Link
                      className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                      to="dashboard/users"
                    >
                      <span>New User</span>
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                        5
                      </span>
                    </Link>
                  </li>
                </ul>
              </template>
            )}
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              onClick={() => setIsprofileOpen(!isprofileOpen)}
              className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
            >
              <img
                className="object-cover w-8 h-8 rounded-full"
                src={pot}
                alt=""
                aria-hidden="true"
              />
            </button>
            {isprofileOpen && (
              <template ref={profileRef} className="block">
                <ul onClick={handleClose} className="font-syne absolute right-0 w-56 p-2 mt-2 space-y-2  rounded-md shadow-md border-gray-700 text-gray-300 bg-gray-700">
                 
                  <li className="flex">
                    <Link
                      className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                      to="/dashboard/settings"
                    >
                      <svg
                        className="w-4 h-4 mr-3"
                        aria-hidden="true"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>Settings</span>
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                      to="/admin-login"
                    >
                      <svg
                        className="w-4 h-4 mr-3"
                        aria-hidden="true"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                      </svg>
                      <span>Log out</span>
                    </Link>
                  </li>
                </ul>
              </template>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default DashboardNav;
