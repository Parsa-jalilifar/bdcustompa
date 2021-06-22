import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./not-found.scss";

class not_found extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="error-container">
        <div class="fof">
          <div className="main-box">
            <h1>Error 404</h1>
            <div className="btn-pos">
              <Link to="/" className="btn">
                <span class="text">Text</span>
                <span class="flip-front">Back</span>
                <span class="flip-back">To Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default not_found;
