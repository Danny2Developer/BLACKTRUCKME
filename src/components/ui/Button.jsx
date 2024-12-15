import React from 'react'

function Button({ onClick, children, className}) {
    const classes = 'py-[10px] px-[10px] text-[15px] md:text-[16px] md:py-[13px]  md:px-[25px] font-dmsans md:font-semibold ' + className;
  return (
    <button onClick={onClick} className={classes}>{children}</button>
  )
}

export default Button