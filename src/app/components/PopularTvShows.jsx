import React from "react";
import getPopularTvShows from "../api/getPopularTvShows";
import TvShowCard from "./TvShowCard";

export default async function PopularTvShows() {
  const data = await getPopularTvShows();
  
  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2">
      {data.results.map((TvShow) => (
        <TvShowCard key={TvShow.id} TvShow={TvShow} />
      ))}
    </div>
  );
}
