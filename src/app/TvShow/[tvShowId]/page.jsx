import React from "react";
import Image from "next/image";
import { getTvShowById } from "../../api/getById";

export async function generateMetadata({ params: { tvShowId } }) {
  const tvShow = await getTvShowById(tvShowId);
  return {
    title: tvShow.name,
    description: tvShow.overview,
  };
}

export default async function page({ params: { tvShowId } }) {
  const tvShow = await getTvShowById(tvShowId);
  return (
    <>
      {" "}
      <div
        className=" w-full h-full bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${tvShow.backdrop_path})`,
        }}
      >
        <div className="flex flex-col  sm:flex-row w-full backdrop-blur-lg h-full pt-4 ">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3 px-4 mb-8">
            <Image
              src={`https://image.tmdb.org/t/p/original/${tvShow.poster_path}`}
              width={200}
              height={300}
              alt="tvShow Poster"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="shadow w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 px-4 ">
            <a
              href={tvShow.homepage}
              className="text-2xl font-bold text-white "
            >
              {tvShow.title}
            </a>
            <p className="text-gray-200 mt-4 ">{tvShow.overview}</p>
            <p className="text-gray-200 mt-4">
              Release Date: {tvShow.release_date} <br />
              {/* Genre: {tvShow.genres.map((genre) => genre.name).join(", ")} <br /> */}
              <br />
              {/* add comma between each three digit to the revenue */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
