import { CiMenuFries } from "react-icons/ci";
import DarkmodeButton from "./DarkmodeButton";
import useViewportSize from "@/hooks/useViewportSize";

type HeaderProps = {
  collapsed: boolean;
  onToggleSidebar: () => void;
};

const Header = ({ onToggleSidebar }: HeaderProps) => {
  const { width } = useViewportSize();

  return (
    <div className="flex justify-between items-center px-2 py-3">
      {/* right part */}
      <div>
        <CiMenuFries
          onClick={onToggleSidebar}
          className={`text-2xl font-extrabold  ${
            width > 1024 ? "hidden" : "null"
          }`}
        />
        {/* <Search/> */}
      </div>
      {/* left part */}
      <div>
        {/* profile pic */}
        {/* notif icon */}
        {/* inbox icon */}
        {/* darkmode icon */}
        <DarkmodeButton />
      </div>
    </div>
  );
};

export default Header;
