import React, { useRef, useState } from "react";
import AddCarRental from "./components/AddCarRental";
function AddCar() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 md:mb-8">
        <h4 className=" text-lg font-semibold text-gray-300 font-syne">
          Add Car
        </h4>
      </div>
      <AddCarRental />
    </div>
  );
}

export default AddCar;
