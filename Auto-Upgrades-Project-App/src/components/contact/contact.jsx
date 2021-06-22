import React, { Component } from "react";
import $ from "jquery";

import "./contact.scss";

class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // showing and hiding the online form
    $(".header-box").click(() => {
      $(".form-container-loc").toggleClass("active");
    });

    // phone number formatting
    $(".phoneNumber").keyup(function () {
      $(this).val(
        $(this)
          .val()
          .replace(/^(\d{3})(\d{3})(\d{4})$/, "+1 ($1) $2-$3")
      );
    });
  }

  render() {
    return (
      <div id="contact-container">
        <div className="empty-box"></div>
        <div className="header-box">
          <div className="title">
            <h2>Contact us</h2>
            <div className="underline"></div>
            <p>Click on the Image to use our online form.</p>
          </div>
        </div>
        <div className="form-container-loc">
          <div className="form-container">
            <div className="form-outer">
              <div className="form-inner">
                <form id="form" name="contact" method="POST" action="">
                  <h4>1. Please Enter Your Information</h4>
                  <p>
                    (We need some basic information from you in order to contact
                    you once you've reached out to us.)
                  </p>
                  <div className="info">
                    <div className="form-group">
                      <input
                        type="text"
                        name="firstName"
                        className="firstName form-field"
                        placeholder=""
                        required
                      />
                      <label htmlFor="firstName" className="form-label">
                        <span className="label-content">First Name</span>
                      </label>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="lastName"
                        className="lastName form-field"
                        placeholder=""
                        required
                      />
                      <label htmlFor="lastName" className="form-label">
                        <span className="label-content">Last Name</span>
                      </label>
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="email form-field"
                        placeholder=""
                        required
                      />
                      <label htmlFor="email" className="form-label">
                        <span className="label-content">Email Address</span>
                      </label>
                    </div>

                    <div className="form-group">
                      <input
                        type="tel"
                        name="phoneNumber"
                        className="phoneNumber form-field"
                        maxLength="10"
                        placeholder=""
                        required
                      />
                      <label htmlFor="phoneNumber" className="form-label">
                        <span className="label-content">Phone Number</span>
                      </label>
                    </div>
                  </div>
                  <h4>2. Project Description</h4>
                  <p>
                    (Please provide some simple details about your current
                    vehicle, and describe what kind of modifications you would
                    like to make.)
                  </p>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="message"
                      placeholder=""
                      required
                    ></textarea>
                    <label htmlFor="message" className="form-label">
                      <span className="label-content"></span>
                    </label>
                  </div>
                  <div className="btn-send">
                    <input type="submit" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
