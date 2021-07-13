import React from "react";
import { useEffect } from "react";
import { getReviews } from "../utils/api";

const Reviews = ({ reviews, setReviews }) => {
  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      const { reviews } = reviewsFromApi;
      setReviews(reviews);
    });
  }, [setReviews]);
  return (
    <div className="full-screen-scroll">
      <ul className="reviews-list">
        {reviews.map((review) => {
          console.log(review);
          return (
            <li key={review.review_id} className="review-card">
              <img
                src={review.review_img_url}
                alt={review.title + "'s picture"}
                className="review-img"
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
