import React from 'react';
import { Link } from 'react-router-dom';
import "./popup.css";
import Generate from '../pages/Screen2/pages/Generate';
const Popup = ({ onClose }) => {
    return (
      <div className="popup">
        <div className="logo">
          <img alt="" src='./popuppic.png' />
        </div>
  
        <div className="welcome-back">Welcome Back!</div>
        <p>The decentralized web awaits</p>
        <input type="password" placeholder="Password" />
        <Link to="/generate" className="submit-button">
          Unlock
        </Link>
        <button className="close-button" onClick={onClose}>
          Forget?
        </button>
        <p>Need help?</p>
      </div>
    );
  };
  
  export default Popup;
  