import React, { useEffect } from "react";
import Profile from "../images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Main() {
  useEffect(() => {
    gsap.from(".img_wrapper", { opacity: 0, x: -500, duration: 1 });
  }, []);

  useEffect(() => {
    gsap.from(".hello", { rotation: 360, x: 300, duration: 1, opacity: 0 });
    gsap.from(".learn", {
      rotation: 360,
      x: 300,
      y: -500,
      duration: 5,
      opacity: 0,
    });
  }, []);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div className="img_wrapper">
        <img className="profile_pic" src={Profile}></img>
        <div className="main_icons_wrapper">
          <Link style={{ margin: "0" }} to="/contact">
            <FontAwesomeIcon className="icon" icon={faPhone} />
            <p style={{ margin: "0" }}>Contact</p>
          </Link>
          <Link>
            <FontAwesomeIcon className="icon" icon={faDesktop} />
            <p style={{ margin: "0" }}>Projects</p>
          </Link>
          <Link>
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
              //   .callFunction(() => {
              //     console.log("String typed out!");
              //   })
              //   .pauseFor(1500)
              //   .deleteAll()
              //   .callFunction(() => {
              //     console.log("All strings were deleted");
              //   })
              .typeString(" A passionate Full Stack Developer from Maryland.")
              .start();
          }}
        />
      </div>
      <div className="hello_text">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(3000)
              .typeString(
                "I have an insatiable desire to learn something new everyday!"
              )

              .start();
          }}
        />
      </div>
    </div>
  );
}
