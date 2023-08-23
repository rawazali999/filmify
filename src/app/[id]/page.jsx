import React from "react";
import getMoviesById from "../api/getMovieById";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default async function page({ params: { id } }) {
  console.log(id);
  const movie = await getMoviesById(id);
  console.log(movie);
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              width={200}
              height={300}
              alt="Movie Poster"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 px-4">
            <h2 className="text-2xl font-semibold">{movie.title}</h2>
            <p className="text-gray-700 mt-4">
              {movie.overview}
            </p>
            <p className="text-gray-700 mt-4">
              Director: John Doe <br />
              Release Date: January 1, 2023 <br />
              Genre: Action, Adventure
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
