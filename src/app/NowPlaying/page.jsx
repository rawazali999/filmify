import React from "react";
import getNowPlayingMovies from "../api/getNowPlayingMovies";
import MovieCard from "../components/MovieCard";
export async function generateMetadata() {
  return {
    title: "Now Playing in Theatre",
    description: "movies that are now playing in theatre",
  };
}
export default async function page() {
  const movies = await getNowPlayingMovies();

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-semibold text-info">
          {" "}
          Now Playing in Theatre{" "}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2">
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
