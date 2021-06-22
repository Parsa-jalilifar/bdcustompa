import React, { Component } from "react";
import { Link as LinkS } from "react-scroll";
import Menu from "../menu/menu";
import "./landing.scss";

class landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="landing-container">
        <Menu />
        <div className="content-frame">
          <div className="content-box">
            <img
              src={require("../../images/logo.png").default}
              alt="Big Logo"
            />
            <p>We make your car far more better than now.</p>
            <LinkS to="services-container" spy={true} smooth={true}>
              Read More
            </LinkS>
          </div>
        </div>
      </div>
    );
  }
}

export default landing;
