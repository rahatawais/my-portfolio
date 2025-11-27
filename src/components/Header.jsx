import "./Header.css";
import 'boxicons/css/boxicons.min.css';

function Header({ onToggleSidebar }) {
  return (
    <header className="app-header">
      <button className="header-toggle-btn" onClick={onToggleSidebar}>
        <i className='bx bx-menu'></i>
      </button>
      <h2 className="header-title">Portfolio</h2>
    </header>
  );
}

export default Header;
