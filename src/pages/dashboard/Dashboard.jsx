import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavortieShows,
  getViewedShows,
  getWatchLaterShows,
} from "../../api/shows";
import ShowCard from "../../components/show card/ShowCard";
import Shows from "../../components/shows/Shows";
import UserInfoCard from "../../components/user info card/UserInfoCard";
import { hideLoader, showLoader } from "../../redux/actions/loaderActions";

const Dashboard = () => {
  const { user } = useSelector((state) => state.account);
  const { email, name } = user;
  const { lang, show_lang, genres } = user.preferences;
  const [favorite, setFavorite] = useState(null);
  const [viewed, setViewed] = useState(null);
  const [watchedLater, setWatchedLater] = useState(null);
  const dispatch = useDispatch();
  const getShowsSections = async () => {
    // dispatch(showLoader())
    const data1 = await getFavortieShows();
    const data2 = await getViewedShows();
    const data3 = await getWatchLaterShows();
    setTimeout(()=>{
      setFavorite(data1);
      setViewed(data2);
      setWatchedLater(data3);
    },2000)
    // dispatch(hideLoader())
  };
  useEffect(() => {
    getShowsSections();
  }, []);
  return (
      <div className="container">
        <div className="dashboard">
        <UserInfoCard />
        <Shows
          enableDelete={true}
          setShows={setFavorite}
          shows={favorite}
          apiRoute="favorite"
          title="Favorite Shows"
        />
        <Shows
          enableDelete={true}
          setShows={setViewed}
          shows={viewed}
          apiRoute="viewd"
          title="Viewed Shows"
        />
        <Shows
          enableDelete={true}
          setShows={setWatchedLater}
          shows={watchedLater}
          apiRoute="watch-later"
          title="Watched later Shows"
        />
      </div>
      </div>
  );
};

export default Dashboard;
