import React, { Component } from "react";
import "../styles/header.css";
import LOGO from "../logo.jpg";
import LOGO_MOBILE from "../logo_mobile.jpg";
import SideBar from "./sideBar";
import { Link } from "react-scroll";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerLogo: window.innerWidth > 500 ? LOGO : LOGO_MOBILE
    };
  }
  render() {
    return (
      <div className="main">
        <img src={this.state.headerLogo} id="logo" alt="logo" />
        <div className="header-container">
          <div className="nav-container">
            <ul>
              <li className="nav-item">
                <Link to="aboutUs-frame" spy={true} smooth={true} offset={-180}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="com-frame" spy={true} smooth={true} offset={-195}>
                  Completed Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="curr-frame" spy={true} smooth={true} offset={-195}>
                  Current Projects
                </Link>
              </li>
              <li id="last-nav">
                <Link to="inquiries-form" spy={true} smooth={true} offset={-180}>
                  Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <SideBar />
      </div>
    );
  }
}

export default header;
