// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="navbar-container">

//         <div className="navbar-logo">
//           <span>⛪</span>
//           <h1>Orthodox Church</h1>
//         </div>

//         <nav className="navbar-links">
//           <NavLink to="/" end>Home</NavLink>
//           <NavLink to="/videos">Videos</NavLink>
//           <NavLink to="/teachings">Teachings</NavLink>
//           <NavLink to="/schedule">Schedule</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//         </nav>

//       </div>
//     </header>
//   );
// }

// export default Navbar;


import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navigation";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">
          <span>⛪</span>
          <h1>Orthodox Church</h1>
        </div>

        <nav className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
