import React, { useState } from "react";
import Main from "./components/Main";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/main" component={Main} />
        <Route exact path="/contact">
          <Header />
          <Contact />
        </Route>
        <Route exact path="/projects">
          <Header />
          <Projects />
        </Route>
        {/* <Main /> */}
      </div>
    </Router>
  );
}

export default App;
