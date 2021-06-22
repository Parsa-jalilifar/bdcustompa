import React, { Component } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import "./services.scss";

class services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleState: 1,
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div id="services-container">
        <div className="title">
          <h2>Our Powerful Services</h2>
          <div className="underline"></div>
        </div>

        <div className="service-blocks">
          <div
            className={
              this.state.toggleState === 1 ? "block active-block" : "block"
            }
            onClick={() => this.setState({ toggleState: 1 })}
          >
            <AiIcons.AiOutlineCheckSquare className="icon" />
            <h5>Quality Assurance</h5>
          </div>

          <div
            className={
              this.state.toggleState === 2 ? "block active-block" : "block"
            }
            onClick={() => this.setState({ toggleState: 2 })}
          >
            <AiIcons.AiOutlineDashboard className="icon" />
            <h5>Automotive Performance</h5>
          </div>

          <div
            className={
              this.state.toggleState === 3 ? "block active-block" : "block"
            }
            onClick={() => this.setState({ toggleState: 3 })}
          >
            <FaIcons.FaWrench className="icon" />
            <h5>Exterior Cosmetics</h5>
          </div>

          <div
            className={
              this.state.toggleState === 4 ? "block active-block" : "block"
            }
            onClick={() => this.setState({ toggleState: 4 })}
          >
            <GiIcons.GiCarSeat className="icon" />
            <h5>Interior Modification</h5>
          </div>

          <div className="block ">
            <div
              className={
                this.state.toggleState === 1
                  ? "content-block-active"
                  : "content-block"
              }
            >
              <ul>
                <li>
                  With more than 20 years of extensive experience in the
                  automotive industry, We have all the right connections to make
                  your dream car come together.
                </li>
              </ul>
            </div>

            <div
              className={
                this.state.toggleState === 2
                  ? "content-block-active"
                  : "content-block"
              }
            >
              <ul>
                <li>
                  Engine Performance Upgrades (Turbo, Supercharger, Computer
                  Chip,...)
                </li>
                <li>Drivetrain Modifications and Upgrades</li>
                <li>Suspension Upgrades and Brakes Upgrades</li>
                <li>Enhanced Performance Exhaust Upgrades</li>
              </ul>
            </div>
            <div
              className={
                this.state.toggleState === 3
                  ? "content-block-active"
                  : "content-block"
              }
            >
              <ul>
                <li>
                  Comprehensive Body Kit Modifications (Spoilers, Wide Body,
                  Flares,...)
                </li>
                <li>Custom Powder Coating Rims and Brake Calipers</li>
                <li>Ceramic Coating/Premium Paint Protection</li>
                <li>Custom 3D PPF(Paint Protection Film</li>
              </ul>
            </div>
            <div
              className={
                this.state.toggleState === 4
                  ? "content-block-active"
                  : "content-block"
              }
            >
              <ul>
                <li>
                  Complete Custom Interior (Change on Design, Leather,
                  Stitching,...)
                </li>
                <li>
                  Custom Sound System, Navigation, Dash Cam, Anti-Theft System
                  with GPS Tracking.
                </li>
                <li>Custom Dash (Gauge and Indicators)</li>
                <li>LED Ambient Lighting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default services;
