import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { logout } from "../../http/api/auth/logout";

const Dashboard = () => {
  const navigate = useNavigate();
  const logoutStore = useAuthStore((state) => state.logout);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = async () => {
    try {
      await logout(user.token); // call backend
      logoutStore(); // update Zustand
      localStorage.removeItem("user"); // clear localStorage
      navigate("/login"); // redirect
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div>
      <div className="text-green-800 text-xl font-bold container m-auto">
        Dashboard
      </div>
      <button className="m-10 bg-blue-400 p-3 rounded" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
