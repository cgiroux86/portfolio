import React from "react";
import js from "../images/logo-javascript.svg";
import html from "../images/html-5.svg";
import css from "../images/css3.svg";
import sql from "../images/sql.png";
import python from "../images/python.jpeg";
export default function Skills() {
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
              <li>JWT</li>
              <li>Flask</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
        <div>
          <h4>About Me</h4>
        </div>
      </div>
    </div>
  );
}
