import React, { Component } from "react";
import Landing from "../../components/landing/landing";
import Services from "../../components/services/services";
import PreviewProjects from "../../components/preview-projects/preview-projects";
import Testimonial from "../../components/testimonial/testimonial";
import Contact from "../../components/contact/contact";
import Location from "../../components/location/location";
import Footer from "../../components/footer/footer";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home-container">
        <Landing />
        <Services />
        <PreviewProjects />
        <Testimonial />
        <Contact />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default home;
