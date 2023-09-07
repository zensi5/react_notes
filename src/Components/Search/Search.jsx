import React from "react";
import "./Search.scss";
import { MdSearch } from "react-icons/md";

function Search() {
  return (
    <div className="search">
      <MdSearch className="searchIcon" size="1.3em" />
      <input type="text" placeholder="type to search..." />
    </div>
  );
}

export default Search;
