import React from "react";
import { useEffect } from "react";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

const Reviews = ({
  reviews,
  setReviews,
  selectedCategory,
  setSelectedCategory,
}) => {
  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      const { reviews } = reviewsFromApi;
      setReviews(reviews);
    });
  }, [setReviews]);

  useEffect(() => {
    setReviews((currentReviews) => {
      return currentReviews.filter(
        (review) => review.category === selectedCategory
      );
    });
  }, [selectedCategory, setReviews]);

  return (
    <div className="full-screen-scroll">
      <div className="contain-list">
        <ul id="rev-list" className="list">
          {reviews.map((review) => {
            return (
              <li key={review.review_id}>
                <Link
                  className="no-styling"
                  to={`/reviews/${review.review_id}`}
                >
                  <section id="review-card" className="card">
                    <div className="card-info">
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
                    </div>
                    <section className="votes-section">
                      <h4>VOTES: {review.votes}</h4>
                      <button>UP VOTE</button>
                    </section>
                  </section>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
