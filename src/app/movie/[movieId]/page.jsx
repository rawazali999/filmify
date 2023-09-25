import React from "react";
import getMovieById from "../../api/getById";
import getPopularMovies from "../../api/getPopular";
import Image from "next/image";
import Cast from "../../components/Movie/MovieCast";
import NotFound from "../../not-found";
import { getMovieTrailer } from "../../api/getById";

export async function generateMetadata({ params: { movieId } }) {
  const movie = await getMovieById(movieId);
  if (!movie) {
    return {
      title: "Movie Not Found",
    };
  } else {
    return {
      title: movie.title,
      description: movie.overview,
      image: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
    };
  }
}

export default async function page({ params: { movieId } }) {
  const movie = await getMovieById(movieId);
  const videos = await getMovieTrailer(movieId);
  // make sure that the trailer is not empty and if it is empty then add a default trailer
  let trailer;
  if (videos.results.length === 0) {
    trailer = [{ key: "dQw4w9WgXcQ" }];
  } else {
    trailer = videos.results.filter((video) => video.type === "Trailer");
  }

  if (!movie) {
    return NotFound();
  }

  return (
    <>
      <section
        id="movie-page"
        className=" w-full h-full bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <div className="flex flex-col sm:flex-row w-full backdrop-blur-lg h-full pt-4 ">
          <div className="w-full sm:w-1/2 lg:1/3 px-4 mb-8">
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              width={200}
              height={300}
              alt="Movie Poster"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="shadow w-full sm:w-1/2 lg:w-2/3   px-4">
            <a href={movie.homepage} className="text-2xl font-bold text-white ">
              {movie.title || movie.name}
            </a>
            <p className="text-gray-200 mt-4 ">{movie.overview}</p>
            <p className="text-gray-200 mt-4">
              Release Date: {movie.release_date} <br />
              {/* Genre: {movie.genres.map((genre) => genre.name).join(", ")} <br /> */}
              Rating: {movie.vote_average.toFixed(1)} <br />
              <br />
              Budget: {movie.budget.toLocaleString()} $ <br />
              {/* add comma between each three digit to the revenue */}
              Revenue: {movie.revenue.toLocaleString()} $ <br />
            </p>
            <Cast id={movieId} />
            <iframe
              src={`https://www.youtube.com/embed/${
                trailer[0].key || trailer[1].key
              }`}
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

// next.js now make that the routes of the popular movies are generated at build time,
//  make them static not server side if this code enabled, but it will cause error of routes of movies
//  that come from search it wont recognize them them and that make server error

// export async function generateStaticParams() {
//   const movies = await getPopularMovies();
//   return movies.results.map((movie) => ({
//     movieId: movie.id.toString(),
//   }));
// }
