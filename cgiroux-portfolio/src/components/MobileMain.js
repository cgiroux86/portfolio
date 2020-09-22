import React from "react";
import { Avatar } from "@material-ui/core";
import portfolio from "../images/profile_header.png";
import Typewriter from "typewriter-effect";
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
import { Link } from "react-router-dom";

export default function MobileMain() {
  return (
    <div className="mob_container">
      <div className="mobile_card">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "85%",
            width: "85%",
            margin: "0 auto",
            justifyContent: "space-between",
          }}
        >
          <div className="main_icons_container">
            <Link className="mobile_icon" to="/skills">
              <FontAwesomeIcon
                className="new_mobile_icon"
                icon={faCommentDots}
              />
              <p className="mobile_text">About</p>
            </Link>
            <Link className="mobile_icon" to="/contact">
              <FontAwesomeIcon className="new_mobile_icon" icon={faPhone} />
              <p className="mobile_text">Contact</p>
            </Link>
            <Link className="mobile_icon" to="/projects">
              <FontAwesomeIcon className="new_mobile_icon" icon={faDesktop} />
              <p className="mobile_text">Portfolio</p>
            </Link>
            <Link className="mobile_icon" to="/">
              <FontAwesomeIcon className="new_mobile_icon" icon={faHome} />
              <p className="mobile_text">Home</p>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={{ fontSize: "2rem", position: "relative", bottom: "10%" }}
            >
              Chris Giroux
            </h2>
            <div
              style={{
                margin: "0 auto",
                display: "flex",
                width: "75%",
                height: "75%",
                position: "relative",
                bottom: "10%",
              }}
            >
              <img className="mobile_profile" src={portfolio}></img>
            </div>
            <h4 style={{ margin: "1.5% auto" }}>Full Stack Developer</h4>
          </div>
          <div
            style={{
              width: "95%",
              margin: "0 auto",
              fontSize: "1rem",
              textAlign: "center",
            }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString(
                    "Hi! I'm Chris Giroux, a passionate Full Stack Developer from Maryland. I have an insatiable desire to learn something new everyday!"
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
              bottom: "-6%",
              margin: "0 auto",
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon style={{ color: "navy" }} icon={faLinkedinIn} />
            <FontAwesomeIcon style={{ color: "#00acee" }} icon={faTwitter} />
          </div>
        </div>
      </div>

      <div className="resume">Download CV</div>
    </div>
  );
}
