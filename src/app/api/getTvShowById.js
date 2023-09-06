export default async function getTvShowById(id) {
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
