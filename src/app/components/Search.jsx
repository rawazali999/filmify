"use client";

import React from "react";
import { useState } from "react";
import multiSearch from "../api/multiSearch";
import SearchResults from "./SearchResults";

export default function Search() {
  const [results, setResults] = useState({});
  const handleSearch = (e) => {
    const query = e.target.value;
    multiSearch(query).then((res) => {
      setResults(res);
    });
  };
  return (
    <div className="relative ">
      <input
        type="text"
        placeholder="Search..."
        className="input h-10 w-36 md:w-60 "
        onChange={handleSearch}
      />
      <SearchResults results={results.results} />
    </div>
  );
}
