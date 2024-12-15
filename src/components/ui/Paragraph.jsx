import React from "react";

function Paragraph({ children, className }) {
  return (
    <p
      className={`text-[12px] md:text-[17px] text-white font-monts ${className}`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
