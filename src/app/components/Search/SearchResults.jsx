import React from "react";
import { SearchCard } from "./SearchCard";

export default function SearchResults({ results }) {
  if (results) {
    return (
      <div
        id="scroll"
        className="flex flex-col  w-36 md:w-60 absolute rounded-md overflow-y-scroll h-96 z-20  top-10"
      >
        {results.map((movieOrTvShow) =>
          movieOrTvShow.media_type == "movie" ? (
            <SearchCard
              key={movieOrTvShow.id}
              type={"movie"}
              movieOrTvShow={movieOrTvShow}
            />
          ) : (
            <SearchCard
              key={movieOrTvShow.id}
              type={"TvShow"}
              movieOrTvShow={movieOrTvShow}
            />
          )
        )}
      </div>
    );
  }
}
