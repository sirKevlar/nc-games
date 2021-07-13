import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link className="plain-link" to="/home">
        <div className="nav-link">HOME</div>
      </Link>
      <Link className="plain-link" to="/reviews">
        <div className="nav-link">REVIEWS</div>
      </Link>
      <Link className="plain-link" to="/users">
        <div className="nav-link">USERS</div>
      </Link>
      <Link className="plain-link" to="/">
        <div className="nav-link">PROFILE</div>
      </Link>
    </div>
  );
};

export default Nav;
