import React from "react";
import { FaTrash, FaHeart, FaClock, FaEye } from "react-icons/fa"; // Import React icons
import "./ShowCard.css"; // Import the CSS file for the component
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectShow } from "../../redux/actions/showActions";
import { scrollToTop, showScrollerApp } from "../../redux/actions/appAction";

const ShowCard = ({ show, name, vote, poster, isSkelton = false, deleteMe }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    deleteMe();
  };
  const onClickShow=()=>{
    dispatch(selectShow(show))
    dispatch(showScrollerApp())
    dispatch(scrollToTop())
  }

  return (
    <div className="showcard-container">
      {isSkelton && <div className="showcard-skeleton"></div>}
      {deleteMe && (
        <button className="showcard-delete-button" onClick={handleDelete}>
          <FaTrash className="showcard-delete-icon" />
        </button>
      )}
      <Link onClick={onClickShow} to={`/show`}>
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
