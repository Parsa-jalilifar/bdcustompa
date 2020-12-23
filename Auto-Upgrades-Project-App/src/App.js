import React from "react";

import Footer from "./components/footer";
import Home from "./components/home";
import MoreCom from "./components/more_completed_project";
import MoreCurr from "./components/more_current_project";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { Container } from "react-bootstrap";
import "./styles/App.css";

function App() {
  return (
    <Container fluid className="App-Background" style={{ padding: "0px" }}>
      <Router>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/More_completed_project" component={MoreCom} />
          <Route exact path="/More_current_project" component={MoreCurr} />
          <Route render={() => <NotFound />} />
        </Switch>
        <Footer />

      </Router>
    </Container>
  );
}

export default App;

// Function component for a content area
const NotFound = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <p>The requested resource was not found.</p>
      <p>&nbsp;</p>
    </div>
  );
};
