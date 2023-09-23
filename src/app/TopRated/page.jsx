import React from "react";
import Card from "../components/Movie/MovieCard";
import getTopRatedMovies, { getTopRatedTvShows } from "../api/getTopRated";
import TvShowCard from "../components/TvShow/TvShowCard";

export async function generateMetadata() {
  return {
    title: "Top Rated Movies and Tv Shows",
    description: " movies and tv shows that are top rated now ",
  };
}

export default async function page() {
  const movies = await getTopRatedMovies();
  const TvShows = await getTopRatedTvShows();
  return (
    <section id="top-rated">
      <h1 className="text-2xl tracking-widest text-center font-mono font-bold text-base-100 py-8 ">
        Top Rated Movies{" "}
      </h1>
      <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2">
        {movies.results.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>

      <h1 className="text-2xl tracking-widest text-center font-mono font-bold text-base-100 py-8 ">
        Top Rated Tv Shows{" "}
      </h1>
      <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2">
        {TvShows.results.map((TvShow) => (
          <TvShowCard key={TvShow.id} TvShow={TvShow} />
        ))}
      </div>
    </section>
  );
}
