import React, { Component } from "react";
import { Link as LinkS } from "react-scroll";
import "./sidebar.scss";

class sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar-container">
        <input type="checkbox" id="check" />
        <label for="check"></label>

        <div class="sidebar-content">
          <div className="options">
            {" "}
            <LinkS to="landing-container" spy={true} smooth={true} offset={-60}>
              Home
            </LinkS>
            <LinkS
              to="services-container"
              spy={true}
              smooth={true}
              offset={-55}
            >
              Services
            </LinkS>
            <LinkS
              to="preview-projects-container"
              spy={true}
              smooth={true}
              offset={-40}
            >
              Projects
            </LinkS>
            <LinkS
              to="testimonial-container"
              spy={true}
              smooth={true}
              offset={-40}
            >
              Testimonial
            </LinkS>
            <LinkS to="contact-container" spy={true} smooth={true} offset={10}>
              Contact
            </LinkS>
          </div>
        </div>
      </div>
    );
  }
}

export default sidebar;
