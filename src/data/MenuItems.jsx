import { AiFillCalendar, AiFillPieChart, AiOutlineFolderOpen, AiOutlinePieChart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoMdAnalytics } from "react-icons/io";
import { RiFileSettingsFill, RiUser2Line } from "react-icons/ri";

export const Menus = [
    {id:0, title: "Dashboard", src: <AiFillPieChart  fontSize={30} color="#fff"/>,path:'/admin' },
    {id:1, title: "Inbox", src: <AiOutlinePieChart   fontSize={30}/>,path:'/admin/inbox' },
    { id:2,title: "Products", src: <AiOutlineUser  fontSize={30}/>, gap: true,path:'/admin/products'  },
    { id:3,title: "Orders", src: <AiFillCalendar  fontSize={30}/>,path:'/admin/orders'},
    { id:4,title: "Search", src: <AiOutlineSearch  fontSize={30}/>,path:'/admin/search'  },
    { id:5,title: "Analytics", src: <IoMdAnalytics fontSize={30}/>,path:'/admin/analytics' },
    { id:6,title: "Files ", src: <AiOutlineFolderOpen  fontSize={30}/>, gap: true, path:'/admin/files' },
    { id:7,title: "Logout", src: <RiFileSettingsFill  fontSize={30}/>,path:'/logout' },
  ];