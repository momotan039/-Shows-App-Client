import React, { useEffect, useState } from "react";
import Shows from "../shows/Shows";
import { getTrendingShows } from "../../api/shows";
import { useDispatch } from "react-redux";
import { showPopUp } from "../../redux/actions/appAction";
import { showExpiredSessionDialog } from "../../utils/dialogs";
import { useNavigate } from "react-router-dom";

function TrendingShows({mediaType}) {
  const [shows, setShows] = useState(null);
  const navigate=useNavigate()
  const _getTrendingShows = async () => {
    try {
      const data = await getTrendingShows(mediaType);
        setShows(data.results);
    } catch (error) {
      showExpiredSessionDialog(error)
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
