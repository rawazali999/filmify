import Link from "next/link";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import getPopularMovies from "./api/getPopularMovies";
import Hero from "./components/Hero";

export default async function Home() {
  const data = await getPopularMovies();
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <h2>Check out popular movies 2023 </h2>
        <div className="grid grid-cols-5 space-x-2 space-y-2 mx-4 ">
          {data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </>
  );
}
