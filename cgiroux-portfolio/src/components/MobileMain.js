import React from "react";
import { Avatar } from "@material-ui/core";
import portfolio from "../images/dark_portfolio.png";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
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
            height: "80%",
            width: "80%",
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
            <Avatar src={portfolio} style={{ height: "75px", width: "75px" }} />
            <h3>Full Stack Developer</h3>
          </div>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi! I'm Chris Giroux.")
                  .typeString(
                    " A passionate Full Stack Developer from Maryland. I have an insatiable desire to learn something new everyday!"
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
              top: "8%",
              margin: "0 auto",
              marginTop: "5%",
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon style={{ color: "navy" }} icon={faLinkedinIn} />
            <FontAwesomeIcon style={{ color: "#00acee" }} icon={faTwitter} />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "2%",
          left: "15%",
          width: "70%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          color: "white",
        }}
      >
        <Link className="mobile_link" to="/resume">
          <FontAwesomeIcon icon={faFile} />
          <p className="mobile_type">Resume</p>
        </Link>
        <Link className="mobile_link" to="/resume">
          <FontAwesomeIcon icon={faPhone} />
          <p className="mobile_type">Contact</p>
        </Link>
        <Link className="mobile_link" to="/resume">
          <FontAwesomeIcon icon={faDesktop} />
          <p className="mobile_type">Portfolio</p>
        </Link>
      </div>
    </div>
  );
}
