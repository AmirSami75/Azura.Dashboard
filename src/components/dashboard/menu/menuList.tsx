import { FC } from "react";
import MenuItem from "./menuItem";

import { MenuDataProps } from "@/data/menuData";

interface MenuListProps {
  list?: MenuDataProps[];
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuList: FC<MenuListProps> = ({ list = [], setCollapsed }) => {
  return (
    <ul className="space-y-3">
      {list && list.length
        ? list.map((item) => (
            <MenuItem
              item={item}
              key={item.label}
              setCollapsed={setCollapsed}
            />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
