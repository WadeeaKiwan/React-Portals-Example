import React from "react";
import logo from "../logo.svg";
import "./Popup.css";

import ReactDOM from "react-dom";

const Popup = () => {
  const content = (
    <div className='app-logo container-item'>
      <img src={logo} className='logo' alt='logo' />
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("portal"));
};

export default Popup;
