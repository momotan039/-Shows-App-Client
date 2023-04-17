import React from "react";
import RecommendedShows from "../../components/recommended shows/RecommendedShows";
import SearchBar from "../../components/search bar/SearchBar";

function Tv() {
  return (
    <div className="tv">
      <SearchBar mediaType='tv'/>
      <RecommendedShows mediaType='tv'/>
    </div>
  );
}

export default Tv;
