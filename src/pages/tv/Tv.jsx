import React from "react";
import RecommendedShows from "../../components/recommended shows/RecommendedShows";
import SearchBar from "../../components/search bar/SearchBar";
import TrendingShows from "../../components/trending shows/TrendingShows";

function Tv() {
  return (
    <div className="slide-left">
      <div className="tv">
      <SearchBar mediaType='tv'/>
      <TrendingShows mediaType='tv'/>
      <RecommendedShows mediaType='tv'/>
    </div>
    </div>
  );
}

export default Tv;
