import React from "react";
import getMoviesById from "../api/getMovieById";

export default async function page({ params: { id } }) {
  console.log(id);
  const data = await getMoviesById(id);
  console.log(data);
  return <div>hello</div>;
}
