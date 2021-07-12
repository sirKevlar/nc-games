import React from "react";
import { Link, link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <div className="nav-link">HOME</div>
      </Link>
      <Link to="/reviews">
        <div className="nav-link">REVIEWS</div>
      </Link>
      <Link to="/users">
        <div className="nav-link">USERS</div>
      </Link>
      <Link to="/">
        <div className="nav-link">PROFILE</div>
      </Link>
    </div>
  );
};

export default Nav;
