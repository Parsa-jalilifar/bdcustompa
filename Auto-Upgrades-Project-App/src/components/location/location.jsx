import React, { Component } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import "./location.scss";

class location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="location-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3729968942953!2d-79.35866098472424!3d43.66121185993096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb69f4489e31%3A0xa071719bf9687b9f!2sToronto%2C%20ON%20M5A%204N5!5e0!3m2!1sen!2sca!4v1623094489455!5m2!1sen!2sca"
          title={"store location"}
          width="1000"
          height="450"
          id="gps"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <div className="info-box">
          <h3>Keep in touch with us</h3>

          <div className="info-item">
            <BiIcons.BiMapPin />
            <p>
              Mercedes-Benz Downtown Toronto - Open by Appointment Only, 761
              Dundas St E, Toronto, ON M5A 4N5
            </p>
          </div>

          <div className="info-item">
            <AiIcons.AiOutlineMobile />
            <a href="tel:+14168852050">(416) 885-2050</a>
          </div>

          <div className="info-item">
            <AiIcons.AiOutlineMail />
            <a href="mailto:bobby@bdcustompa.com">bobby@bdcustompa.com</a>
          </div>

          <h3>Follow us on</h3>

          <div className="social-box">
            <div className="button">
              <a
                href="https://www.instagram.com/bd_custom_pa/"
                className="social-icon"
                target="blank"
              >
                <AiIcons.AiFillInstagram />
                <span>Instagram</span>
              </a>
            </div>

            <div className="button">
              <a
                href="https://www.facebook.com/pages/category/Product-Service/BD-Custom-Performance-101954038448058/"
                className="social-icon"
                target="blank"
              >
                <FaIcons.FaFacebook />
                <span>FaceBook</span>
              </a>
            </div>

            <div className="button">
              <a
                href="https://www.instagram.com/bd_custom_pa/"
                className="social-icon"
                target="blank"
              >
                <AiIcons.AiOutlineTwitter />
                <span>Twitter</span>
              </a>
            </div>

            <div className="button">
              <a
                href="https://www.instagram.com/bd_custom_pa/"
                className="social-icon"
                target="blank"
              >
                <AiIcons.AiFillYoutube />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default location;
