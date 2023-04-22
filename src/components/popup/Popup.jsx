import React, { useEffect, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri'; // Import the close icon from React Icons library
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HidePopUp } from '../../redux/actions/appAction';
import store from '../../redux/store';
import './Popup.css'; // Import CSS file for styling

const Popup = () => {
  const {popup}=useSelector(s=>s.app)
  const [isOpen, setIsOpen] = useState(false);
  const dispatch=useDispatch()
  useEffect(() => {
    setIsOpen(popup.isShow)
  })
  
  const handleClose = () => {
    store.dispatch(HidePopUp())
  };
  

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-container scale-up">
            <button className="popup-close-button" onClick={handleClose}>
              <RiCloseFill className="close-icon" /> 
            </button>
            <div className="popup-content">
              <h1 className='shows-title'>{popup.message}</h1>
              <Link onClick={()=>dispatch(HidePopUp())} className='button-ok' to='/'>GO To Home</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
