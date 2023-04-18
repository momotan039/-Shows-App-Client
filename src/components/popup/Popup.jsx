import React, { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri'; // Import the close icon from React Icons library
import './Popup.css'; // Import CSS file for styling

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="close-button" onClick={handleClose}>
              <RiCloseFill className="close-icon" /> {/* Render the close icon */}
            </button>
            <div className="popup-content">
              {/* {children} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
