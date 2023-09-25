import React from "react";
import { getMovieImages, getTvShowImages } from "../api/getById";
import Image from "next/image";

export default async function Images({ id, type }) {
  let images;
  if (type === "movie") {
    images = await getMovieImages(id);
  } else {
    images = await getTvShowImages(id);
  }

  return (
    <>
      <h1 className="text-white text-xl font-bold my-4">Images</h1>
      <div
        id="scroll"
        className="w-full h-96 grid grid-cols-2 overflow-scroll p-4 rounded-md shadow-inner"
      >
        {images.backdrops.map((image) => (
          <div key={image.id}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
              alt={image.title}
              width={350}
              height={350}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </>
  );
}
