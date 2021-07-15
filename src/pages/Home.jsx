import React from "react";
import { useEffect, useState } from "react";
import { getRandomReview } from "../utils/api";
import Logo from "../components/Logo";

const Home = () => {
  const [randomReview, setRandomReview] = useState([]);
  useEffect(() => {
    getRandomReview().then((reviewData) => {
      const { review } = reviewData;
      setRandomReview(review);
    });
  }, [setRandomReview]);
  return (
    <div className="full-screen-scroll">
      <div className="logo">
        <Logo />
      </div>
      <div className="random-review">
        <h3>RANDOM REVIEW GENERATOR:</h3>
        <div className="card">
          <ul className="home-list">
            <section className="card">
              <div className="card-info">
                <section className="pic-plus-id">
                  <h3 className="user-name">{randomReview.owner}</h3>
                  <img
                    src={randomReview.review_img_url}
                    alt={randomReview.title + "'s picture"}
                    className="review-img"
                  />
                </section>
                <section className="card-details">
                  <h4>{randomReview.title}</h4>
                  <h4>CATEGORY: {randomReview.category}</h4>
                </section>
              </div>
              <section id="home-votes" className="votes-section">
                <h4>VOTES: {randomReview.votes}</h4>
                <button>UP VOTE</button>
              </section>
            </section>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
