export default async function getMovieById(id) {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTUyOWE0NGFkMTU1ZDFhZDdjNjc5N2RlMWI3YmJhNiIsInN1YiI6IjY0ZTQwNWNlZTg5NGE2MDExZWY2MDVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vwmqtn8VGAWgyXeeCOQlVOWK1S-gewDlxloDtSZ_iyY",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getMovieCast(id) {
  const axios = require("axios");
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTUyOWE0NGFkMTU1ZDFhZDdjNjc5N2RlMWI3YmJhNiIsInN1YiI6IjY0ZTQwNWNlZTg5NGE2MDExZWY2MDVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vwmqtn8VGAWgyXeeCOQlVOWK1S-gewDlxloDtSZ_iyY",
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

export async function getMovieTrailer(id) {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTUyOWE0NGFkMTU1ZDFhZDdjNjc5N2RlMWI3YmJhNiIsInN1YiI6IjY0ZTQwNWNlZTg5NGE2MDExZWY2MDVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vwmqtn8VGAWgyXeeCOQlVOWK1S-gewDlxloDtSZ_iyY",
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

export async function getTvShowById(id) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTUyOWE0NGFkMTU1ZDFhZDdjNjc5N2RlMWI3YmJhNiIsInN1YiI6IjY0ZTQwNWNlZTg5NGE2MDExZWY2MDVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vwmqtn8VGAWgyXeeCOQlVOWK1S-gewDlxloDtSZ_iyY",
    },
  };
  const axios = require("axios");

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // You can choose to handle the error here or propagate it
  }
}
