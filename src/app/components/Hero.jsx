import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://garabuchi.files.wordpress.com/2018/02/movies_digital_art_collage_movie_posters_fan_art_1920x1080.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-50 "></div>
      <div className="hero-content text-center text-neutral-content py-24">
        <div className="max-w-xl">
          <h1 className="mb-5 text-3xl md:text-7xl text-white font-bold text-center">
            Welcome To FILMIFY
          </h1>
          <p className="mb-5 text-lg text-slate-100">
            A place where you can find your favorite movies and tv shows
            information.
          </p>
        </div>
      </div>
    </section>
  );
}
