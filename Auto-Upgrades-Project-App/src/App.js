import React from "react";
import Home from "pages/home/home";
import projects from "pages/projects/projects";
import NotFound from "pages/not-found/not-found";

import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={projects} />
          <Route render={() => <NotFound />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
