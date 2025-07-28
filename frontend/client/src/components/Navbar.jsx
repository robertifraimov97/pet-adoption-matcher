import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🐾 Pet Matcher</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Match Pets</Link></li>
        <li><Link to="/tips">Tips</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;