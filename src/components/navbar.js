import React, { useState } from "react";
//import style from "./css/navbar.module.css";
//import { Link } from "react-router-dom";

function Nav() {
  const [modeText, setModeText] = useState("Dark Mode");

  const changeText = () => {
    let newText = "Light Mode";
    newText === "Light Mode"
      ? (newText = "Light Mode")
      : (newText = "Dark Mode");
    setModeText(newText);
  };

  return (
    <div className="head">
      <h2 className="heading">Where in the world ?</h2>

      <div className="switch" id="mode">
        <div>
          <span id="dark-mode-text">{modeText}</span>
          <div className="switcher" id="switcher" onClick={changeText}>
            <div className="inner-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
