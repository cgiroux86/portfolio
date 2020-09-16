import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
import Profile from "../images/profile.jpg";

export default function Header() {
  return (
    <div>
      <div className="header_wrapper">
        <img className="header_pic" src={Profile}></img>
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
    </div>
  );
}
