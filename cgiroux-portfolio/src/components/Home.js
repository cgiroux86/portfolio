import React, { useEffect } from "react";
import profile from "../images/profile.jpg";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export default function Home({ setDiscover }) {
  useEffect(() => {
    gsap.from(".home_img", { rotation: 360, x: 300, duration: 2 });
    gsap.from(".intro", { opacity: 0, y: 200, duration: 2 });
    gsap.from(".home_button", { opacity: 0, x: -300, duration: 2 });
  }, []);

  return (
    <div className="home_wrapper">
      <div className="intro">
        <p>
          Hi! I'm Chris Giroux, a passionate Full Stack Web Developer with an
          insatiable desire to learn something new everyday.
        </p>
        <div className="button_wrapper">
          <div className="home_button">Download CV</div>
          <Link to="/main" style={{ textDecoration: "none", color: "black" }}>
            <div className="home_button">Learn More</div>
          </Link>
        </div>
      </div>
      <img className="home_img" src={profile}></img>
    </div>
  );
}
