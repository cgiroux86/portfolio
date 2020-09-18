import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import SortViz from "./SortViz";
import TeamReel from "./TeamReel";
import SleepTracker from "./SleepTracker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
    window.screen.availWidth > 600 &&
      gsap.from(".component", { opacity: 0, y: 200, x: 200, duration: 0.5 });
  }, [carousel]);

  return (
    <div className="projects_container">
      <div className="projects_card">
        <h2 className="contact_title">Projects</h2>
        <div className="directions">
          <FontAwesomeIcon onClick={goBack} icon={faChevronLeft} />
          <FontAwesomeIcon
            // className="directions"
            onClick={goForward}
            icon={faChevronRight}
          />
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
