import React from "react";
import MovieCard from "../components/MovieCard";
import getTopRatedMovies from "../api/getTopRatedMovies";

export async function generateMetadata() {
  return {
    title: "Now Playing in Theatre",
    description: "movies that are now playing in theatre",
  };
}

export default async function page() {
  const movies = await getTopRatedMovies();
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-2xl tracking-widest text-center font-mono font-bold text-base-100 my-8 ">
          {" "}
          Top Rated Movies{" "}
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
