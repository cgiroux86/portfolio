import React, { useState } from "react";
import Main from "./components/Main";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route
          path="/"
          render={(props) => props.location.pathname !== "/" && <Header />}
        ></Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
      </div>
    </Router>
  );
}

export default App;
