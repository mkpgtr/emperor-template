import { useEffect, useState } from "react";
import MenuItem from "./components/UI/dashboard/MenuItem";
import { Menus } from "./data/MenuItems";
import ContentArea from "./components/UI/ContentArea/ContentArea";
import HomePage from "./pages/admin/HomePage";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MenuComponent from "./components/UI/dashboard/MenuComponent";
import Inbox from "./pages/admin/Inbox/Inbox";
import Products from "./pages/admin/Products/Products";
import { Orders } from "./pages/admin/Orders/Orders";
import Search from "./pages/admin/search/Search";


const App = () => {
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0)


 

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth)
      if (window.innerWidth > 968) {
        setOpen(true)
      } else {

        setOpen(false)
      }
    });
  })


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><div className="flex">
            <div
              className={` ${open ? "w-72" : "w-20 "
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
               <MenuComponent Menus={Menus} open={open} setOpen={setOpen} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
            </div>


            <ContentArea>
              <Outlet />
            </ContentArea>
          </div>

          </>
          }>
            <Route path='/home' element={<HomePage />} />
            <Route path='/inbox' element={<Inbox />} />
            <Route path='/products' element={<Products />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/search' element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
};
export default App;