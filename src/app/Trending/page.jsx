import React from "react";
import getTrendingMovies, { getTrendingTvShows } from "../api/getTrending";
import TvShowCard from "../components/TvShow/TvShowCard";
import MovieCard from "../components/Movie/MovieCard";

export async function generateMetadata() {
  return {
    title: "Trending Movies",
    description: " movies that are trending now ",
  };
}

export default async function page() {
  const movies = await getTrendingMovies();
  const TvShows = await getTrendingTvShows();
  return (
    <section id="trending">
      <h1 className="text-2xl tracking-widest text-center font-mono font-bold text-base-100 py-8 ">
        Trending Movies{" "}
      </h1>
      <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2">
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h1 className="text-2xl tracking-widest text-center font-mono font-bold text-base-100 py-8 ">
        Trending Tv Shows{" "}
      </h1>
      <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2">
        {TvShows.results.map((TvShow) => (
          <TvShowCard key={TvShow.id} TvShow={TvShow} />
        ))}
      </div>
    </section>
  );
}
