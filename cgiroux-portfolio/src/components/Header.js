import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPhone,
  faHome,
  faFile,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Profile from "../images/profile_blur.jpg";
import portfolio from "../images/profile_header.png";
import { gsap } from "gsap";
import resume from "../images/Resume.pdf";

export default function Header() {
  useEffect(() => {
    gsap.from(".header_wrapper", {
      opacity: 0,
      x: 250,
      rotationY: 180,
      duration: 0.5,
    });
  }, []);
  return (
    <div className="header_wrapper">
      <div className="header_pic">
        <img className="mobile_pic" src={Profile}></img>
        <img className="main_pic" src={portfolio}></img>
      </div>
      <div className="icons_wrapper">
        <Link className="mobile_link" to="/skills">
          <FontAwesomeIcon icon={faCommentDots} />
          <p className="mobile_type">About</p>
        </Link>
        <Link className="mobile_link" to="/projects">
          <FontAwesomeIcon icon={faFile} />
          <p className="mobile_type">Projects</p>
        </Link>
        <Link className="mobile_link" to="/contact">
          <FontAwesomeIcon icon={faPhone} />
          <p className="mobile_type">Contact</p>
        </Link>
        <Link className="mobile_link" to="/">
          <FontAwesomeIcon icon={faHome} />
          <p className="mobile_type">Home</p>
        </Link>
      </div>
      <a className="cv" href={resume} download="resume">
        Download CV
      </a>
      <div className="header_connect">
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon style={{ color: "navy" }} icon={faLinkedinIn} />
        <FontAwesomeIcon style={{ color: "#00acee" }} icon={faTwitter} />
      </div>
    </div>
    // </div>
  );
}
