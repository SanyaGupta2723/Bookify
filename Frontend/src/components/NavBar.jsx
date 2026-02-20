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

  // 🔐 Load User
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser && savedUser !== "undefined") {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  // 🌗 Load Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "softlight" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  // Close dropdown outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-wrapper")) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItemClass =
    "relative px-3 py-2 font-medium transition hover:text-primary after:absolute after:left-1/2 after:-bottom-1 after:h-[3px] after:w-0 after:bg-primary after:rounded-full after:transition-all hover:after:w-full hover:after:left-0";

  return (
    <nav className="sticky top-0 z-50 bg-base-100 px-6 border-b border-primary/30 shadow-md">
      <div className="flex items-center h-16">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <button
            className="lg:hidden btn btn-ghost"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <span className="text-xl font-bold">
            KitaBify 📚
          </span>
        </div>

        {/* MENU */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal gap-6">
            <li><Link to="/" className={menuItemClass}>Home</Link></li>
            <li><Link to="/Fiction" className={menuItemClass}>Fiction</Link></li>
            <li><Link to="/Nonfiction" className={menuItemClass}>Non-Fiction</Link></li>
            <li><Link to="/About" className={menuItemClass}>About</Link></li>
            <li><Link to="/Contact" className={menuItemClass}>Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">

          {/* CART */}
          <Link to="/cart" className="relative btn btn-sm">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* WISHLIST */}
          <Link to="/wishlist" className="relative btn btn-sm">
            ❤️
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* THEME TOGGLE */}
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

          {/* AUTH */}
          {user ? (
            <div className="relative profile-wrapper">

              {/* Avatar + Name */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 btn btn-sm"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <span>Hi, {user.name}</span>
              </button>

              {/* Animated Dropdown */}
              <div
                className={`absolute right-0 mt-3 w-56 bg-base-200 rounded-xl shadow-2xl border border-primary/20 transition-all duration-200 origin-top ${
                  profileOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                }`}
              >
                <Link
                  to="/profile"
                  className="block px-4 py-3 hover:bg-primary/20 transition"
                >
                  👤 My Profile
                </Link>

                <Link
                  to="/orders"
                  className="block px-4 py-3 hover:bg-primary/20 transition"
                >
                  📦 My Orders
                </Link>

                <Link
                  to="/wishlist"
                  className="block px-4 py-3 hover:bg-primary/20 transition"
                >
                  ❤️ Wishlist
                </Link>

                <hr className="border-primary/20" />

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 hover:bg-red-500/20 text-red-400 transition"
                >
                  🚪 Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <button
                className="btn btn-sm rounded-full px-6 border-2 border-primary text-primary"
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