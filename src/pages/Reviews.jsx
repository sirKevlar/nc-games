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
          return (
            <li key={review.review_id}>
              <section className="review-card">
                <div className="card-info">
                  <section className="pic-plus-id">
                    <h3 className="user-name">{review.owner}</h3>
                    <img
                      src={review.review_img_url}
                      alt={review.title + "'s picture"}
                      className="review-img"
                    ></img>
                  </section>
                  <div className="card-details">
                    <h4>{review.title}</h4>
                    <h4>CATEGORY: {review.category}</h4>
                  </div>
                </div>
                <section className="votes-section">
                  <h4>VOTES: {review.votes}</h4>
                  <button>UP VOTE</button>
                </section>
              </section>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
