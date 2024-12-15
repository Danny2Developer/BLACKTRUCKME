import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footers from "../components/Footers";
import NavBar from "../components/NavBar";

function Root() {
  return (
    <div className="Root">
      <NavBar />
      <Outlet />
      <ScrollRestoration />
      <Footers />
    </div>
  )
}

export default Root;