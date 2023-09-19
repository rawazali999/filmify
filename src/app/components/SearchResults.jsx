import React from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";
import SearchCard from "./SearchCard";

export default function SearchResults({ results }) {
  if (results) {
    return (
      <div
        id="scroll"
        className="flex flex-col  w-36 md:w-60 absolute rounded-md overflow-y-scroll h-96 z-20  top-10"
      >
        {results.map((movie) => (
          <SearchCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}
