import { FC } from "react";
import MenuItem from "./menuItem";

import { MenuDataProps } from "@/data/menuData";

interface MenuListProps {
  list?: MenuDataProps[];
}

const MenuList: FC<MenuListProps> = ({ list = [] }) => {
  return (
    <ul className=" space-y-3">
      {list && list.length
        ? list.map((item) => <MenuItem item={item} key={item.label} />)
        : null}
    </ul>
  );
};

export default MenuList;
