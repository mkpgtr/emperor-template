import { useEffect, useState } from "react";
import MenuItem from "./components/UI/dashboard/MenuItem";
import { Menus } from "./data/MenuItems";
import ContentArea from "./components/UI/ContentArea/ContentArea";
import HomePage from "./pages/admin/HomePage";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import MenuComponent from "./components/UI/dashboard/MenuComponent";
import Inbox from "./pages/admin/Inbox/Inbox";
import Products from "./pages/admin/Products/Products";
import { Orders } from "./pages/admin/Orders/Orders";
import Search from "./pages/admin/search/Search";
import Logout from "./pages/admin/Logout/Logout";
import Analytics from "./pages/admin/Analytics/Analytics";


const App = () => {
  const location = useLocation()
  const [open, setOpen] = useState(true);
  const [closeMenuOnClick,setCloseMenuOnClick] = useState(false)
  const getActiveIndex = ()=>{
    const activeItem = Menus.find((menuItem)=>{
      return menuItem.path === location.pathname
    })

    return activeItem.id
    
  }

  
  
  
  const currentIndex = getActiveIndex();
  // set the blue highlighting dynamically according to the url in the address bar
  const [activeIndex, setActiveIndex] = useState(currentIndex || 0);
 

  useEffect(() => {
    
    window.addEventListener("resize", handleResize);
    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
   
  });

 

function handleResize() {
  console.log(window.innerWidth)
  
  if (window.innerWidth > 968) {
    setOpen(true)
  } else {

    setOpen(false)
  }
  
  
}

useEffect(()=>{
  if(window.innerWidth < 968 && open ){
    setCloseMenuOnClick(true)
  }else{
    
    setCloseMenuOnClick(false)
  }
},[open])



  return (
    <>
      
        <Routes>
          <Route path='/' element={<div className="flex ">
          <div className={``}>
            <div
              className={`${open ? "w-72" : "w-20 "
                } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
            >
              <img
                src="./src/assets/control.png"
                className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
              />
              <div className="flex gap-x-4 items-center">
                <img
                  src="./src/assets/logo.png"
                  className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                    }`}
                />
                <h1
                  className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                    }`}
                >
                  mkpgtr
                </h1>
              </div>
               <MenuComponent Menus={Menus} open={open} setOpen={setOpen} activeIndex={activeIndex} shouldCloseMenuOnNextClick={closeMenuOnClick} setActiveIndex={setActiveIndex}/>
            </div>


           
          </div>
          <ContentArea>
              <Outlet />
            </ContentArea>

          </div>
          }>
            <Route path='/' element={<HomePage />} />
            <Route path='/inbox' element={<Inbox />} />
            <Route path='/products' element={<Products />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/search' element={<Search />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/analytics' element={<Analytics />} />
          </Route>
        </Routes>
  


    </>
  );
};
export default App;