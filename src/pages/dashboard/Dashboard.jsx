import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getFavortieShows,
  getViewedShows,
  getWatchLaterShows,
} from "../../api/shows";
import ShowCard from "../../components/show card/ShowCard";
import Shows from "../../components/shows/Shows";
import UserInfoCard from "../../components/user info card/UserInfoCard";
import { showPopUp } from "../../redux/actions/appAction";
import { hideLoader, showLoader } from "../../redux/actions/loaderActions";
import { logout } from "../../redux/actions/_authActions";
import { showExpiredSessionDialog } from "../../utils/dialogs";

const Dashboard = () => {
  const [favorite, setFavorite] = useState(null);
  const [viewed, setViewed] = useState(null);
  const [watchedLater, setWatchedLater] = useState(null);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const getShowsSections = async () => {
    try {
      const data1 = await getFavortieShows();
      const data2 = await getViewedShows();
      const data3 = await getWatchLaterShows();
      setFavorite(data1);
      setViewed(data2);
      setWatchedLater(data3);
    } catch (error) {
      showExpiredSessionDialog(error)
    }
  };
  useEffect(() => {
    getShowsSections();
  }, []);
  const getUesrInfoCard = () => {
    if (
      favorite &&
      favorite.length === 0 &&
      viewed &&
      viewed.length === 0 &&
      watchedLater &&
      watchedLater.length === 0
    )
      return "center";
  };
  return (
    <div className="scale-up">
      <div className="container">
        <div className="dashboard">
          <UserInfoCard classs={getUesrInfoCard()} />
          <Shows
            enableDelete={true}
            setShows={setFavorite}
            shows={favorite}
            apiRoute="favorite"
            title="Favorite Shows"
            skeltons={4}
          />
          <Shows
            enableDelete={true}
            setShows={setViewed}
            shows={viewed}
            apiRoute="viewd"
            title="Viewed Shows"
            skeltons={4}
          />
          <Shows
            enableDelete={true}
            setShows={setWatchedLater}
            shows={watchedLater}
            apiRoute="watch-later"
            title="Watched later Shows"
            skeltons={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
