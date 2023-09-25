import React from "react";
import Image from "next/image";
import { getMovieCast } from "../../api/getById";

export default async function MovieCast({ id }) {
  const credits = await getMovieCast(id);
  return (
    <div className="w-full">
      <h1 className="text-white text-xl font-bold my-4">Cast</h1>
      <div
        id="scroll"
        className="flex items-center overflow-x-auto shadow-inner p-4  space-x-10"
      >
        {credits.cast.map((actor) => (
          <div width={50} height={50} key={actor.id}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
              alt={actor.name}
              width={100}
              height={100}
              className="w-16 h-16 rounded-full shadow-md "
            />
            <p className="text-white text-sm text-center w-16">{actor.name}</p>
            <hr className="my-1" />
            <p className="text-gray-300  text-xs text-center w-16">
              {actor.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
