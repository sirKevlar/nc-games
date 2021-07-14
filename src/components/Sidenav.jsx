import React from "react";
import Filter from "./Filter";
import Profile from "./Profile";
import Sort from "./Sort";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <Profile />
      <Filter />
      <Sort />
    </div>
  );
};

export default Sidenav;
