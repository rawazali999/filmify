import React from "react";
import TvShowCard from "./TvShowCard";
import { getSimilarTvShows } from "../../api/getById";

export default async function SimilarTvShows({ id }) {
  const SimilarTvShows = await getSimilarTvShows(id);
  return (
    <div className="bg-inherit w-full">
      <h2 className="text-white text-xl font-bold px-4 ">Similar Tv Shows</h2>
      <div
        id="scroll"
        className="flex items-center p-4 overflow-x-auto rounded-md space-x-4 "
      >
        {SimilarTvShows.results.map((TvShow) => (
          <TvShowCard key={TvShow.id} TvShow={TvShow} />
        ))}
      </div>
    </div>
  );
}
