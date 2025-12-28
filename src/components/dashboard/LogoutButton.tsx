import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
  const handleLogout = () => {
    // Clear user session data
    // localStorage.removeItem("userToken");
    // sessionStorage.removeItem("userSession");
  };

  // Redirect to login page
  //   window.location.href = "/login";

  return (
    <button onClick={handleLogout} className="">
      <CiLogout className="text-2xl font-extrabold" />
    </button>
  );
};

export default LogoutButton;
