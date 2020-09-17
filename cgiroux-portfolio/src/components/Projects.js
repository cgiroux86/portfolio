import React, { useEffect, useState } from "react";
import singleSort from "../images/singleSort.png";
import doubleSort from "../images/doubleSort.png";
import sortViz1 from "../images/sortviz1.mov";
import { gsap } from "gsap";
import SortViz from "./SortViz";
import TeamReel from "./TeamReel";
import SleepTracker from "./SleepTracker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const [carousel, setCarousel] = useState(0);
  function goForward() {
    if (carousel < 2) setCarousel(carousel + 1);
    else setCarousel(0);
  }

  function goBack() {
    if (carousel > 0) setCarousel(carousel - 1);
    else setCarousel(2);
  }

  useEffect(() => {
    gsap.from(".projects_container", { opacity: 0, y: 200, duration: 0.5 });
  }, []);

  useEffect(() => {
    gsap.from(".component", { opacity: 0, y: 200, x: 200, duration: 0.5 });
  }, [carousel]);

  return (
    <div className="projects_container">
      <div className="projects_card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "30%",
            fontSize: "2rem",
            margin: "2% auto",
          }}
        >
          <FontAwesomeIcon onClick={goBack} icon={faChevronLeft} />
          <FontAwesomeIcon onClick={goForward} icon={faChevronRight} />
        </div>
        <div className="component">
          {carousel === 0 ? (
            <SortViz />
          ) : carousel === 1 ? (
            <TeamReel />
          ) : (
            <SleepTracker />
          )}
        </div>
      </div>
    </div>
  );
}
