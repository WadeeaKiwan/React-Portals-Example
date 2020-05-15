import React from "react";
import logo from "../logo.svg";
import "./Popup.css";

const Popup = () => {
  return (
    <div className='app-logo container-item'>
      <img src={logo} className='logo' alt='logo' />
    </div>
  );
};

export default Popup;
