import Hero from "./components/Hero";
import "./globals.css";
import PopularMovies from "./components/PopularMovies";
import PopularTvShows from "./components/PopularTvShows";

export async function generateMetadata() {
  return {
    title: "Filmify",
    description:
      "A place where you can find your favorite movies and tv shows information.",
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <h1 className="text-2xl tracking-widest text-center font-mono font-bold text-base-100 my-8 ">
        Most Popular Movies 2023
      </h1>
      <PopularMovies />
      <h1 className="text-2xl tracking-widest text-center font-mono font-bold text-base-100 my-8 ">
        Most Popular Tv Shows 2023
      </h1>
      <PopularTvShows />
    </>
  );
}
