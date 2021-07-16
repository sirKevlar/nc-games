import React from "react";
import { useEffect } from "react";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

const Reviews = ({
  reviews,
  setReviews,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  sortOrder,
}) => {
  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      const { reviews } = reviewsFromApi;
      setReviews(reviews);
    });
  }, [setReviews]);

  let reviewsCopy = [];

  if (selectedCategory.length > 0) {
    reviewsCopy = reviews.filter(
      (review) => review.category === selectedCategory
    );
  } else {
    reviewsCopy = [...reviews];
  }

  return (
    <div className="full-screen-scroll">
      <div className="content">
        {reviewsCopy.map((review) => {
          return (
            <section className="reviews" key={review.review_id}>
              <Link className="no-styling" to={`/reviews/${review.review_id}`}>
                <section className="card">
                  <section className="card-info">
                    <section className="pic-plus-id">
                      <h3 className="user-name">{review.owner}</h3>
                      <img
                        src={review.review_img_url}
                        alt={review.title + "'s picture"}
                        className="review-img"
                      ></img>
                    </section>
                    <section className="card-details">
                      <h4>{review.title}</h4>
                      <h4>CATEGORY: {review.category}</h4>
                    </section>
                  </section>
                  <section className="votes-section">
                    <h4 className="votes">VOTES: {review.votes}</h4>
                    <button>UP VOTE</button>
                  </section>
                </section>
              </Link>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
