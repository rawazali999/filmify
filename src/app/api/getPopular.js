export default async function getPopularMovies() {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // You can choose to handle the error here or propagate it
  }
}

export async function getPopularTvShows() {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // You can choose to handle the error here or propagate it
  }
}
