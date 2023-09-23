import React from "react";
import Image from "next/image";
import Link from "next/link";

export const SearchCard = ({ type, movieOrTvShow }) => {
  return (
    <Link href={`/${type}/${movieOrTvShow.id}`} key={movieOrTvShow.id}>
      <div className="flex border bg-neutral">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movieOrTvShow.poster_path}`}
          alt={"movieOrTvShow poster"}
          width={50}
          height={20}
          className="object-cover m-2 w-14 h-15 rounded-md"
        />
        <div className="p-1 md:p-4 bg-inherit w-full">
          <h1 className="text-sm md:text-md text-white font-semibold">
            {movieOrTvShow.title && movieOrTvShow.title.length > 18
              ? `${movieOrTvShow.title.substring(0, 18)}...`
              : movieOrTvShow.title}
          </h1>
          <h2 className="text-xs mt-2 text-gray-100">
            {movieOrTvShow.release_date}
          </h2>
        </div>
      </div>
    </Link>
  );
};
