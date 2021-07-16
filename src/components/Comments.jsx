import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import UpVote from "../customHooks/UpVote";
import { getCommentsByReviewId } from "../utils/api";

const Comments = ({ comments, setComments }) => {
  const id = useParams();
  useEffect(() => {
    getCommentsByReviewId(id).then((commentData) => {
      const { comments } = commentData;
      setComments(comments);
    });
  }, [setComments, id]);

  return (
    <section className="content">
      {comments.map((comment) => {
        return (
          <section key={comment.comment_id} className="card">
            <div className="comments">
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
            </div>
            <section className="votes-section">
              <h4 className="votes">VOTES: {comment.votes}</h4>
              <button onClick={UpVote}>UP VOTE</button>
            </section>
          </section>
        );
      })}
    </section>
  );
};

export default Comments;
