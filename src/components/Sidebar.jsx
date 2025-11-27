// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import "./Sidebar.css";

function Sidebar({ open, isMobile, onLinkClick }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const handleClick = () => {
    if (onLinkClick) onLinkClick();
  };

  return (
    <aside
      className={`sidebar-wrapper ${isMobile ? "mobile" : "desktop"} ${
        open ? "open" : "closed"
      }`}
    >
      {isMobile && open && (
        <button className="sidebar-close-btn" onClick={handleClick}>
          <i className="bx bx-x"></i>
        </button>
      )}

      <ul>
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/" className="nav-link" onClick={handleClick}>
            <i className="bx bxs-home"></i>
            <span>Home</span>
          </Link>
        </li>

        <li className={isActive("/about") ? "active" : ""}>
          <Link to="/about" className="nav-link" onClick={handleClick}>
            <i className="bx bxs-info-circle"></i>
            <span>About</span>
          </Link>
        </li>

        <li className={isActive("/blog") ? "active" : ""}>
          <Link to="/blog" className="nav-link" onClick={handleClick}>
            <i className="bx bxs-news"></i>
            <span>Blog</span>
          </Link>
        </li>

        <li className={isActive("/contact") ? "active" : ""}>
          <Link to="/contact" className="nav-link" onClick={handleClick}>
            <i className="bx bxs-contact"></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
