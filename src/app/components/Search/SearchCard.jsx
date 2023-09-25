import React from "react";
import Image from "next/image";
import Link from "next/link";

export function SearchCard({ type, movieOrTvShow }) {
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <Link href={`/${type}/${movieOrTvShow.id}`}>
      <div className="flex border bg-neutral">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movieOrTvShow.poster_path}`}
          alt={"movieOrTvShow poster"}
          width={50}
          height={20}
          className="object-cover m-2 w-14 h-15 rounded-md"
        />
        <div className="p-1 md:p-4 bg-inherit w-full">
          <h1 className="text-xs sm:text-sm md:text-md lg:text-lg text-white font-semibold">
            {truncate(movieOrTvShow.title || movieOrTvShow.name, 15)}
          </h1>

          <h2 className="text-xs mt-2 text-gray-100">
            {movieOrTvShow.release_date || movieOrTvShow.first_air_date }
          </h2>
        </div>
      </div>
    </Link>
  );
}
