import React from "react";
import { useEffect, useState, useContext } from "react";
import { getReviewById, postComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Comments from "../components/Comments";

const ReviewSingle = () => {
  const { profileUser } = useContext(UserContext);
  const [review, setReview] = useState([]);
  const [newCommentBody, setNewCommentBody] = useState("");
  const id = useParams();
  useEffect(() => {
    getReviewById(id).then((reviewData) => {
      const { review } = reviewData;
      setReview(review);
    });
  }, [setReview, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      userName: profileUser,
      comment: newCommentBody,
    };
    postComment(id, newReview); //add .then log result
  };

  return (
    <div className="full-screen-scroll">
      <ul id="rev-single-list" className="single-review-list">
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
        <form onSubmit={handleSubmit} className="add-comments">
          <label>
            <textarea
              value={newCommentBody}
              className="comment-input"
              onChange={(event) => setNewCommentBody(event.target.value)}
            ></textarea>
          </label>
          <button>POST</button>
        </form>
        <div id="review-body">{review.review_body}</div>
      </ul>
      <ul className="comments-list">
        <Comments />
      </ul>
    </div>
  );
};

export default ReviewSingle;
