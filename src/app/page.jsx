import Hero from "./components/Hero";
import "./globals.css";
import PopularMovies from "./components/PopularMovies";

export async function generateMetadata() {
  return {
    title: "FILMIFY",
    description:
      "A place where you can find your favorite movies and tv shows information.",
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <h1 className="text-3xl text-center font-mono font-bold text-info my-4 drop-shadow-lg">
        Most Popular Movies 2023
      </h1>
      <PopularMovies />
    </>
  );
}
