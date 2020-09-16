import React, { useState } from "react";
import Main from "./components/Main";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/contact" component={Contact} />
        {/* <Main /> */}
      </div>
    </Router>
  );
}

export default App;
