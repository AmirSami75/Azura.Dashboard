import { CiMenuFries } from "react-icons/ci";
import DarkmodeButton from "./DarkmodeButton";
import useViewportSize from "@/hooks/useViewportSize";

type HeaderProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ collapsed, setCollapsed }: HeaderProps) => {
  const { width } = useViewportSize();

  return (
    <div className="flex justify-between items-center">
      {/* right part */}
      <div>
        <CiMenuFries
          onClick={() => setCollapsed((prev) => !prev)}
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
      <div className="bg-primary text-primary-foreground p-4">hi </div>
    </div>
  );
};

export default Header;
