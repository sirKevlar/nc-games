import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link className="nav-link" to="/home">
        <div>HOME</div>
      </Link>
      <Link className="nav-link" to="/reviews">
        <div>REVIEWS</div>
      </Link>
      <Link className="nav-link" to="/users">
        <div>USERS</div>
      </Link>
    </div>
  );
};

export default Nav;
