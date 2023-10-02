import React from "react";
import { getSimilarMovies } from "../../lib/getById";
import MovieCard from "./MovieCard";

export default async function SimilarMovies({ id }) {
  const similarMovies = await getSimilarMovies(id);
  return (
    <div className="bg-inherit w-full">
      <h2 className="text-white text-xl font-bold px-4">Similar Movies</h2>
      <div
        id="scroll"
        className="flex items-center p-4 overflow-x-auto rounded-md space-x-4 "
      >
        {similarMovies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
