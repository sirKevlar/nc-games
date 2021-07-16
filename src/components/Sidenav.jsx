import React from "react";
import Filter from "./Filter";
import Profile from "./Profile";
import Sort from "./Sort";

const Sidenav = ({
  setReviews,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="sidenav">
      <Profile />
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Sort
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        setReviews={setReviews}
      />
    </div>
  );
};

export default Sidenav;
