import React from "react";
import getNowPlayingMovies from "../api/getNowPlaying";
import Card from "../components/Card";

export async function generateMetadata() {
  return {
    title: "Now Playing in Theatre",
    description: "movies that are now playing in theatre",
  };
}

export default async function page() {
  const movies = await getNowPlayingMovies();

  return (
    <section id="now-playing-in-theatre">
      <h1 className="text-2xl tracking-widest text-center font-mono font-bold text-base-100 py-8 ">
        Now Playing in Theatre{" "}
      </h1>

      <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2">
        {movies.results.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
