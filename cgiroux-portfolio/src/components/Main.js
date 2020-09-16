import React, { useEffect } from "react";
import Profile from "../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export default function Main() {
  useEffect(() => {
    gsap.from(".img_wrapper", { opacity: 0, x: -500, duration: 1 });
  }, []);
  return (
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
  );
}
