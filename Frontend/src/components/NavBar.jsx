function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      
      {/* LEFT */}
      <div className="navbar-start">
        <span className="text-xl font-bold">Bookify 📚</span>
      </div>

      {/* CENTER */}
      <div className="navbar-center">
        <ul className="menu menu-horizontal gap-4">
          <li><a>Home</a></li>
          <li><a>Fiction</a></li>
          <li><a>Non-Fiction</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        <button className="btn btn-primary">Cart 🛒</button>
      </div>

    </div>
  );
}

export default NavBar;
