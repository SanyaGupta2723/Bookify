import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { CartContext } from "../context/CartContext";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // 🔐 USER STATE
  const [user, setUser] = useState(null);

  // 🛒 COUNTS
  const { cartCount, wishlistCount } = useContext(CartContext);

  // 🔐 AUTH CHECK (TOKEN + USER)
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

  // 🔹 MENU ITEM STYLE
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
            <div className="flex items-center gap-3 ">
              <span className="font-medium text-primary relative btn btn-sm hover-neon px-3">
                Hi, {user.name} 👋
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline btn-error relative  hover-neon px-3"
              >
                Logout
              </button>
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
