import React from 'react'
import { useSelector } from 'react-redux';
import "./UserInfoCard.css"; 

function UserInfoCard({classs}) {
    const { user } = useSelector((state) => state.account);
    const { email, name } = user;
    const { lang, show_lang, genres } = user.preferences;
  return (
    <div className={classs}>
    <div className={`user-info-container`}>
    <h2 className="user-info-title">Welcome to Your Dashboard</h2>
    <div className="user-info-item">
      <span className="user-info-label">Email:</span> {email}
    </div>
    <div className="user-info-item">
      <span className="user-info-label">Name:</span> {name}
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
        {genres.map((genre, index) => (
          <li key={index}>
            ID: {genre.id}, Name: {genre.name}
          </li>
        ))}
      </ul>
    </div>
    <div className="user-info-footer">Enjoy Your Experience!</div>
  </div>
    </div>
  )
}

export default UserInfoCard