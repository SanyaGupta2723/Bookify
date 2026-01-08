import { useEffect, useState } from "react";

function NavBar() {
    const [theme, setTheme] = useState("dark");

  
  const [open, setOpen] = useState(false);
  // 🔥 page load pe theme set
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // 🔥 toggle handler
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark");
  };


  const menuItemClass =
    "relative px-3 py-2 cursor-pointer overflow-visible \
   after:content-[''] after:absolute after:left-0 after:-bottom-1 \
   after:h-[2px] after:w-0 after:bg-white \
   after:transition-all after:duration-300 hover:after:w-full ";

  return (
<nav className="sticky top-0 z-50
                bg-base-100/80 backdrop-blur
                px-6
                border-b border-white/30
                shadow-[0_1px_15px_rgba(255,255,255,0.35)]
                hover:border-white
                hover:shadow-[0_1px_25px_rgba(255,255,255,0.7)]
                transition-all duration-300">

      <div className="flex items-center h-16">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <button
            className="lg:hidden btn btn-ghost hover:bg-white/10"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <span className="text-xl font-bold whitespace-nowrap">
            Bookify 📚
          </span>
        </div>

        {/* CENTER: MENU */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal gap-6 whitespace-nowrap">
            <li><a  href = "/" className={menuItemClass}>Home</a></li>
            <li><a href = "/Fiction" className={menuItemClass}>Fiction</a></li>
            <li><a className={menuItemClass}>Non-Fiction</a></li>
            <li><a className={menuItemClass}>Contact</a></li>
          </ul>
        </div>

        {/* RIGHT: SEARCH + THEME + LOGIN */}
        <div className="hidden lg:flex items-center ml-auto flex-nowrap gap-6">

          {/* SEARCH (white border) */}
          <div classname= "hidden md: block" >
            <label className="input flex items-center gap-2 w-56 border border-white/70 bg-transparent transition-all duration-200 hover:border-white">
            <svg
              className="h-[1em] opacity-70 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              className="grow bg-transparent focus:outline-none text-white placeholder-white/70"
              placeholder="Search books"
            />
            <kbd className="kbd kbd-sm border border-white/60 text-white">⌘</kbd>
            <kbd className="kbd kbd-sm border border-white/60 text-white">K</kbd>
          </label>
          </div>

          {/* THEME TOGGLE (white edge) */}
          <div className="border border-white/70 rounded-full px-3 py-1 hover:border-white transition">

            <label className="toggle text-white">
              <input
                type="checkbox"
                value="synthwave"
                className="theme-controller"
              />

              {/* Sun */}
              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                 

              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                </g>
              </svg>

              {/* Moon */}
              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                  
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>

          {/* LOGIN (white outline button) */}
          <button className="btn bg-transparent rounded-full px-4 py-2 text-white border border-white/70 hover:bg-white/10 hover:border-white transition whitespace-nowrap">
            Login 👥
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t">
          <ul className="menu menu-vertical p-4 gap-2">
            <li><a className={menuItemClass}>Home</a></li>
            <li><a className={menuItemClass}>Fiction</a></li>
            <li><a className={menuItemClass}>Non-Fiction</a></li>
            <li><a className={menuItemClass}>Contact</a></li>
            <li>
              <label className="input input-bordered flex items-center gap-2">
                <input type="search" className="grow" placeholder="Search" />
              </label>
            </li>
            <li>
              <button className="btn btn-primary rounded-full w-full">
                Login 👥
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
