import MenuList from "./menu/menuList";
import menuData from "@/app/data/menuData";

const Sidebar = () => {
  return (
    <>
      {/* sidebar */}
      <div className="w-full   ">
        {/* sidebar header */}
        <div className="border-b px-4 py-5 border-gray-200 flex justify-end items-center">
          <span className="grid place-content-center bg-gray-100 w-32 h-10 rounded-lg text-sm text-gray-600  ">
            LOGO
          </span>
        </div>
        {/* sidebar content */}
        <div className="px-4 py-6 mb-4">
          {menuData && menuData.length > 0 ? (
            <MenuList list={menuData} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
