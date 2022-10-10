// Navbar.js
import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none"
    };
  };
  return (
    <nav className="primary-nav">
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/products">Products</Link> */}
      {/* <Link to="/about">About</Link> */}
      <NavLink style={navLinkStyles} to="/">Home</NavLink>
      <NavLink style={navLinkStyles} to="/products">Products</NavLink>      
      <NavLink style={navLinkStyles} to="/users">Users</NavLink>
      <NavLink style={navLinkStyles} to="/about">About</NavLink>
    </nav>
  );
};
export default Navbar;