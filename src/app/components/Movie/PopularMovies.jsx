import React from "react";
import MovieCard from "./MovieCard";
import getPopularMovies from "../../lib/getPopular";

export default async function PopularMovies() {
  const movies = await getPopularMovies();
  return (
    <section
      id="popular-movies"
      className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2"
    >
      {movies.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
