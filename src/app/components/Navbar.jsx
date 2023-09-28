import React from "react";
import Link from "next/link";
import Search from "./Search/Search";
export default function Navbar() {
  const navigation = [
    { name: "Trending", href: "/Trending" },
    { name: "Now Playing", href: "/NowPlaying" },
    { name: "Top Rated", href: "/TopRated" },
  ];
  return (
    <nav className="w-full flex justify-between items-center sticky top-0 z-30 bg-primary p-2 md:px-6">
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
      <Search />
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-outline  text-white">
          Menu
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu  bg-base-100 rounded-box w-32"
        >
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="p-2 text-primary text-sm font-semibold rounded-md underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" hidden md:block">
        <ul className="flex">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className=" p-2 text-base-100 text-sm font-semibold rounded-md underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
