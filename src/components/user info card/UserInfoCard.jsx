import React from "react";
import { useSelector } from "react-redux";
import "./UserInfoCard.css";

const UserInfoCard = ({ classs }) => {
  const { user } = useSelector((state) => state.account);
  const { email, name } = user;
  const { lang, show_lang, genres } = user.preferences ?? {};
  
  return (
    <div className={classs}>
      <div>
      <h2 className="title">Welcome to Your Dashboard</h2>
      <div className="user-info-container">
        <div className="user-info-avatar">
          <img src='./images/avatar.gif' alt="Avatar" className="avatar-image" />
          <div className="avatar-username">{name}</div>
        </div>
        <div className="user-info-details">
          <div className="user-info-item">
            <span className="user-info-label">Email:</span> {email}
          </div>
          <div className="user-info-item">
            <span className="user-info-label">Language:</span> {lang}
          </div>
          <div className="user-info-item">
            <span className="user-info-label">Show Language:</span> {show_lang}
          </div>
          <div className="user-info-item">
            <span className="user-info-label">Genres:</span>
            <ul>
              {genres?.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div className="user-info-footer">Enjoy Your Experience!</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
