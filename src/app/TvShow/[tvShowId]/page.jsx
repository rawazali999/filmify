import React from "react";
import Image from "next/image";
import {
  getTvShowById,
  getTvShowCast,
  getTvShowTrailer,
} from "../../api/getById";
import { TvShowCast } from "../../components/TvShow/TvShowCast";

export async function generateMetadata({ params: { tvShowId } }) {
  const tvShow = await getTvShowById(tvShowId);
  return {
    title: tvShow.name,
    description: tvShow.overview,
  };
}

export default async function page({ params: { tvShowId } }) {
  const tvShow = await getTvShowById(tvShowId);
  console.log(tvShow);
  const videos = await getTvShowTrailer(tvShowId);
  let trailer;
  if (videos.results.length === 0) {
    trailer = [{ key: "dQw4w9WgXcQ" }];
  } else {
    trailer = videos.results.filter((video) => video.type === "Trailer");
  }
  return (
    <>
      {" "}
      <section
        id="tvShow-page"
        className=" w-full h-full bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${tvShow.backdrop_path})`,
        }}
      >
        <div className="flex flex-col  sm:flex-row w-full backdrop-blur-lg h-full pt-4 ">
          <div className="w-full sm:w-1/2 md:w-1/3  px-4 mb-8">
            <Image
              src={`https://image.tmdb.org/t/p/original/${tvShow.poster_path}`}
              width={200}
              height={300}
              alt="tvShow Poster"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="shadow w-full sm:w-1/2 lg:w-2/3   px-4 ">
            <a
              href={tvShow.homepage}
              className="text-2xl font-bold text-white "
            >
              {tvShow.title || tvShow.name}
            </a>
            <p className="text-gray-200 mt-4 ">{tvShow.overview}</p>
            <p className="text-gray-200 mt-4">
              Rating : {tvShow.vote_average} <br />
              Number of seasons : {tvShow.number_of_seasons} <br />
              Number of episodes : {tvShow.number_of_episodes} <br />
              <br />
              First Air Date: {tvShow.first_air_date} <br />
              Last Air Date: {tvShow.last_air_date} <br />
              <br />
              Genre: {tvShow.genres.map((genre) => genre.name).join(", ")}{" "}
              <br />
              Status: {tvShow.status} <br />
              <br />
            </p>
            <TvShowCast id={tvShow.id} />
            <iframe
              src={`https://www.youtube.com/embed/${trailer[0].key}`}
              width="500"
              height="500"
              type="video/mp4"
              controls
              className="mx-auto w-full h-56 md:h-[500px] my-6 rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
