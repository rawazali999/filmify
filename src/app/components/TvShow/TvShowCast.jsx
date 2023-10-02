import React from "react";
import Image from "next/image";
import { getTvShowCast } from "../../lib/getById";

export async function TvShowCast({ id }) {
  const credits = await getTvShowCast(id);
  return (
    <div className="w-full">
      <h1 className="text-white text-xl font-bold my-4">Cast</h1>
      <div
        id="scroll"
        className="flex items-start  bg-white/20 overflow-x-auto rounded-md p-4"
      >
        {credits.cast.map((actor) => (
          <div
            className="w-auto px-2 mx-4 flex flex-col items-center"
            key={actor.id}
          >
            <Image
              src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
              alt={actor.name}
              width={150}
              height={150}
              className="w-20 h-20 rounded-full shadow-md "
            />
            <p className="text-white text-sm text-center w-20">{actor.name}</p>
            <hr className="my-1" />
            <p className="text-gray-300  text-xs text-center w-20">
              {actor.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
