import React from "react";
import Filter from "./Filter";
import Profile from "./Profile";
import Sort from "./Sort";

const Sidenav = ({ setReviews, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="sidenav">
      <Profile />
      <Filter
        setReviews={setReviews}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Sort />
    </div>
  );
};

export default Sidenav;
