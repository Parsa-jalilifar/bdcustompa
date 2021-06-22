import React, { Component } from "react";
import { Link } from "react-router-dom";
import Display from "../display-project/display";
import "./preview-projects.scss";

class preview_projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      completed_projects: [],
      project: null,
      showDisplay: false,
    };
  }

  componentDidMount() {
    const url = `https://bdcustompa-api.herokuapp.com/api/completed_projects`;

    fetch(url)
      .then((response) => {
        this.setState({
          httpStatusCode: response.status,
          httpStatusOk: response.ok,
        });
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          throw Error("HTTP 404, Not found");
        } else {
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        }
      })
      .then((responseData) => {
        this.setState({
          completed_projects: responseData.slice(0, 4),
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openDisplay(project) {
    this.setState({ showDisplay: true });
    this.setState(this.setState({ project: project }));
  }

  closeDisplay() {
    this.setState({ showDisplay: false });
  }

  render() {
    return (
      <div id="preview-projects-container">
        <div className="title">
          <h2>Our Amazing Projects</h2>
          <div className="underline"></div>
          <Link to="/projects">+More</Link>
        </div>
        <Display
          project={this.state.project}
          showDisplay={this.state.showDisplay}
          closeDisplay={this.closeDisplay.bind(this)}
        />
        {this.state.loading ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="card-container">
            {this.state.completed_projects.map((project) => {
              return (
                <div
                  className="card"
                  onClick={this.openDisplay.bind(this, project)}
                >
                  <img
                    alt={`${project.Make}-car`}
                    src={`data:image/jpeg;base64,${project.Images[0]}`}
                  />
                  <p>
                    {project.Make + " " + project.Model + " " + project.Year}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default preview_projects;
