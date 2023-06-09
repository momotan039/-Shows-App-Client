import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCasts } from "../../api/shows";
import { hideLoader, showLoader } from "../../redux/actions/loaderActions";
import "./Casts.css"; // Import the CSS file for styles
import SkeltonCasts from "../skelton casts/SkeltonCasts";

const Casts = ({ mdeiaType,showId }) => {
    const [casts,setCasts]=useState(null)
    const dispatch=useDispatch()
    const _getCasts=async()=>{
        setTimeout(async () => {
          try {
            const data=await getCasts(mdeiaType,showId)
            setCasts(data)
        } catch (error) {
            alert(error+'')
        }
        }, 1500);
    }
    useEffect(()=>{
        _getCasts()
    },[])
  return (
    <div className="casts-container">
      <h2 className="shows-title">Casts</h2>
      {
        !casts&&<SkeltonCasts/>
      }
      {
        casts&&<ul className="casts-list">
        {casts.map(cast => (
          <li key={cast.id} className="cast-item">
            <div className="cast-img-container">
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                  alt={cast.name}
                  className="cast-img"
                />
              ) : (
                <div className="cast-img-placeholder">No Image</div>
              )}
            </div>
            <div className="cast-details">
              <h3 className="cast-name">{cast.name}</h3>
              <p className="cast-background">
                <strong>Job: </strong>
                {cast.known_for_department}
              </p>
            </div>
          </li>
        ))}
      </ul>
      }
    </div>
  );
};

export default Casts;
