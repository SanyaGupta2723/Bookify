import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { CartContext } from "../context/CartContext";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // ✅ ONLY COUNTS FROM CONTEXT
  const { cartCount, wishlistCount } = useContext(CartContext);

  // 🔐 AUTH CHECK
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // 🌗 THEME LOAD
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "softlight" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // 🔹 MENU ITEM STYLE
  const menuItemClass =
    "relative px-3 py-2 font-medium text-base-content transition-colors duration-300 hover:text-primary after:absolute after:left-1/2 after:-bottom-1 after:h-[3px] after:w-0 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:left-0";

  return (
    <nav className="sticky top-0 z-50 bg-base-100 px-6 border-b-2 border-primary/30 shadow-[0_4px_20px_rgba(99,102,241,0.15)]">

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
            Bookify 📚
          </span>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal gap-6">
            <li><Link to="/" className={menuItemClass}>Home</Link></li>
            <li><Link to="/Fiction" className={menuItemClass}>Fiction</Link></li>
            <li><Link to="/Nonfiction" className={menuItemClass}>Non-Fiction</Link></li>
            <li><Link to="/Contact" className={menuItemClass}>Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center ml-auto gap-4">

          {/* 🛒 CART */}
          <Link to="/cart" className="relative btn btn-sm">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* ❤️ WISHLIST */}
          <Link to="/wishlist" className="relative btn btn-sm">
            ❤️
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* 🌗 THEME TOGGLE */}
          <div className="rounded-full px-3 py-1 border-2 border-primary/40 hover:bg-primary/10 transition">
            <label className="toggle">
              <input
                type="checkbox"
                checked={theme === "softlight"}
                onChange={toggleTheme}
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </label>
          </div>

          {/* 🔐 AUTH */}
          {!isLoggedIn ? (
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
          ) : (
            <Link
              to="/logout"
              className="btn btn-sm rounded-full px-6 bg-transparent text-error border-2 border-error"
            >
              Logout
            </Link>
          )}
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-base-300">
          <ul className="menu menu-vertical p-4 gap-2">
            <li><Link to="/" className={menuItemClass}>Home</Link></li>
            <li><Link to="/Fiction" className={menuItemClass}>Fiction</Link></li>
            <li><Link to="/Nonfiction" className={menuItemClass}>Non-Fiction</Link></li>
            <li><Link to="/Contact" className={menuItemClass}>Contact</Link></li>
            <li><Link to="/cart" className={menuItemClass}>Cart</Link></li>
            <li><Link to="/wishlist" className={menuItemClass}>Wishlist</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
