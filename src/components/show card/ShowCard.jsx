import React from "react";
import "./ShowCard.css"; // Import the CSS file for the component

const ShowCard = ({ name, vote, poster, isSkelton = false }) => {
  return (
    <div className="showcard-container">
      {isSkelton && <div className="showcard-skeleton"></div>}
      <img className="showcard-poster" src={poster} alt={name} />
      <div className="showcard-details">
        <h3 className="showcard-name">{name}</h3>
        <p className="showcard-vote">Vote: {vote}</p>
      </div>
    </div>
  );
};

export default ShowCard;
