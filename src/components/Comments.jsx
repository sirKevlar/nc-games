import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCommentsByReviewId } from "../utils/api";

const Comments = ({ comments, setComments }) => {
  // const [comments, setComments] = useState([]);
  const id = useParams();
  useEffect(() => {
    getCommentsByReviewId(id).then((commentData) => {
      const { comments } = commentData;
      setComments(comments);
    });
  }, [setComments, id]);

  return (
    <ul className="list">
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <section className="card">
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <section className="votes">
                <h4>VOTES: {comment.votes}</h4>
                <button>UP VOTE</button>
              </section>
            </section>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
