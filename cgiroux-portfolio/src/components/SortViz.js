import React from "react";
import sortViz1 from "../images/sortviz1.mov";

export default function SortViz() {
  return (
    <div>
      <div className="sort_viz">
        <div>
          <h3>Sort Visualizer</h3>
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
              <source src={sortViz1} type="video/mp4"></source>
            </video>
          </div>
          <div style={{ width: "90%", margin: "2% auto", fontSize: "1rem" }}>
            <p>
              Algorithms are fun! Ever since studying CS, I have fallen in love
              with studying and implementing algorithms to solve real life
              problems. Classic sorting algorithms are nothing new, neither are
              visualizations. However, you don't see many applications with the
              ability to compare these algorithms side by side. It was an
              excellent way to demonstrate real life problem solving using React
              and further my understanding of classic sorting algorithms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}