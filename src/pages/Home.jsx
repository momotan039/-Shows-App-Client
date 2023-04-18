import React, { useEffect } from "react";
import { fetchUsers } from "../api/auth";
import SearchBar from "../components/search bar/SearchBar";
import TrendingShows from "../components/trending shows/TrendingShows";
import RecommendedShows from "../components/recommended shows/RecommendedShows";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className="slide-right">
      <div className="home">
        <SearchBar mediaType="movie" />
        <TrendingShows mediaType='movie' />
        <RecommendedShows mediaType="movie" />
      </div>
    </div>
  );
}

export default Home;
