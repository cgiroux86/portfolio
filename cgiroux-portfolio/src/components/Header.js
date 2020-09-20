import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
import Profile from "../images/dark_portfolio.png";
import portfolio from "../images/profile_header.png";

export default function Header() {
  return (
    <div className="header_wrapper">
      <div className="header_pic">
        <img className="mobile_pic" src={Profile}></img>
        <img className="main_pic" src={portfolio}></img>
      </div>
      <div className="icons_wrapper">
        <Link className="links_container" to="/contact">
          <FontAwesomeIcon className="icon" icon={faPhone} />
          <p>Contact</p>
        </Link>
        <Link className="links_container" to="/projects">
          <FontAwesomeIcon className="icon" icon={faDesktop} />
          <p>Projects</p>
        </Link>
        <div>
          <Link className="links_container" to="/resume">
            <FontAwesomeIcon className="icon" icon={faFile} />
            <p>Resume</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
