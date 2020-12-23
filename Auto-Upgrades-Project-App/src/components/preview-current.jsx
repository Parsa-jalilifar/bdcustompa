import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/preview-current.css";

class previewCurrent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_projects: [],
    };
  }
  componentDidMount() {
    const url = `https://bdcustompa-api.herokuapp.com/api/current_projects`;

    // Get all
    fetch(url)
      .then((response) => {
        // Optional...
        this.setState({
          httpStatusCode: response.status,
          httpStatusOk: response.ok,
        });
        if (response.ok) {
          // Parse the response body as JSON
          return response.json();
        } else if (response.status === 404) {
          // Not found
          throw Error("HTTP 404, Not found");
        } else {
          // Some other situation
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        }
      })
      .then((responseData) => {
        // "responseData" is an object; here, we're interested in its "data" property
        // Study the shape of the data in the rearers.in service
        this.setState({ current_projects: responseData });
        // console.log(responseData);
        // Optional...
        // console.log(responseData.data);
      })
      .catch((error) => {
        // Handles an error thrown above, as well as network general errors
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container" id="curr-frame" style={{ paddingTop: "40px" }}>
        <h3 style={{ display: "inline-block" }}>Current Projects</h3>
        <h4 style={{ float: "right", marginRight: "15px" }}>
          <Link
            to="/More_current_project"
            style={{ textDecoration: "none", color: "white" }}
          >
            + More
          </Link>
        </h4>
        <ProjectItem cars={this.state.current_projects} />
      </div>
    );
  }
}

export default previewCurrent;

function ProjectItem(props) {
  let rows = props.cars.slice(0, 2).map((car, index) => {
    return <CarouselItems car={car} key={index} />;
  });
  return rows;
}

function CarouselItems(props) {
  const c = props.car;
  return (
    <div className="current-frame">
      <ul>
        <li>Make: {c.Make}</li>
        <li>Model: {c.Model}</li>
        <li>Year: {c.Year}</li>
        <li>Body Style: {c.Body_Style}</li>
        <li>Engine Transmission: {c.Engine_Transmission}</li>
      </ul>

      <Carousel interval={null}>
        {c.Images.map((url) => {
          return (
            <Carousel.Item>
              <img
                id="image-item"
                className="d-block w-100"
                style={{ maxHeight: "380px" }}
                alt={c.Make}
                src={`data:image/jpeg;base64,${url}`}
              />
              <Carousel.Caption id="image-caption">
                <p id="inner-caption">{c.Description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
