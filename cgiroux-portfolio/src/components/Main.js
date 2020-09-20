import React, { useEffect, useState } from "react";
import Profile from "../images/profile_header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPhone,
  faFile,
  faWrench,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import MobileMain from "./MobileMain";

export default function Main() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    gsap.from(".img_animation", {
      opacity: 0,
      rotationY: 180,
      duration: 1,
    });
  }, []);

  return (
    <div
      className="img_animation"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
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
            <Link
              style={{ margin: "0", color: "white", textDecoration: "none" }}
              to="/contact"
            >
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <p style={{ margin: "1%", textDecoration: "none" }}>Contact</p>
            </Link>
            <Link>
              <FontAwesomeIcon className="icon" icon={faDesktop} />
              <p style={{ margin: "0", color: "white" }}>Projects</p>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <FontAwesomeIcon className="icon" icon={faWrench} />
              <p style={{ margin: "0" }}>Skills</p>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <FontAwesomeIcon className="icon" icon={faCommentDots} />
              <p style={{ margin: "0" }}>About</p>
            </Link>
          </div>
        </div>
        <div className="hello">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi! I'm Chris Giroux.")
                .typeString(" A passionate Full Stack Developer from Maryland.")
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
      <div className="resume_main">Download CV</div>
    </div>
  );
}
