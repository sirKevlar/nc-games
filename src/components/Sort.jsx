import React from "react";
import { useEffect } from "react";
import { getSortedReviews } from "../utils/api";

const Sort = ({ sortBy, setSortBy, sortOrder, setSortOrder, setReviews }) => {
  const sortOptions = ["posted", "comments", "votes"];
  const orderOptions = ["ascending", "descending"];
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SORT>>", sortBy, "ORDER>>", sortOrder);
  };

  useEffect(() => {
    getSortedReviews(sortBy, sortOrder).then((reviewsFromApi) => {
      const { reviews } = reviewsFromApi;
      setReviews(reviews);
    });
  }, [setReviews, sortBy, sortOrder]);

  return (
    <form className="sort-section" onSubmit={handleSubmit}>
      <h4>SORT BY:</h4>
      {sortOptions.map((option) => {
        return (
          <div key={option} className="category-radio">
            <input
              className="radio"
              type="radio"
              id={option}
              name="sort"
              value={option}
              onClick={(event) => {
                setSortBy(event.target.id);
              }}
            />
            <label htmlFor="posted">{option}</label>
          </div>
        );
      })}

      <h4>ASC OR DESC:</h4>
      {orderOptions.map((option) => {
        return (
          <div key={option} className="category-radio">
            <input
              className="radio"
              type="radio"
              id={option}
              name="order"
              value={option}
              onClick={(event) => {
                setSortOrder(event.target.id);
              }}
            />
            <label htmlFor="votes">{option}</label>
          </div>
        );
      })}
    </form>
  );
};

export default Sort;
