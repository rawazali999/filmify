import React from "react";
import getTrendingMovies from "../api/getTrendingMovies";
import MovieCard from "../components/MovieCard";

export async function generateMetadata() {
  return {
    title: "Trending Movies",
    description: " movies that are trending now ",
  };
}

export default async function page() {
  const movies = await getTrendingMovies();
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-2xl tracking-widest text-center font-mono font-bold text-base-100 my-8">
          Trending Movies{" "}
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
