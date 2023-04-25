import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Show.css"; // Import CSS file for styling
import { useNavigate } from "react-router-dom";
import { FaClock, FaEye, FaHeart } from "react-icons/fa";
import { saveUserToStorage } from "../../utils/localStorage";
import Casts from "../../components/casts/Casts";
import { findShowInUserShows, toggleViewed, toggleWatchLater,toggleFavorite} from "./helperShow";

function Show() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.show);
  const { user } = useSelector((s) => s.account);

  useEffect(()=>{
    if(!show)
    nav('/')
  },[])

  useEffect(() => {
    saveUserToStorage(user);
  }, [user]);

  const [favorite, setFavorite] = useState(findShowInUserShows(user,"favorite"));
  const [watchLater, setWatchLater] = useState(
    findShowInUserShows(user,"watchLater")
    );
    const [viewed, setViewed] = useState(findShowInUserShows(user,"viewed"));
    if (!show) {
      nav("/dashboard");
      return;
    }
    const { poster_path,overview,genres,first_air_date, vote_average, release_date, media_type } = show;
  

  return (
    <div className="container">
      <div className="scale-up">
      <div className="show-container">
        <div className="poster-container">
          <img
            className="poster"
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
            alt="Poster"
          />
        </div>
        <div className="details-container">
          <h1 className="title">{show.title||show.name}</h1>
          <div className="info-container">
            <p className="info">Vote Average: {vote_average}</p>
            <p className="info">Release Date: {release_date||first_air_date}</p>
            <p className="info">Media Type: {media_type}</p>
            <p className="info">Genres: {genres.map(genre => genre.name).join(", ")}</p>
            <button
              className={favorite ? "active" : ""}
              onClick={()=>toggleFavorite(favorite,setFavorite)}
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
              onClick={()=>toggleWatchLater(watchLater,setWatchLater)}
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
            <button className={viewed ? "active" : ""} onClick={()=>toggleViewed(viewed,setViewed)}>
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
            <p className="info">story: {overview}</p>
          </div>
        </div>
      </div>
      </div>
      <Casts mdeiaType={media_type} showId={show.id}/>
    </div>
  );
}

export default Show;
