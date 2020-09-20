import React from "react";
import { Avatar } from "@material-ui/core";
import portfolio from "../images/profile_header.png";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPhone,
  faWrench,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function MobileMain() {
  return (
    <div className="mob_container">
      <div className="mobile_card">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "75%",
            width: "75%",
            margin: "0 auto",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Chris Giroux</h2>
            <div
              style={{
                margin: "0 auto",
                display: "flex",
                width: "50%",
                height: "50%",
                justifyContent: "center",
              }}
            >
              <img className="mobile_profile" src={portfolio}></img>
            </div>
            <h5 style={{ margin: "3% auto" }}>Full Stack Developer</h5>
          </div>
          <div
            style={{
              width: "80%",
              margin: "0 auto",
              fontSize: "0.8rem",
              textAlign: "center",
            }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString(
                    "Hi! I'm Chris Giroux. A passionate Full Stack Developer from Maryland. I have an insatiable desire to learn something new everyday!"
                  )
                  .start();
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-evenly",
              position: "relative",
              bottom: "-10%",
              margin: "0 auto",
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon style={{ color: "navy" }} icon={faLinkedinIn} />
            <FontAwesomeIcon style={{ color: "#00acee" }} icon={faTwitter} />
          </div>
        </div>
      </div>
      <div className="main_icons_container">
        <Link className="mobile_link" to="/resume">
          <FontAwesomeIcon icon={faCommentDots} />
          <p className="mobile_type">About</p>
        </Link>
        <Link className="mobile_link" to="/contact">
          <FontAwesomeIcon icon={faPhone} />
          <p className="mobile_type">Contact</p>
        </Link>
        <Link className="mobile_link" to="/projects">
          <FontAwesomeIcon icon={faDesktop} />
          <p className="mobile_type">Portfolio</p>
        </Link>
        <Link className="mobile_link" to="/skills">
          <FontAwesomeIcon icon={faWrench} />
          <p className="mobile_type">Skills</p>
        </Link>
      </div>
      <div className="resume">Download CV</div>
    </div>
  );
}
