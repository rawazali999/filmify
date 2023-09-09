import React from "react";
import getMovieCastById from "../api/getMovieCastById";
import Image from "next/image";

export default async function Cast({ id }) {
  const cast = await getMovieCastById(id);
  return (
    <div className="w-full">
      <h1 className="text-white text-2xl font-bold my-4">Cast</h1>
      <div className="flex   overflow-x-auto space-x-10">
        {cast.cast.map((actor) => (
          <div width={300} height={300} key={actor.id}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
              alt={actor.name}
              width={100}
              height={100}
              className="w-16 h-16 rounded-full shadow-md "
            />
            <p className="text-white w-full text-sm text-center">
              {actor.name}
            </p>
            <p className="text-gray-500 w-full text-xs text-center">
              {actor.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
