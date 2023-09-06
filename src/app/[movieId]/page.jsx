import React from "react";
import getMoviesById from "../api/getMovieById";
import Image from "next/image";

export async function generateMetadata({ params: { movieId } }) {
  const movie = await getMoviesById(movieId);
  return {
    title: movie.title,
    description: movie.overview,
  };
}

export default async function page({ params: { movieId } }) {
  const movie = await getMoviesById(movieId);

  return (
    <>
      <div
        className=" w-full h-full bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <div className="flex flex-col  sm:flex-row w-full backdrop-blur-lg h-full pt-4 ">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3 px-4 mb-8">
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              width={200}
              height={300}
              alt="Movie Poster"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="shadow w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 px-4">
            <a href={movie.homepage} className="text-2xl font-bold text-white ">
              {movie.title}
            </a>
            <p className="text-gray-200 mt-4 ">{movie.overview}</p>
            <p className="text-gray-200 mt-4">
              Release Date: {movie.release_date} <br />
              {/* Genre: {movie.genres.map((genre) => genre.name).join(", ")} <br /> */}
              Rating: {movie.vote_average.toFixed(1)} <br />
              <br />
              Budget: {movie.budget.toLocaleString()} $ <br />
              {/* add comma between each three digit to the revenue */}
              Revenue: {movie.revenue.toLocaleString()} $ <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
