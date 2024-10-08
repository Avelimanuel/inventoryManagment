"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed, setIsdarkMode } from "../../../app/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  // State to track if the icon is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleDarkMode = () => {
    dispatch(setIsdarkMode(!isDarkMode));
  };

  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapsed(!isSideBarCollapsed));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* Left side */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSideBar}
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="search groups and products"
            className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center">
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun
                  className="cursor-pointer text-gray-500"
                  size={24}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              ) : (
                <Moon
                  className="cursor-pointer text-gray-500 "
                  size={24}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              )}
            </button>
            {isHovered && (
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-200 text-gray-700 rounded px-2 py-1 text-sm">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </div>
            )}
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py text-xs font-semibold leading-none text-red-100 bg-red-500 rounded-full ">
              4
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-400 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">image</div>
            <span className="font-semibold">Manuel</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className={`cursor-pointer text-gray-500`} size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
