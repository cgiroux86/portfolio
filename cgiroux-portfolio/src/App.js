import React, { useState } from "react";
import Main from "./components/Main";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Route exact path="/" component={Main} />
        <Route exact path="/contact">
          <Header />
          <Contact />
        </Route>
        <Route exact path="/projects">
          <Header />
          <Projects />
        </Route>
        <Route exact path="/resume">
          <Header />
          <Resume />
        </Route>
      </div>
    </Router>
  );
}

export default App;
