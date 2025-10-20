"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FC, useState } from "react";
import Link from "next/link";

import MenuList from "./menuList";
import { MenuDataProps } from "@/src/data/menuData";

interface MenuItemProps {
  item: MenuDataProps;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuItem: FC<MenuItemProps> = ({ item, setCollapsed }) => {
  const [displayChildrenItems, setDisplayChildrenItems] = useState<{
    [key: string]: boolean;
  }>({});

  const handleToggleChildren = (itemLabel: string) => {
    setDisplayChildrenItems((prev: any) => ({
      ...prev,
      [itemLabel]: !prev[itemLabel],
    }));
  };

  return (
    <li className=" text-gray-500 font-medium text-sm cursor-pointer">
      <div
        className="flex justify-between  rounded-lg hover:bg-gray-100 hover:text-gray-700 hover:shadow-sm"
        onClick={() => handleToggleChildren(item.label)}
        style={{
          backgroundColor:
            item &&
            item.children &&
            item.children.length > 0 &&
            displayChildrenItems[item.label]
              ? "#e5e7eb"
              : "",
        }}
      >
        <Link
          className="text-sm font-medium px-4 py-3 flex-none"
          href={item.to}
          onClick={() => setCollapsed(false)}
        >
          {item.label}
        </Link>
        {item && item.children && item.children.length > 0 ? (
          <span className="flex items-center justify-end  flex-1 px-2">
            {displayChildrenItems[item.label] ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDown />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildrenItems[item.label] ? (
        <div className="pl-4 ">
          <MenuList list={item.children} setCollapsed={setCollapsed} />
        </div>
      ) : null}
    </li>
  );
};

export default MenuItem;
