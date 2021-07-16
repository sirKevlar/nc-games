import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://kpm-board-games.herokuapp.com/api",
});

export const getReviews = async () => {
  const reviewsObj = await gamesApi.get(`/reviews`);
  return reviewsObj.data;
};

export const getReviewById = async ({ review_id }) => {
  const reviewObj = await gamesApi.get(`/reviews/${review_id}`);
  return reviewObj.data;
};

export const getRandomReview = async () => {
  const randomReviewId = Math.ceil(Math.random() * 24);
  const reviewObj = await gamesApi.get(`/reviews/${randomReviewId}`);
  return reviewObj.data;
};

export const getReviewsByCategory = async (category) => {
  const reviewObj = await gamesApi.get(`/reviews?category=${category}`);
  return reviewObj.data;
};

export const getSortedReviews = async (sortBy, sortOrder) => {
  let sort = "";
  let order = "";

  sortOrder === "ascending" ? (order = "asc") : (order = "desc");

  if (sortBy === "votes") {
    sort = "votes";
  } else if (sortOrder === "comments") {
    sort = "comment_count";
  } else {
    sort = "created_at";
  }

  const reviewObj = await gamesApi.get(
    `/reviews?sort_by=${sort}&order=${order}`
  );
  return reviewObj.data;
};

export const getCommentsByReviewId = async ({ review_id }) => {
  const commentsObj = await gamesApi.get(`/reviews/${review_id}/comments`);
  return commentsObj.data;
};

export const postComment = async (review_id, newComment) => {
  console.log(review_id);
  const { data } = await gamesApi.post(
    `/reviews/${review_id.review_id}/comments`,
    newComment
  );
  return data;
};

export const getUsers = async () => {
  const usersObj = await gamesApi.get(`/users`);
  return usersObj.data;
};

export const getUserById = async ({ user_id }) => {
  const userObj = await gamesApi.get(`/users/${user_id}`);
  return userObj.data;
};

export const getCategories = async () => {
  const categoryObj = await gamesApi.get(`/categories`);
  return categoryObj.data;
};
