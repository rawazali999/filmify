import React from "react";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://garabuchi.files.wordpress.com/2018/02/movies_digital_art_collage_movie_posters_fan_art_1920x1080.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-7xl font-bold text-center">
            Welcome To FILMIFY
          </h1>
          <p className="mb-5">
            A place where you can find your favorite movies and tv shows
            information.
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="input h-10 w-full "
          />
        </div>
      </div>
    </div>
  );
}
