import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://kpm-board-games.herokuapp.com/api",
});

export const getReviews = async () => {
  const reviewObj = await gamesApi.get(`/reviews`);
  return reviewObj.data;
};
