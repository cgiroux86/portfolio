import React from "react";
import { Avatar } from "@material-ui/core";
import portfolio from "../images/portfolio.png";
import Typewriter from "typewriter-effect";

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
                  //   .callFunction(() => {
                  //     console.log("String typed out!");
                  //   })
                  //   .pauseFor(1500)
                  //   .deleteAll()
                  //   .callFunction(() => {
                  //     console.log("All strings were deleted");
                  //   })
                  .typeString(
                    " A passionate Full Stack Developer from Maryland. I have an insatiable desire to learn something new everyday!"
                  )
                  .start();
              }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p>Linked In</p>
            <p>Github</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
}
