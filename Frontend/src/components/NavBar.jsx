import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { CartContext } from "../context/CartContext";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const { cartCount, wishlistCount } = useContext(CartContext);

  // 🔐 AUTH CHECK
  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser && savedUser !== "undefined") {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Invalid user data in localStorage");
        localStorage.removeItem("user");
      }
    }
  }, []);

  // 🌗 THEME LOAD
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "softlight");
      localStorage.setItem("theme", "softlight");
      setTheme("softlight");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  // 🚪 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  // 🔄 CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-menu")) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItemClass =
    "relative px-3 py-2 font-medium text-base-content transition-colors duration-300 hover:text-primary after:absolute after:left-1/2 after:-bottom-1 after:h-[3px] after:w-0 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:left-0";

  return (
    <nav className="relative sticky top-0 z-50 bg-base-100 px-6 border-b-2 border-primary/30 shadow-[0_4px_20px_rgba(99,102,241,0.15)]">
      <div className="flex items-center h-16">

        {/* LEFT */}
        <div className="flex items-center gap-2">
          <button
            className="lg:hidden btn btn-ghost"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <span className="text-xl font-bold whitespace-nowrap">
            KitaBify 📚
          </span>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal gap-6">
            <li><Link to="/" className={`${menuItemClass} hover-neon px-4 py-2`}>Home</Link></li>
            <li><Link to="/Fiction" className={`${menuItemClass} hover-neon px-4 py-2`}>Fiction</Link></li>
            <li><Link to="/Nonfiction" className={`${menuItemClass} hover-neon px-4 py-2`}>Non-Fiction</Link></li>
            <li><Link to="/About" className={`${menuItemClass} hover-neon px-4 py-2`}>About Us</Link></li>
            <li><Link to="/Contact" className={`${menuItemClass} hover-neon px-4 py-2`}>Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center ml-auto gap-4">

          {/* 🛒 CART */}
          <Link to="/cart" className="relative btn btn-sm hover-neon px-3">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* ❤️ WISHLIST */}
          <Link to="/wishlist" className="relative btn btn-sm hover-neon px-3">
            ❤️
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* 🌗 THEME */}
          <div className="toggle-neon rounded-full">
            <label className="toggle">
              <input
                type="checkbox"
                checked={theme === "softlight"}
                onChange={toggleTheme}
              />
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
              </svg>
              <svg viewBox="0 0 24 24">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </label>
          </div>

          {/* 🔐 AUTH UI */}
          {user ? (
            <div className="relative profile-menu">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="font-medium text-primary btn btn-sm hover-neon px-3"
              >
                Hi, {user.name} 👋
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-base-200 rounded-xl shadow-xl py-2 z-50 border border-primary/30">
                  
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-primary/20 transition"
                  >
                    👤 My Profile
                  </Link>

                  <Link
                    to="/orders"
                    className="block px-4 py-2 hover:bg-primary/20 transition"
                  >
                    📦 My Orders
                  </Link>

                  <Link
                    to="/wishlist"
                    className="block px-4 py-2 hover:bg-primary/20 transition"
                  >
                    ❤️ Wishlist
                  </Link>

                  <hr className="my-2 border-primary/20" />

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-500/20 text-red-400 transition"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                className="btn btn-sm rounded-full px-6 bg-transparent text-primary border-2 border-primary"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Login 👥
              </button>
              <Login />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
