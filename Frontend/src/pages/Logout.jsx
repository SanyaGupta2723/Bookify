import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // 🔐 1️⃣ Token remove
    localStorage.removeItem("token");

    // 2️⃣ Optional message
    alert("You have been logged out");

    // 3️⃣ Login page par redirect
    navigate("/");
  }, [navigate]);

  return null; // UI ki zarurat nahi
}

export default Logout;
