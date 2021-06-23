import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as IoIcons from "react-icons/io5";
import ReactPaginate from "react-paginate";
import Display from "components/display-project/display";
import Footer from "components/footer/footer";

import "./projects.scss";

class projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      completed_projects: [],
      project: null,
      showDisplay: false,
      offset: 0,
      orgData: [],
      perPage: 12,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        const data = this.state.orgData;

        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          completed_projects: slice,
        });
      }
    );
    window.scrollTo(0, 0);
  };

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
          completed_projects: responseData.slice(
            this.state.offset,
            this.state.offset + this.state.perPage
          ),
          loading: false,
          pageCount: Math.ceil(responseData.length / this.state.perPage),
          orgData: responseData,
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
      <div className="projects-container">
        <div className="title">
          <Link to="/">
            <img src={require("images/logo.png").default} alt="logo" />
          </Link>
          <Link to="/" className="btn-back">
            <IoIcons.IoArrowBack className="icon" />
            Back
          </Link>
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
          <div className="outer-card-container">
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
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

export default projects;
