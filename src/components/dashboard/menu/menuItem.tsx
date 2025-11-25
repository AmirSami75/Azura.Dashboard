"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FC, useState } from "react";
import Link from "next/link";

import MenuList from "./menuList";
import { MenuDataProps } from "@/data/menuData";
import useViewportSize from "@/hooks/useViewportSize";

interface MenuItemProps {
  item: MenuDataProps;
  setCollapsed: (value: boolean) => void;
}

const MenuItem: FC<MenuItemProps> = ({ item, setCollapsed }) => {
  const [open, setOpen] = useState(false);
  const { width } = useViewportSize();

  const handleToggle = () => {
    if (hasChildren) setOpen(!open);
  };

  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className="font-medium text-sm cursor-pointer">
      <div
        className={`flex justify-between rounded-lg hover:bg-secondary hover:shadow-sm ${
          hasChildren && open ? "bg-secondary" : ""
        } `}
        onClick={handleToggle}
      >
        {!hasChildren && (
          <Link
            className=" px-4 py-3 flex-none"
            href={item.to}
            onClick={() => width < 1024 && setCollapsed(false)}
          >
            {item.label}
          </Link>
        )}

        {hasChildren && (
          <div className=" px-4 py-3 flex-none">{item.label}</div>
        )}

        {hasChildren && (
          <span className="flex items-center justify-end  flex-1 px-2">
            {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        )}
      </div>

      {hasChildren && open ? (
        <div className="pl-4 mt-2 ">
          <MenuList list={item.children} setCollapsed={setCollapsed} />
        </div>
      ) : null}
    </li>
  );
};

export default MenuItem;
