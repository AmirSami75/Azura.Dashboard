"use client";

import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

import MenuList from "./menu/menuList";
import menuData from "@/data/menuData";
import useViewportSize from "@/hooks/useViewportSize";
import LogoutButton from "./LogoutButton";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  onToggleSidebar: () => void;
};

const Sidebar = ({
  collapsed,
  setCollapsed,
  onToggleSidebar,
}: SidebarProps) => {
  const { width } = useViewportSize();

  //برای زمانی که سایت بار رو در حالت های کوچک تر میبندی وقتی صفحه رو بزرگ تر می کنی خود به خود باز بشه که صفحه زیبا باشه
  useEffect(() => {
    if (width > 1024) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [width]);

  return (
    <>
      {/* sidebar */}
      <div className="h-full fixed start-0 top-0 z-50 pointer-events-none">
        <div
          className="pointer-events-auto relative z-10 h-full w-[228px] transition-all duration-300 bg-card text-card-foreground shadow border-l-1 border-border flex flex-col"
          style={{ translate: collapsed ? "0 0 " : "100% 0 " }}
        >
          {/* sidebar header */}
          <div className="border-b px-4 py-5 border-border flex justify-between items-center grow-0">
            <div className="flex flex-row-reverse items-center text-3xl  font-semibold leading-none">
              <span className="text-destructive ">Azu</span>
              <span className="text-accent ">ra</span>
            </div>
            <button
              className={` ${
                width > 1024 ? "hidden" : "flex items-center justify-center"
              }`}
              onClick={(e) => {
                e.preventDefault();
                onToggleSidebar();
              }}
            >
              <IoMdClose className="text-2xl" />
            </button>
          </div>
          {/* sidebar content */}
          <div className=" px-4 py-6 mb-4 grow">
            {menuData && menuData.length > 0 ? (
              <MenuList list={menuData} setCollapsed={setCollapsed} />
            ) : null}
          </div>
          <div className="hidden lg:flex justify-end p-4 grow-0 ">
            <LogoutButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
