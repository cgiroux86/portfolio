import React from "react";
import sleepTracker from "../images/sleepTracker.mov";

export default function SleepTracker() {
  return (
    <div style={{ width: "100%" }}>
      <div className="sort_viz">
        <div className="tech_container">
          <h3 style={{ textAlign: "center", padding: "0" }}>Sleep Tracker</h3>
          <div className="stack_header">
            <div className="stack_wrapper">
              <h5 className="title_text">Tech Stack: </h5>
              <span className="skills_list">
                Javascript | React | Redux | Node.js | Express | PostgreSQL |
                Knex | Material-UI | Recharts | Heroku
              </span>
            </div>
            <div className="stack_wrapper">
              <h5 className="title_text">Links: </h5>
              <span className="skills_list">
                Github Repo | Deployed Version
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <video width="95%" height="95%" loop autoPlay>
              <source src={sleepTracker} type="video/mp4"></source>
            </video>
          </div>
          <div style={{ width: "90%", margin: "2% auto", fontSize: "1rem" }}>
            <p>
              Designed to give users ability to easily input information about
              their sleeping patterns. Through data visualizations and a simple
              algorithm, users are able view their sleeping patterns and receive
              feedback on optimal sleeping time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
