import React from 'react';
import { useSelector } from 'react-redux';
import './Show.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

function Show() {
  const nav=useNavigate()
  const {show} = useSelector(state => state.show);
  if(!show)
{
  nav('/dashboard')
return
}
  const { poster_path, title, vote_average, release_date, media_type }=show
  return (
    <div className="show-container">
      <div className="poster-container">
        <img className="poster" src={'https://image.tmdb.org/t/p/w500'+poster_path} alt="Poster" />
      </div>
      <div className="details-container">
        <h1 className="title">{title}</h1>
        <div className="info-container">
          <p className="info">Vote Average: {vote_average}</p>
          <p className="info">Release Date: {release_date}</p>
          <p className="info">Media Type: {media_type}</p>
        </div>
      </div>
    </div>
  );
}

export default Show;
