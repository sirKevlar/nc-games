import React from "react";
import { useEffect } from "react";
import { getReviews } from "../utils/api";

const Reviews = ({ reviews, setReviews }) => {
  useEffect(() => {
    getReviews();
  }, []);

  return <div>REVIEWS</div>;
};

export default Reviews;
