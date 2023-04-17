import React from "react";
import { useDispatch } from "react-redux";
import { removeShowFromUserShows } from "../../api/shows";
import {
  removeFavoriteShow,
  removeViewedShow,
  removeWatchLaterShow,
} from "../../redux/actions/accountActions";
import { hideLoader, showLoader } from "../../redux/actions/loaderActions";
import ShowCard from "../show card/ShowCard";
import SkeltonShows from "../skelton shows/SkeltonShows";
import "./Shows.css";

const Shows = ({ title, shows, apiRoute, enableDelete, setShows}) => {
  const dispatch = useDispatch();
  const deleteShow = async (id) => {
    return new Promise(async (res, rej) => {
      try {
        dispatch(showLoader());
        const data = await removeShowFromUserShows(id, apiRoute);
        alert(data.message);
        setTimeout(() => {
          setShows((shs) => shs.filter((f) => f.id !== id));
          switch (apiRoute) {
            case "favorite":
              dispatch(removeFavoriteShow(id));
              break;
            case "watch-later":
              dispatch(removeWatchLaterShow(id));
              break;
            case "viewd":
              dispatch(removeViewedShow(id));
              break;

            default:
              break;
          }
          dispatch(hideLoader());
          res();
        }, 1000);
      } catch (error) {
        console.log(error.response.data.message);
        rej();
      }
    });
  };
  if (!shows)
    return (
      <div className="shows-container">
        <div className="shows-grid">
          <SkeltonShows />
        </div>
      </div>
    );
  if (shows && shows.length > 0)
    return (
      <div className="shows-container">
        <div className="shows-title-container">
        <h2 className="shows-title">{title}</h2>
        </div>
        <div className="shows-grid">
          {shows.map((show) => (
            <ShowCard
              deleteMe={enableDelete ? () => deleteShow(show.id) : null}
              key={show._id || show.id}
              name={show.title || show.name}
              vote={show.vote_average}
              show={show}
              poster={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
            />
          ))}
        </div>
      </div>
    );
};

export default Shows;
