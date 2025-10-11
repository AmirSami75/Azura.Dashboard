"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FC, useState } from "react";
import Link from "next/link";

import MenuList from "./menuList";
import { MenuDataProps } from "@/data/menuData";

interface MenuItemProps {
  item: MenuDataProps;
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
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
    <li className=" text-gray-500 font-medium text-sm cursor-pointer  ">
      <div
        className="flex justify-between px-4 py-3 rounded-lg hover:bg-gray-100 hover:text-gray-700 hover:shadow-sm"
        onClick={() => handleToggleChildren(item.label)}
      >
        <Link className="text-sm font-medium" href={item.to}>
          {item.label}
        </Link>
        {item && item.children && item.children.length > 0 ? (
          <span className="grid place-content-center">
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
          <MenuList list={item.children} />
        </div>
      ) : null}
    </li>
  );
};

export default MenuItem;
