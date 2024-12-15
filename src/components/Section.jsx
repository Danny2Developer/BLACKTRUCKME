import React from "react";

function Section({ children, className, ...props }) {
  return (
    <div
    {...props}
      className={`2xl:max-w-[1440px] 2xl:px-0 mx-auto px-[25px] md:px-[60px] mt-[50px] md:mt-[125px] ${className}`}
    >
      {children}
    </div>
  );
}

export default Section;
