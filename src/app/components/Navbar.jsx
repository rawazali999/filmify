import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-primary p-2 md:px-6">
      <Link
        href={"/"}
        className="flex justify-center items-center text-white py-2 md:p-2 text-lg md:text-3xl font-sans font-semibold tracking-wider "
      >
        {/* <Image
          src="/images/movie-logo.png"
          width={50}
          height={50}
          alt="Picture of the author"
        /> */}
        Filmify
      </Link>

      <input
        type="text"
        placeholder="Search..."
        className="input h-10 w-36 md:w-60 "
      />
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-outline text-white">
          Menu
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu  bg-base-100 rounded-box w-32"
        >
          <li>
            <Link
              href={"Trending"}
              className=" p-2 text-primary font-semibold rounded-md underline"
            >
              Trending
            </Link>
          </li>
          <li>
            <Link
              href={"NowPlaying"}
              className=" p-2 text-primary font-semibold rounded-md underline"
            >
              Now Playing
            </Link>
          </li>
        </ul>
      </div>
      <div className=" hidden md:block">
        <Link
          href={"Trending"}
          className=" p-2 text-base-100 font-semibold rounded-md underline"
        >
          Trending
        </Link>
        <Link
          href={"NowPlaying"}
          className=" p-2 text-base-100 font-semibold rounded-md underline"
        >
          Now Playing
        </Link>
      </div>
    </nav>
  );
}
