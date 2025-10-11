import { CiMenuFries } from "react-icons/ci";
import DarkmodeButton from "./DarkmodeButton";

type HeaderProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ collapsed, setCollapsed }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      {/* right part */}
      <div>
        <CiMenuFries
          onClick={() => setCollapsed((prev) => !prev)}
          className="text-2xl font-extrabold"
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
