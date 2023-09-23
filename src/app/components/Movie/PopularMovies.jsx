import React from "react";
import Card from "./MovieCard";
import getPopularMovies from "../../api/getPopular";

export default async function PopularMovies() {
  const movies = await getPopularMovies();
  return (
    <section
      id="popular-movies"
      className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2"
    >
      {movies.results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
