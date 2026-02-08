import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ================= BRAND ================= */}
        <div className="footer-brand">
          <h3>Orthodox Church</h3>
          <p>
            A place of faith, hope, love, and spiritual growth.
          </p>
        </div>

        {/* ================= LINKS ================= */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/videos">Videos</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* ================= SOCIALS ================= */}
        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-links">
            {/* External links still use <a> */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Orthodox Church. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
