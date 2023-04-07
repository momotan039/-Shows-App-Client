import React from 'react';
import './Header.css'; // Import CSS file for styling
import { useSelector } from 'react-redux';

const Header = () => {
  const {user}=useSelector(state=>state.auth)
  return (
    <header className="headerContainer">
      <div className="logoContainer">
        <h1 className="logoText">Shows App</h1>
        {
        user&&<h1>user:{user.name}</h1>
        }
      </div>
    </header>
  );
};

export default Header;