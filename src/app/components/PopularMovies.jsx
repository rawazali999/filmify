import React from "react";
import getPopularMovies from "../api/getPopularMovies";
import MovieCard from "../components/MovieCard";

export default async function PopularMovies() {
  const data = await getPopularMovies();

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2">
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
