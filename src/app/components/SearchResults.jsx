import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SearchResults({ results }) {
  if (results) {
    return (
      <div
        id="scroll"
        className="flex flex-col  w-36 md:w-60 absolute rounded-md overflow-y-scroll h-96 z-20  top-10"
      >
        {results.map((movie) => (
          <Link href={`${movie.id}`} key={movie.id}>
            <div key={movie.id} className="flex border bg-neutral">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={"movie poster"}
                width={50}
                height={20}
                className="object-cover m-2 w-14 h-15 rounded-md"
              />
              <div className="p-1 md:p-4 bg-inherit w-full">
                <h1 className="text-sm md:text-md text-white font-semibold">
                  {movie.title && movie.title.length > 18
                    ? `${movie.title.substring(0, 18)}...`
                    : movie.title}
                </h1>
                <h2 className="text-xs mt-2 text-gray-100">
                  {movie.release_date}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
