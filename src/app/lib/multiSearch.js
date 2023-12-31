export default async function multiSearch(query) {
  const axios = require("axios");
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
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
