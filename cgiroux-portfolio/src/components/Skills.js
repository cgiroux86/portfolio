import React, { useEffect } from "react";
import js from "../images/logo-javascript.svg";
import html from "../images/html-5.svg";
import css from "../images/css3.svg";
import sql from "../images/sql.png";
import python from "../images/python.jpeg";
import { gsap } from "gsap";
export default function Skills() {
  useEffect(() => {
    gsap.from(".skills_wrapper", { opacity: 0, y: 200, duration: 0.5 });
  }, []);
  return (
    <div className="skills_wrapper">
      <div className="languages">
        <h3 style={{ textAlign: "center" }}>Programming Languages</h3>
        <div className="skills_img_wrapper">
          <img className="js" src={js}></img>
          <img className="html_img" src={html}></img>
          <img className="css" src={css}></img>
          <img className="sql" src={sql}></img>
          <img className="python" src={python}></img>
        </div>
        <h4 style={{ textAlign: "center" }}>Technologies</h4>
        <div className="lists_wrapper">
          <div className="lists">
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Jest</li>
              <li>React Testing Library</li>
              <li>JWT</li>
            </ul>
          </div>
          <div className="lists">
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Super Test</li>
              <li>Knex</li>
            </ul>
          </div>
          <div className="lists">
            <ul>
              <li>PostgreSQL</li>
              <li>Ouath</li>
              <li>Flask</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
        <div className="about_text">
          <h4 style={{ textAlign: "center" }}>About Me</h4>
          <p>
            Hi! I'm Chris Giroux, a Full Stack Software Engineer from Maryland.
            I have an insatiable desire to learn something new everyday. My
            journey to finding my passion in Full Stack Development has been
            unique. I've spent time as a Poker Player, fostering an interest in
            studying game theory, combinatorics, and probabilities. I also spent
            time as an Electrician, which helped build the foundation for my
            work ethic. I overcame a life threatening medical condition, which
            rejuvenated my outlook on life. I have a strong conviction that all
            of my life experiences have beautifully lead me to discovering my
            passion for Full Stack Development. I strive to make everyday count!
          </p>
        </div>
      </div>
    </div>
  );
}
