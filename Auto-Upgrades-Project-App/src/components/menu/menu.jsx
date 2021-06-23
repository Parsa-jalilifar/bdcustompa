/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link as LinkS } from "react-scroll";
import Sidebar from "../side-navigation/sidebar";
import "./menu.scss";

class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const logo = document.querySelector(".nav-logo");
    const landing = document.querySelector("#landing-container");

    const options = {};

    const menuObserver = new IntersectionObserver((entries, menuObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          logo.classList.add("show");
        } else {
          logo.classList.remove("show");
        }
      });
    }, options);

    menuObserver.observe(landing);
  }

  render() {
    return (
      <div className="menu-container">
        <img
          src={require("images/logo.png").default}
          alt="Big Logo"
          className="nav-logo"
        />
        <div className="menu-box">
          <LinkS to="landing-container" spy={true} smooth={true} offset={-60}>
            Home
          </LinkS>
          <LinkS to="services-container" spy={true} smooth={true}>
            Services
          </LinkS>
          <LinkS to="preview-projects-container" spy={true} smooth={true}>
            Projects
          </LinkS>
          <LinkS to="testimonial-container" spy={true} smooth={true}>
            Testimonial
          </LinkS>
          <LinkS to="contact-container" spy={true} smooth={true} offset={1}>
            Contact
          </LinkS>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default menu;
