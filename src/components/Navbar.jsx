import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useLanguage } from "../LanguageContext";

const ShadcnNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, setLanguage } = useLanguage();

  const isActive = (path) => location.pathname === path;

  const brandText =
    language === "en" ? "Guangzhou Weilant Trading" : "广州维朗贸易有限公司";

  const navLabels = {
    home: language === "en" ? "Home" : "首页",
    about: language === "en" ? "About" : "关于我们",
    service: language === "en" ? "Service" : "服务",
    contact: language === "en" ? "Contact" : "联系我们",
    cta: language === "en" ? "Purchase Now" : "立即采购",
  };

  const isZh = language === "zh";

  return (
    <nav className="navbar-custom">
      {/* BRAND */}
      <div className="navbar-brand-custom">{brandText}</div>

      {/* LINKS */}
      <ul className={`nav-list-custom ${menuOpen ? "nav-list-open" : ""}`}>
        <li>
          <Link
            to="/"
            className={`nav-link-custom ${isActive("/") ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {navLabels.home}
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`nav-link-custom ${isActive("/about") ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {navLabels.about}
          </Link>
        </li>
        <li>
          <Link
            to="/service"
            className={`nav-link-custom ${
              isActive("/service") ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {navLabels.service}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav-link-custom ${
              isActive("/contact") ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {navLabels.contact}
          </Link>
        </li>
      </ul>

      {/* CONTROLS (right side) */}
      <div className="navbar-controls">
        {/* LANGUAGE SWITCH */}
        <div className="navbar-lang-group">
          <button
            type="button"
            className={`navbar-lang-label ${!isZh ? "active" : ""}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>

          <button
            type="button"
            className={`navbar-lang-toggle ${isZh ? "is-zh" : ""}`}
            onClick={toggleLanguage}
            aria-label="Toggle language between English and Chinese"
            aria-pressed={isZh}
          >
            <span className="navbar-lang-toggle-knob" aria-hidden="true" />
          </button>

          <button
            type="button"
            className={`navbar-lang-label ${isZh ? "active" : ""}`}
            onClick={() => setLanguage("zh")}
          >
            中文
          </button>
        </div>

        {/* CTA */}
        <button className="navbar-btn-custom">{navLabels.cta}</button>

        {/* HAMBURGER (mobile only) */}
        <button
          className="navbar-toggle-custom"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default ShadcnNavbar;
