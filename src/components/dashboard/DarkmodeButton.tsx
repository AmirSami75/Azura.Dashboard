import useLocalStorage from "@/hooks/useLocalStorage";
import { useUIstore } from "@/store/ui-store";

const DarkmodeButton = () => {
  const theme = useUIstore((state) => state.theme);
  const toggleTheme = useUIstore((state) => state.toggleTheme);

  const handleDarkmode = () => {
    toggleTheme;
  };

  return (
    <button onClick={handleDarkmode}>
      {theme === "dark" ? "خاموش کن " : "روشن کن"}
    </button>
  );
};

export default DarkmodeButton;
