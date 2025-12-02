import useLocalStorage from "@/hooks/useLocalStorage";
import { useUIstore } from "@/store/ui-store";

const DarkmodeButton = () => {
  const theme = useUIstore((state) => state.theme);
  const toggleTheme = useUIstore((state) => state.toggleTheme);

  const handleDarkmode = () => {
    toggleTheme();
  };

  return (
    <button
      className="w-15 h-8 rounded-full bg-background flex items-center transition duration-300 focus:outline-none shadow mx-4"
      onClick={handleDarkmode}
    >
      <div
        className={` w-10 h-10 relative rounded-full transition duration-300 transform  p-1 text-white ${
          theme === "dark"
            ? "bg-gray-700 -translate-x-full"
            : "translate-x-2 bg-yellow-500"
        } `}
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </div>
    </button>
  );
};

export default DarkmodeButton;
