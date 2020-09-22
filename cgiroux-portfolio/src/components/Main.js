import React, { useEffect, useState } from "react";
import Profile from "../images/profile_header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPhone,
  faHome,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import MobileMain from "./MobileMain";

export default function Main({ resume }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    gsap.from(".img_animation", {
      opacity: 0,
      rotationY: 180,
      duration: 1,
    });
  }, []);

  return (
    <div className="img_animation">
      <div style={{ width: "100%", height: "100%" }}>
        <div className="mobile" style={{ width: "100%", height: "100%" }}>
          <MobileMain />
        </div>
        <div className={loading ? "loading" : "img_wrapper"}>
          <img
            onLoad={() => setLoading(false)}
            className="profile_pic"
            src={Profile}
          ></img>
          <div className="main_icons_wrapper">
            <Link className="main_link" to="/contact">
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <p style={{ margin: "1%", textDecoration: "none" }}>Contact</p>
            </Link>
            <Link className="main_link" to="/projects">
              <FontAwesomeIcon className="icon" icon={faDesktop} />
              <p style={{ margin: "0", color: "white" }}>Projects</p>
            </Link>
            <Link className="main_link" to="/skills">
              <FontAwesomeIcon className="icon" icon={faCommentDots} />
              <p style={{ margin: "0" }}>About</p>
            </Link>
            <Link className="main_link" to="/">
              <FontAwesomeIcon className="icon" icon={faHome} />
              <p style={{ margin: "0" }}>Home</p>
            </Link>
          </div>
        </div>
        <div className="hello">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Hi! I'm Chris Giroux, A passionate Full Stack Developer from Maryland."
                )
                .typeString()
                .start();
            }}
          />
        </div>
        <div className="hello_text">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "I have an insatiable desire to learn something new everyday!"
                )
                .start();
            }}
          />
        </div>
      </div>
      <a className="resume_main" href={resume} download="cgiroux_cv">
        Download CV
      </a>
      <div className="main_connect">
        <a href="https://www.github.com/cgiroux86">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/cgiroux1017">
          <FontAwesomeIcon style={{ color: "navy" }} icon={faLinkedinIn} />
        </a>
        <a href="https://wwww.twitter.com/cgiroux1017">
          <FontAwesomeIcon style={{ color: "#00acee" }} icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}
