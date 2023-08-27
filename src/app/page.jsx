import Link from "next/link";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import getPopularMovies from "./api/getPopularMovies";
import Hero from "./components/Hero";
import "./globals.css";

export default async function Home() {
  const data = await getPopularMovies();
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <h1 className="text-3xl text-center font-mono font-bold text-info my-4 drop-shadow-lg">
          Most Popular Movies 2023
        </h1>
        <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-2">
          {data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </>
  );
}
