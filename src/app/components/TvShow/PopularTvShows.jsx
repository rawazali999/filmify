import React from "react";
import { getPopularTvShows } from "../../api/getPopular";
import TvShowCard from "./TvShowCard";

export default async function PopularTvShows() {
  const TvShows = await getPopularTvShows();

  return (
    <section
      id="popular-tv-shows"
      className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2"
    >
      {TvShows.results.map((TvShow) => (
        <TvShowCard key={TvShow.id} TvShow={TvShow} />
      ))}
    </section>
  );
}
