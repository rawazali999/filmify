export default async function getTopRatedMovies() {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
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

export async function getTopRatedTvShows() {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
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
