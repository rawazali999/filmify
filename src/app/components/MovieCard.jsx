import React from "react";
import Image from "next/image";
import Link from "next/link";
import getMovieById from "../api/getMovieById";

export default async function MovieCard({ movie }) {
  return (
    <Link href={""}>
      <div className="flex flex-col w-52 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-primary md:max-w-md ">
        <Image
          width={100}
          height={200}
          className="w-full rounded-t-lg object-cover h-auto"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="Movie poster"
        />
        <div className="flex flex-col justify-start p-4">
          <h5 className=" text-md font-medium text-neutral-800 dark:text-neutral-50 ">
            {movie.title}
          </h5>
        </div>
      </div>
    </Link>
  );
}
