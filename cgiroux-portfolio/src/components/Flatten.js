import React from "react";
import flatten from "../images/flatten.mov";

export default function SleepTracker() {
  return (
    <div style={{ width: "100%" }}>
      <div className="sort_viz">
        <div className="tech_container">
          <h3 style={{ textAlign: "center", padding: "0" }}>
            Flatten The Curve
          </h3>
          <div className="stack_header">
            <div className="stack_wrapper">
              <h5 className="title_text">Tech Stack: </h5>
              <span className="skills_list">
                Javascript | React | Redux | Firebase | Google Auth | Google
                Maps | Material-UI
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
              <source src={flatten} type="video/mp4"></source>
            </video>
          </div>
          <div style={{ width: "90%", margin: "2% auto", fontSize: "1rem" }}>
            <p>
              Flatten The Curve was created by a group of Lambda School
              Developers, when we initially were dealing with the Covid-19
              crisis. If you remember, essentials were short and grocery stores
              were mobs. We wanted to create a platform, using geolocation and
              messaging to allow users to share Covid-19 related information
              with those in their local area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
