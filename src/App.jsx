// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    // On mobile, close drawer when a link is clicked
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <Router>
      <div className="app-shell">
        <Sidebar
          open={sidebarOpen}
          isMobile={isMobile}
          onLinkClick={handleNavClick}
        />

        {/* Overlay only on mobile when sidebar is open */}
        {isMobile && sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div
          className="main-area"
          style={{
            marginLeft: !isMobile
              ? sidebarOpen
                ? "270px"
                : "90px"
              : "0px",
            transition: "margin-left 0.28s ease",
          }}
        >
          <Header onToggleSidebar={handleToggleSidebar} />

          <div className="page-container fade-page">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
