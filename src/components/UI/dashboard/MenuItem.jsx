import React, { useEffect, useState } from 'react'

const MenuItem = ({Menu,index,isActive,onClick,open,setOpen}) => {
    const [activeRecord,setActiveRecord] = useState({})
    


   


  return (
    <>
    <li key={index} onClick={onClick}
    className={`flex ${isActive ?'bg-blue-700 hover:bg-blue-700':''} rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 
    ${Menu.gap ? "mt-9" : "mt-2"} `}
  >
    <span>{Menu.src}</span>
    <span className={`${!open && "hidden"} origin-left duration-200`}>
      {Menu.title}
    </span>
  </li>
    </>
  )
}

export default MenuItem