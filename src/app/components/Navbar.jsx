import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-info px-2 md:px-6">
      <div className="flex justify-center items-center py-2 md:p-2 text-lg md:text-3xl font-mono font-bold ">
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
        className="input h-10 w-36 md:w-60 "
      />
      <div>
        <Link
          href={"Trending"}
          className=" p-2 text-base-100 font-semibold rounded-md"
        >
          Trending
        </Link>
      </div>
    </nav>
  );
}
