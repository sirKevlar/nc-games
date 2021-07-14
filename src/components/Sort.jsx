import React from "react";

const Sort = () => {
  return (
    <form className="sort-section" action="">
      <h4>SORT BY:</h4>
      <div className="category-radio">
        <input
          className="radio"
          type="radio"
          id="posted"
          name="sort"
          value="posted"
        />
        <label htmlFor="posted">Posted</label>
      </div>
      <div className="category-radio">
        <input
          className="radio"
          type="radio"
          id="comments"
          name="sort"
          value="comments"
        />
        <label htmlFor="comments">Comments</label>
      </div>
      <div className="category-radio">
        <input
          className="radio"
          type="radio"
          id="votes"
          name="sort"
          value="votes"
        />
        <label htmlFor="votes">Votes</label>
      </div>
      <h4>ASC OR DESC:</h4>
      <div className="category-radio">
        <input
          className="radio"
          type="radio"
          id="asc"
          name="order"
          value="asc"
        />
        <label htmlFor="votes">Ascending</label>
      </div>
      <div className="category-radio">
        <input
          className="radio"
          type="radio"
          id="desc"
          name="order"
          value="desc"
        />
        <label htmlFor="votes">Descending</label>
      </div>
    </form>
  );
};

export default Sort;
