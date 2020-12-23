import React, { Component } from "react";
import AddCurr from "./add_current_project";
import CarouselMaker from "./carouselMaker";
import { Container } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import "../styles/more_completed_project.css";

class more_completed_projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Container>
        <a className="icon-link" href="/">
          <AiIcons.AiOutlineHome className="home-icon" />
        </a>
        <AddCurr />
        <h3 style={{ padding: "20px 0px 20px 12px" }}>Current Projects</h3>
        <CarouselMaker
          url={`https://bdcustompa-api.herokuapp.com/api/current_projects`}
        />
      </Container>
    );
  }
}

export default more_completed_projects;
