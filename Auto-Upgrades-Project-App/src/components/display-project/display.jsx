import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import * as AiIcons from "react-icons/ai";
import "./display.scss";

class display extends Component {
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
    this.close = this.close.bind(this);
    this.myRef = React.createRef();
    this.state = {};
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.props.closeDisplay();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  close(event) {
    if (this.myRef.current === event.target) {
      this.props.closeDisplay();
    }
  }

  render() {
    return (
      <>
        {this.props.showDisplay ? (
          <div
            className="display-container"
            ref={this.myRef}
            onClick={this.close}
          >
            {this.props.project ? (
              <div className="screen">
                <div className="project-info">
                  <AiIcons.AiOutlineClose
                    onClick={() => this.props.closeDisplay()}
                  />
                  <Carousel emulateTouch={true}>
                    {this.props.project.Images.map((url) => {
                      return (
                        <div className="carousel-img">
                          <img
                            alt={`${this.props.project}-car`}
                            src={`data:image/jpeg;base64,${url}`}
                          />
                        </div>
                      );
                    })}
                  </Carousel>

                  <h4>Car Details</h4>
                  <div className="specifications">
                    <div className="block">
                      <span>Make: </span>
                      <span>{this.props.project.Make}</span>
                    </div>
                    <div className="block">
                      <span>Model: </span>
                      <span>{this.props.project.Model}</span>
                    </div>
                    <div className="block">
                      <span>Year: </span>
                      <span>{this.props.project.Year}</span>
                    </div>
                    <div className="block">
                      <span>Color: </span>
                      <span>{this.props.project.Color}</span>
                    </div>
                    <div className="block">
                      <span>Body Style: </span>
                      <span>{this.props.project.Body_Style}</span>
                    </div>
                    <div className="block">
                      <span>Engine Transmission: </span>
                      <span>{this.props.project.Engine_Transmission}</span>
                    </div>
                  </div>
                  <h4>Project Description</h4>
                  <div className="description">
                    <p>{this.props.project.Description}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </>
    );
  }
}

export default display;
