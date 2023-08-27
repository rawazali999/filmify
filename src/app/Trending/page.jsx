import React from "react";
import Navbar from "../components/Navbar";
import getTrendingMovies from "../api/getTrendingMovies";
import MovieCard from "../components/MovieCard";

export default async function page() {
  const movies = await getTrendingMovies();
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-semibold text-info">Trending Movies </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2">
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
