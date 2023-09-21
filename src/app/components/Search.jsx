"use client";

import React from "react";
import { useState } from "react";
import multiSearch from "../api/multiSearch";
import SearchResults from "./SearchResults";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
export default function Search() {
  const [results, setResults] = useState({});
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    multiSearch(value).then((res) => {
      setResults(res);
    });
  };
  const handleClear = () => {
    setValue("");
    setResults({});
  };
  return (
    <div className="relative ">
      <div className="relative flex justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          className="input h-10 w-36 md:w-60 rounded-xs "
          onChange={handleSearch}
          value={value}
        />
        <button
          className="absolute top-1 right-2 text-xl"
          onClick={handleClear}
        >
          <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#073966" }} />
        </button>
      </div>

      <SearchResults results={results.results} />
    </div>
  );
}
