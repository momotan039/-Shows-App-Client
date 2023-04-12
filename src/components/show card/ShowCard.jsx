import React from "react";
import { FaTrash } from "react-icons/fa"; // Import the trash icon from react-icons
import "./ShowCard.css"; // Import the CSS file for the component

const ShowCard = ({ name, vote, poster, isSkelton = false ,deleteMe }) => {
  const handleDelete = () => {
    deleteMe()
  };

  return (
    <div className="showcard-container">
      {isSkelton && <div className="showcard-skeleton"></div>}
      <button className="showcard-delete-button" onClick={handleDelete}>
        <FaTrash className="showcard-delete-icon" />
      </button>
      <img className="showcard-poster" src={poster} alt={name} />
      <div className="showcard-details">
        <h3 className="showcard-name">{name}</h3>
        <p className="showcard-vote">Vote: {vote}</p>
      </div>
    </div>
  );
};

export default ShowCard;
