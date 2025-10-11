import useLocalStorage from "@/hooks/useLocalStorage";

const DarkmodeButton = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleDarkmode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    // console.log(theme);
  };

  return <button onClick={handleDarkmode}>darkmode</button>;
};

export default DarkmodeButton;
