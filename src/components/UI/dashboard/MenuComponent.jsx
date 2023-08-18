import React from 'react'
import MenuItem from './MenuItem'
import { useNavigate } from 'react-router-dom'

const MenuComponent = ({Menus,open,setOpen,activeIndex,setActiveIndex}) => {
  const navigate = useNavigate()
  const handleMenuItemClick = (index,path) => {
    setActiveIndex(index)
    console.log(path)
    navigate(`${path}`)
  }
  return (
    <ul className="pt-6">
    {Menus.map((Menu, index) => (
      <MenuItem key={index} Menu={Menu} index={index} isActive={activeIndex === index} onClick={() => handleMenuItemClick(index,Menu.path)} open={open} setOpen={setOpen} />
    ))}
  </ul>
  )
}

export default MenuComponent
