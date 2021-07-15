import React from "react";

const Sort = ({ sortBy, setSortBy, sortOrder, setSortOrder }) => {
  const sortOptions = ["posted", "comments", "votes"];
  const orderOptions = ["ascending", "descending"];
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SORT>>", sortBy, "ORDER>>", sortOrder);
  };

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
      <button className="sort-button">SORT ME</button>
    </form>
  );
};

export default Sort;
