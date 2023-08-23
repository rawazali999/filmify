import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-info  px-6">
      <div className="flex justify-center items-center p-2 text-3xl font-mono ">
        <Image
          src="/images/movie-logo.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        Filmify
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered  w-60 "
      />
      <input type="checkbox" className="toggle" checked />
    </nav>
  );
}
