import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MovieCard({ movie }) {
  return (
    <Link href={`${movie.id}`}>
      <div className="flex flex-col w-60 rounded-lg bg-info shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <Image
          width={100}
          height={200}
          className="w-full rounded-t-lg object-cover h-auto"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="Movie poster"
        />
        <div className="flex justify-between px-2 py-4 ">
          <h5 className="text-inherit break-normal font-medium text text-neutral-800 dark:text-neutral-50 ">
            {/* insure that the object and the title is received to avoid "TypeError: Cannot read properties of undefined (reading 'length')" */}
            {movie && movie.title && movie.title.length > 18
              ? `${movie.title.substring(0, 18)}...`
              : (movie && movie.title) || "No Title"}
          </h5>

          <div className="w-10 h-auto flex relative text-info justify-center items-center">
            <div className="z-20 text-sm font-bold flex items-start justify-center ">
              {/* show only one digit after dot */}
              {movie.vote_average.toFixed(1)}
            </div>
            <FontAwesomeIcon
              icon={faStar}
              className="z-10 w-10 h-10 absolute text-white flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}