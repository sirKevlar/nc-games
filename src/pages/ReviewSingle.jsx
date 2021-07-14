import React from "react";
import { useEffect, useState } from "react";
import { getReviewById } from "../utils/api";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";

const ReviewSingle = () => {
  const [review, setReview] = useState([]);
  const id = useParams();
  useEffect(() => {
    getReviewById(id).then((reviewData) => {
      const { review } = reviewData;
      setReview(review);
    });
  }, [setReview, id]);

  return (
    <div className="full-screen-scroll">
      <ul className="single-review-list">
        <section className="card">
          <div className="card-info">
            <section className="pic-plus-id">
              <h3 className="user-name">{review.owner}</h3>
              <img
                src={review.review_img_url}
                alt={review.title + "'s picture"}
                className="review-img"
              />
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
        <div id="review-body">{review.review_body}</div>
      </ul>
      <ul className="comments-list">
        <Comments />
      </ul>
    </div>
  );
};

export default ReviewSingle;
