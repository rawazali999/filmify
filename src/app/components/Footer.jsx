import React from "react";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="relative mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className=" lg:flex lg:items-end lg:justify-between">
          <div className="text-3xl text-base-100 tracking-wider font-semibold text-center">
            Filmify
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <Link
                href="/"
                className="text-base-100 transition hover:text-base-100/75"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="text-base-100 transition hover:text-base-100/75"
                href="/Trending"
              >
                Trending
              </Link>
            </li>

            <li>
              <Link
                className="text-base-100 transition hover:text-base-100/75"
                href="/NowPlaying"
              >
                Now Playing
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-base-100 lg:text-right">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
