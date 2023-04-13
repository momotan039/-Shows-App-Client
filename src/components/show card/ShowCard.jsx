import React from "react";
import { FaTrash } from "react-icons/fa"; // Import the trash icon from react-icons
import "./ShowCard.css"; // Import the CSS file for the component
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectShow } from "../../redux/actions/showActions";

const ShowCard = ({ show,name, vote, poster, isSkelton = false ,deleteMe }) => {
  const dispatch=useDispatch()
  const handleDelete = () => {
    deleteMe()
  };
  
  return (
    <div className="showcard-container">
      {isSkelton && <div className="showcard-skeleton"></div>}
      {
        deleteMe&&
        <button className="showcard-delete-button" onClick={handleDelete}>
        <FaTrash className="showcard-delete-icon" />
      </button>
      }
      <Link onClick={()=>dispatch(selectShow(show))} to={`/show`}>
      <img className="showcard-poster" src={poster} alt={name} />
      <div className="showcard-details">
        <h3 className="showcard-name">{name}</h3>
        <p className="showcard-vote">Vote: {vote}</p>
      </div>
      </Link>
    </div>
  );
};

export default ShowCard;
