import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://kpm-board-games.herokuapp.com/api",
});

export const getReviews = async () => {
  const reviewsObj = await gamesApi.get(`/reviews`);
  return reviewsObj.data;
};

export const getUsers = async () => {
  const usersObj = await gamesApi.get(`/users`);
  return usersObj.data;
};
