import React from "react";
import { useState, useEffect } from "react";
import { getCategories } from "../utils/api";

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  console.log(selectedCategory);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      const { categories } = categoriesFromApi;
      setCategories(categories);
      console.log("CATEGORIES>>>", categories);
    });
  }, [setCategories]);

  // const filterReviews = (category) => {
  //   useEffect(() => {
  //     getReviewsByCategory(category).then((reviewsFromApi) => {
  //       const { reviews } = reviewsFromApi;
  //       setReviews(reviews);
  //       console.log("REVIEWS>>>", reviews);
  //     });
  //   });
  // };

  return (
    <div>
      <ul>
        <form>
          {categories.map((category) => {
            return (
              <div key={category.slug} className="category-radio">
                <input
                  className="radio"
                  type="radio"
                  id={category.slug}
                  name="category"
                  value={category.slug}
                  onClick={(event) => {
                    setSelectedCategory(event.target.id);
                  }}
                />
                <label htmlFor={category.slug}>{category.slug}</label>
              </div>
            );
          })}
        </form>
      </ul>
    </div>
  );
};

export default Filter;
