import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="flex flex-col w-40 sm:w-48 md:w-56 lg:w-60 rounded-lg bg-primary border-2 ">
        <Image
          width={100}
          height={200}
          className="w-full rounded-t-lg object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <div className="flex justify-between px-2 py-4 ">
          <h5 className="text-inherit break-normal font-medium text-xs sm:text-sm md:text-md text-neutral-800 dark:text-neutral-50 ">
            {movie.title && movie.title.length > 15
              ? movie.title.substr(0, 15 - 1) + "..."
              : movie.title}
          </h5>

          <div className="w-10 h-auto flex relative justify-center items-center">
            <div className="z-20 p-1 text-xs md:text-sm font-bold flex items-start text-primary justify-center ">
              {/* show only one digit after dot */}
              {movie.vote_average.toFixed(1)}
            </div>
            <FontAwesomeIcon
              icon={faStar}
              className="z-10 w-9 md:w-11 h-auto absolute text-white flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
