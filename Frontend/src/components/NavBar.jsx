import { useEffect, useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

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

  // 🔹 improved menu item underline
  const menuItemClass =
  "relative px-3 py-2 font-medium text-base-content \
   transition-colors duration-300 \
   hover:text-primary \
   after:absolute after:left-1/2 after:-bottom-1 \
   after:h-[3px] after:w-0 after:bg-primary \
   after:rounded-full after:transition-all after:duration-300 \
   hover:after:w-full hover:after:left-0";


  return (
   <nav
  className="
  sticky top-0 z-50
  bg-base-100
  px-6
  border-b-2 border-primary/30
  shadow-[0_4px_20px_rgba(99,102,241,0.15)]
  transition-all"
>

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
            <li><a href="/" className={menuItemClass}>Home</a></li>
            <li><a href="/Fiction" className={menuItemClass}>Fiction</a></li>
            <li><a className={menuItemClass}>Non-Fiction</a></li>
            <li><a className={menuItemClass}>Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center ml-auto gap-4">

          {/* SEARCH */}
          <div className="hidden md:block">
           <label
  className="
  input flex items-center gap-2 w-56
  bg-transparent
  border-2 border-base-300
  focus-within:border-primary
  focus-within:shadow-[0_0_0_3px_rgba(99,102,241,0.2)]
  transition"
>


              <input
                type="search"
                className="grow"
                placeholder="Search books"
              />
              <kbd className="kbd kbd-sm">⌘</kbd>
              <kbd className="kbd kbd-sm">K</kbd>
            </label>
          </div>

          {/* THEME TOGGLE */}
          <div
  className="
  rounded-full px-3 py-1
  border-2 border-primary/40
  bg-transparent
  hover:bg-primary/10
  transition"
>

            <label className="toggle">
              <input
                type="checkbox"
                checked={theme === "softlight"}
                onChange={toggleTheme}
              />

              {/* Sun */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
              </svg>

              {/* Moon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </label>
          </div>

         <button
  className="
  btn btn-sm rounded-full px-6
  bg-transparent
  text-primary
  border-2 border-primary
  hover:bg-primary hover:text-white
  hover:shadow-[0_6px_20px_rgba(99,102,241,0.35)]
  active:scale-95
  transition-all duration-300"
>
  Login 👥
</button>


        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-base-300">
          <ul className="menu menu-vertical p-4 gap-2">
            <li><a className={menuItemClass}>Home</a></li>
            <li><a className={menuItemClass}>Fiction</a></li>
            <li><a className={menuItemClass}>Non-Fiction</a></li>
            <li><a className={menuItemClass}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
