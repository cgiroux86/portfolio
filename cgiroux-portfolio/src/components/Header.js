import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
import Profile from "../images/profile.png";

export default function Header() {
  return (
    <div className="header_wrapper">
      <div className="header_pic">
        <img src={Profile}></img>
      </div>
      <div className="icons_wrapper">
        <Link to="/contact">
          <FontAwesomeIcon className="icon" icon={faPhone} />
          <p>Contact</p>
        </Link>
        <Link to="/projects">
          <FontAwesomeIcon className="icon" icon={faDesktop} />
          <p>Projects</p>
        </Link>
        <div>
          <FontAwesomeIcon className="icon" icon={faFile} />
          <p>Resume</p>
        </div>
      </div>
    </div>
  );
}
