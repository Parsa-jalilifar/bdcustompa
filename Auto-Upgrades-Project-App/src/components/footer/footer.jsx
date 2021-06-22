import React, { Component } from "react";
import "./footer.scss";

class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer-container">
        <p>Copyright © 2020 by bdcustomepa. All rights reserved </p>
      </div>
    );
  }
}

export default footer;
