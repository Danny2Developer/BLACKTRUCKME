import React, { useState } from "react";
import DashboardNav from "./components/DashboardNav";
import DesktopSidebar from "./components/DesktopSidebar";
import { Outlet } from "react-router-dom";
import "./Admin.css"
function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const handleopen = () => {
        setIsOpen(!isOpen)
        
      }
      const handleclose = () =>{
        setIsOpen(false)
      }
      
  return (
    <div className="mmm flex relative">
      <DesktopSidebar isOpen={isOpen} close={handleclose}/>
      <div className="flex flex-col flex-1 w-full">
        <DashboardNav isOpen={isOpen} opener={handleopen} close={handleclose}/>
        <div className="w-full 2xl:min-h-screen min-h-screen px-6 mx-auto grid pt-[30px] h-fit pb-[50px] md:pb-[100px] bg-[#121317]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
