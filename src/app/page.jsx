import Hero from "./components/Hero";
import "./globals.css";
import RootLayout from "./layout";
import PopularMovies from "./components/PopularMovies";
import Navbar from "./components/Navbar";

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
