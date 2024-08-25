'use client'

import { useAppDispatch, useAppSelector } from "../../../app/redux";
import { Menu } from "lucide-react";
import{setIsSidebarCollapsed} from '../../state'

const Sidebar = () => {

  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed
  )

  const toggleSideBar = () =>{
    dispatch(setIsSidebarCollapsed(!isSideBarCollapsed))
  }

  const sidebarClassNames = `fixed flex flex-col ${
    isSideBarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`


  return <div className={sidebarClassNames}>
    {/* Top Logo */}
    <div className="flex  gap-3 justify-between md:justify-normal items-center pt-8">
      <div>Logo</div>
      <h1 className="font-extrabold text-2xl">Stock</h1>
    
    <button className="rounded-full bg-gray-100 md:hidden px-3 py-3 hover:bg-blue-100" onClick={toggleSideBar}>
      <Menu className="w-4 h-4"/>
    </button>
    </div>
    {/* Links */}
    <div className="flex-grow mt-8">

    </div>

    {/* Footer */}

    <div>
      <p className="text-center text-xs text-gray-500">&copy;2024 Glitch</p>
    </div>
  </div>;
};

export default Sidebar;
