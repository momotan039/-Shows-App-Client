import React, { useState } from 'react';
import './Switch.css'; // Import the CSS file for styling

const Switch = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`switch ${isActive ? 'active' : ''}`} onClick={handleToggle}>
      <button className="switch-button"></button>
      <label className="switch-label">{isActive ? 'Option 2' : 'Option 1'}</label>
    </div>
  );
};

export default Switch;
