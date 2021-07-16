import React from "react";
import { useEffect, useState, useContext } from "react";
import { getReviewById, postComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Comments from "../components/Comments";

const ReviewSingle = () => {
  const { profileUser } = useContext(UserContext);
  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);
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
      username: profileUser,
      body: newCommentBody,
    };
    postComment(id, newReview).then((newComment) => {
      setComments((currComments) => {
        const newComments = [newComment, ...currComments];
        return newComments;
      });
    });
  };

  return (
    <div className="full-screen-scroll">
      <div className="content">
        <section className="review-single">
          <section id="single-review-card" className="card">
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
              <h4 className="votes">VOTES: {review.votes}</h4>
              <button>UP VOTE</button>
            </section>
          </section>
          <div id="review-body">{review.review_body}</div>
          <form
            id="post-comment"
            onSubmit={handleSubmit}
            className="add-comments"
          >
            <label>
              <textarea
                value={newCommentBody}
                className="comment-input"
                onChange={(event) => setNewCommentBody(event.target.value)}
              ></textarea>
            </label>
            <button>POST</button>
          </form>
        </section>
      </div>
      <section className="comments-list">
        <Comments comments={comments} setComments={setComments} />
      </section>
    </div>
  );
};

export default ReviewSingle;
