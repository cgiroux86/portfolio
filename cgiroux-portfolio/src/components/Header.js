import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import resume from "../images/new_resume.pdf";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  console.log("location", pathname);

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
        <Link
          className={pathname === "/skills" ? "active_style" : "mobile_link"}
          to="/skills"
        >
          <FontAwesomeIcon icon={faCommentDots} />
          <p className="mobile_type">About</p>
        </Link>
        <Link
          className={pathname === "/projects" ? "active_style" : "mobile_link"}
          to="/projects"
        >
          <FontAwesomeIcon icon={faFile} />
          <p className="mobile_type">Projects</p>
        </Link>
        <Link
          className={pathname === "/contact" ? "active_style" : "mobile_link"}
          to="/contact"
        >
          <FontAwesomeIcon icon={faPhone} />
          <p className="mobile_type">Contact</p>
        </Link>
        <Link className="mobile_link" to="/">
          <FontAwesomeIcon icon={faHome} />
          <p className="mobile_type">Home</p>
        </Link>
      </div>
      <a className="cv" href={resume} download="cgiroux_cv">
        Download CV
      </a>
      <div className="header_connect">
        <a href="https://www.github.com/cgiroux86">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/cgiroux1017">
          <FontAwesomeIcon style={{ color: "navy" }} icon={faLinkedinIn} />
        </a>
        <a href="https://www.twitter.com/cgiroux1017">
          <FontAwesomeIcon style={{ color: "#00acee" }} icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}
