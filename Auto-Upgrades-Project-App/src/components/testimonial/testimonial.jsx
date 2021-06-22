import React, { Component } from "react";
import * as ImIcons from "react-icons/im";
import { Carousel } from "react-responsive-carousel/";
import "./testimonial.scss";

class testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="testimonial-container">
        <div className="title">
          <h2>Testimonial</h2>
          <div className="underline"></div>
        </div>

        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={7000}
          emulateTouch={true}  
        >
          <div className="card-container">
            <div className="card">
              <div className="img-pos">
                <div className="picture">
                  <img
                    src={require("../../images/profile.png").default}
                    alt="profile-pic"
                  />
                </div>
              </div>
              <div className="comment">
                <p>
                  <ImIcons.ImQuotesLeft className="lQuote" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  aliquam voluptates in rem suscipit ducimus beatae,
                  necessitatibus quisquam veniam? Reiciendis necessitatibus, vel
                  expedita officia soluta commodi dolore, omnis veritatis ex
                  recusandae tempora.
                  <ImIcons.ImQuotesRight className="RQuote" />
                </p>
              </div>
              <div className="name">
                <p>
                  <span>Walter White </span>Drug Producer
                </p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="img-pos">
                <div className="picture">
                  <img
                    src={require("../../images/w1.png").default}
                    alt="profile-pic"
                  />
                </div>
              </div>
              <div className="comment">
                <p>
                  <ImIcons.ImQuotesLeft className="lQuote" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  aliquam voluptates in rem suscipit ducimus beatae,
                  necessitatibus quisquam veniam? Reiciendis necessitatibus, vel
                  expedita officia soluta commodi dolore, omnis veritatis ex
                  recusandae tempora.
                  <ImIcons.ImQuotesRight className="RQuote" />
                </p>
              </div>
              <div className="name">
                <p>
                  <span>Walter White </span>Drug Producer
                </p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="img-pos">
                <div className="picture">
                  <img
                    src={require("../../images/w2.png").default}
                    alt="profile-pic"
                  />
                </div>
              </div>
              <div className="comment">
                <p>
                  <ImIcons.ImQuotesLeft className="lQuote" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  aliquam voluptates in rem suscipit ducimus beatae,
                  necessitatibus quisquam veniam? Reiciendis necessitatibus, vel
                  expedita officia soluta commodi dolore, omnis veritatis ex
                  recusandae tempora.
                  <ImIcons.ImQuotesRight className="RQuote" />
                </p>
              </div>
              <div className="name">
                <p>
                  <span>Walter White </span>Drug Producer
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default testimonial;
