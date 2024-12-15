import React from "react";

function Heading({ children, className }) {
  return (
    <h1
      className={`md:font-semibold font-medium text-[16px] md:text-[26px] font-monts mb-[7px] md:mb-[10px] ${className}`}
    >
      {children}
    </h1>
  );
}

export default Heading;
