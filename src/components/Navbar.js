import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <nav>
        <h1 className="header-title">Movie App</h1>
        <ul>
          <li className="li">
            <Link to="/">Discover</Link>
          </li>
          <li className="li">
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li className="li">
            <Link to="/top-rated">Top Rated</Link>
          </li>
          <li className="li">
            <Link to="/search">Search</Link>
          </li>
          <li className="li">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
