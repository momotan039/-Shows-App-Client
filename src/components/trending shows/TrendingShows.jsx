import React, { useEffect, useState } from "react";
import Shows from "../shows/Shows";
import { getTrendingShows } from "../../api/shows";

function TrendingShows({mediaType}) {
  const [shows, setShows] = useState(null);
  const _getTrendingShows = async () => {
    try {
      const data = await getTrendingShows(mediaType);
        setShows(data.results);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  useEffect(() => {
    _getTrendingShows();
  }, []);
  return (
    <div className="container">
      <div className="trending">
        <Shows title="Trending Shows" shows={shows} skeltons={4} />
      </div>
    </div>
  );
}

export default TrendingShows;
