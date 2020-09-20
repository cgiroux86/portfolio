import React, { useEffect, useState } from "react";
import Profile from "../images/profile_header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import MobileMain from "./MobileMain";
import { colors } from "@material-ui/core";

export default function Main() {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   gsap.from(".img_animation", { opacity: 0, x: 200, duration: 2 });
  // }, []);

  useEffect(() => {
    console.log("component loaded");
  }, [loading]);

  //   useEffect(() => {
  //     gsap.from(".hello", { rotation: 360, x: 300, duration: 1, opacity: 0 });
  //     gsap.from(".learn", {
  //       rotation: 360,
  //       x: 300,
  //       y: -500,
  //       duration: 5,
  //       opacity: 0,
  //     });
  //   }, []);
  return (
    <div
      className="img_animation"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div>
        <div className="mobile">
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
              <FontAwesomeIcon className="icon" icon={faFile} />
              <p style={{ margin: "0" }}>Resume</p>
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
      {/* )} */}
    </div>
  );
}
