import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://kpm-board-games.heroku.com/api",
});

export const getReviews = async () => {
  const reviewObj = await gamesApi.get("/reviews");
  console.log("called SADFASDFASDF");
  console.log(reviewObj);
};
