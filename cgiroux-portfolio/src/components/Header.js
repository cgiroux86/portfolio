import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
import Profile from "../images/profile.jpg";

export default function Header() {
  return (
    <div>
      <div className="img_wrapper">
        <img className="profile_pic" src={Profile}></img>
        <div className="icons_wrapper">
          <Link to="/contact">
            <FontAwesomeIcon className="icon" icon={faPhone} />
            <p>Contact</p>
          </Link>
          <div>
            <FontAwesomeIcon className="icon" icon={faDesktop} />
            <p>Projects</p>
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faFile} />
            <p>Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
}
