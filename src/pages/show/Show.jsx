import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Show.css"; // Import CSS file for styling
import { useNavigate } from "react-router-dom";
import { FaClock, FaEye, FaHeart } from "react-icons/fa";
import { appendShowToUserShows, removeShowFromUserShows } from "../../api/shows";
import { addFavoriteShow, removeFavoriteShow, setCurrentUser } from "../../redux/actions/accountActions";

function Show() {
  const nav = useNavigate();
  const dispatch=useDispatch()
  const { show } = useSelector((state) => state.show);
  const { user } = useSelector((s) => s.account);
  const findShowInUserShows=(list)=>{
    return user[list].find(f=>f.id===show.id)?true:false
  }
  const [favorite, setFavorite] = useState(findShowInUserShows('favorite'));
  const [watchLater, setWatchLater] = useState(findShowInUserShows('watchLater'));
  const [viewed, setViewed] = useState(findShowInUserShows('viewed'));
  if (!show) {
    nav("/dashboard");
    return;
  }
  const { poster_path, title, vote_average, release_date, media_type } = show;

  const toggleFavorite = async () => {
    debugger
    try {
      if (favorite)
    {
      await removeShowFromUserShows(show.id,'favorite');
      dispatch(removeFavoriteShow(show,user))
    }
    else{
      await appendShowToUserShows(show,'favorite')
      dispatch(addFavoriteShow(show,user))
    }
    setFavorite(!favorite);
    } catch (error) {
      alert(error+'')
    }
  };

  const toggleWatchLater = () => {
    setWatchLater(!watchLater);
  };

  const toggleViewed = () => {
    setViewed(!viewed);
  };

  return (
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
            onClick={() => toggleWatchLater("watch_later_shows")}
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
          <button
            className={viewed ? "active" : ""}
            onClick={() => toggleViewed("viewd_shows")}
          >
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
  );
}

export default Show;
