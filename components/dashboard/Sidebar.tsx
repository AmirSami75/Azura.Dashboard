"use client";
import MenuList from "./menu/menuList";
import menuData from "@/data/menuData";

import { IoMdClose } from "react-icons/io";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  return (
    <>
      {/* sidebar */}
      <div className="h-full fixed start-0 top-0 z-50 pointer-events-none">
        <div
          className="pointer-events-auto relative z-10 h-full w-[228px] transition-all duration-300 bg-white shadow border-l-1 border-gray-200"
          style={{ translate: collapsed ? "0 0 " : "100% 0 " }}
        >
          {/* sidebar header */}
          <div className="border-b px-4 py-5 border-gray-200 flex justify-between items-center">
            <span className="grid place-content-center bg-gray-100 w-32 h-10 rounded-lg text-sm text-gray-600">
              LOGO
            </span>
            <IoMdClose
              className="text-xl"
              onClick={(e) => {
                e.preventDefault();
                setCollapsed((prev) => !prev);
              }}
            />
          </div>
          {/* sidebar content */}
          <div className="px-4 py-6 mb-4 h-[calc(100%-40px)] grow">
            {menuData && menuData.length > 0 ? (
              <MenuList list={menuData} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
