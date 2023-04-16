import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Show.css"; // Import CSS file for styling
import { useNavigate } from "react-router-dom";
import { FaClock, FaEye, FaHeart } from "react-icons/fa";
import {
  appendShowToUserShows,
  removeShowFromUserShows,
} from "../../api/shows";
import {
  addFavoriteShow,
  addViewedShow,
  addWatchLaterShow,
  removeFavoriteShow,
  removeViewedShow,
  removeWatchLaterShow,
  setCurrentUser,
} from "../../redux/actions/accountActions";
import { saveUserToStorage } from "../../utils/localStorage";

function Show() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.show);
  const { user } = useSelector((s) => s.account);
  useEffect(() => {
    debugger;
    saveUserToStorage(user);
  }, [user]);

  const findShowInUserShows = (list) => {
    debugger;
    return user[list].find((f) => f.id === show.id) ? true : false;
  };
  const [favorite, setFavorite] = useState(findShowInUserShows("favorite"));
  const [watchLater, setWatchLater] = useState(
    findShowInUserShows("watchLater")
  );
  const [viewed, setViewed] = useState(findShowInUserShows("viewed"));
  if (!show) {
    nav("/dashboard");
    return;
  }
  const { poster_path, title, vote_average, release_date, media_type } = show;

  const toggle = async (state = {}, listApi, rmListShow, addListShow) => {
    try {
      if (state.value) {
        await removeShowFromUserShows(show.id, listApi);
        dispatch(rmListShow(show.id));
      } else {
        await appendShowToUserShows(show, listApi);
        dispatch(addListShow(show));
      }
      state.set(!state.value);
    } catch (error) {
      console.log(error);
    }
  };
  const toggleFavorite = async () => {
    toggle(
      { value: favorite, set: setFavorite },
      "favorite",
      removeFavoriteShow,
      addFavoriteShow
    );
  };
  const toggleWatchLater = async () => {
    toggle(
      { value: watchLater, set: setWatchLater },
      "watch-later",
      removeWatchLaterShow,
      addWatchLaterShow
    );
  };

  const toggleViewed = async () => {
    toggle(
      { value: viewed, set: setViewed },
      "viewd",
      removeViewedShow,
      addViewedShow
    );
  };

  return (
    <div className="center">
      <div className="show-container">
        <div className="poster-container">
          <img
            className="poster"
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
            alt="Poster"
          />
        </div>
        <div className="details-container">
          <h1 className="title">{title}</h1>
          <div className="info-container">
            <p className="info">Vote Average: {vote_average}</p>
            <p className="info">Release Date: {release_date}</p>
            <p className="info">Media Type: {media_type}</p>
            <button
              className={favorite ? "active" : ""}
              onClick={toggleFavorite}
            >
              {favorite ? (
                <>
                  <FaHeart />
                  Remove from Favorite
                </>
              ) : (
                <>
                  <FaHeart />
                  Add to Favorite
                </>
              )}
            </button>
            <button
              className={watchLater ? "active" : ""}
              onClick={toggleWatchLater}
            >
              {watchLater ? (
                <>
                  <FaClock />
                  Remove from Watch Later
                </>
              ) : (
                <>
                  <FaClock />
                  Add to Watched Later
                </>
              )}
            </button>
            <button className={viewed ? "active" : ""} onClick={toggleViewed}>
              {viewed ? (
                <>
                  <FaEye />
                  Remove from Viewed
                </>
              ) : (
                <>
                  <FaEye />
                  Add to Viewed
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
