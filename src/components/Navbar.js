import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">URL Shortener</Link>
      <div>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/shorten" className="nav-link">Shorten URL</Link>
        <Link to="/urls" className="nav-link">URL List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
