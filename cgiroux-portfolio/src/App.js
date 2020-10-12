import React, { useState } from "react";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

import Skills from "./components/Skills";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import resume from "./images/CGiroux_Resume.pdf";

function App() {
  const [active, setActive] = useState({
    about: false,
    projects: false,
    contact: false,
  });
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Main resume={resume} />
        </Route>
        <Route
          path="/"
          render={(props) =>
            props.location.pathname !== "/" && (
              <Header active={active} setActive={setActive} />
            )
          }
        ></Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
      </div>
    </Router>
  );
}

export default App;
