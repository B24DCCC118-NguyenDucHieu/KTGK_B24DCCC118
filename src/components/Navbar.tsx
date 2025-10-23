import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo" onClick={() => navigate("/")}>
          Blog
        </h2>
        <NavLink to="/" end className="nav-link">
          Trang chủ
        </NavLink>
      </div>
      <div className="navbar-right">
        <button className="write-btn" onClick={() => navigate("/create")}>
          + Viết bài
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
