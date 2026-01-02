import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const ShadcnNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar-custom">
      {/* BRAND */}
      <div className="navbar-brand-custom">
        Guangzhou Weilant Trading
      </div>

      {/* HAMBURGER (mobile only) */}
      <button
        className="navbar-toggle-custom"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* LINKS */}
      <ul className={`nav-list-custom ${menuOpen ? "nav-list-open" : ""}`}>
        <li>
          <Link
            to="/"
            className={`nav-link-custom ${isActive("/") ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`nav-link-custom ${isActive("/about") ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/service"
            className={`nav-link-custom ${isActive("/service") ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav-link-custom ${isActive("/contact") ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* CTA */}
      <button className="navbar-btn-custom">Purchase Now</button>
    </nav>
  );
};

export default ShadcnNavbar;
