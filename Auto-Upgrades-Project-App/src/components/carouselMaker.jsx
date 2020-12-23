import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/carouselMaker.css";

class carouselMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      projects: [],
      orgData: [],
      perPage: 5,
      currentPage: 0,
      url: props.url,
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
        this.loadMoreData();
      }
    );
    window.scrollTo(0, 0);
  };

  loadMoreData() {
    const data = this.state.orgData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      projects: slice,
    });
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get(this.state.url).then((res) => {
      var data = res.data;
      // .reverse() -> we can reverse the array of object in database
      var slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        orgData: res.data,
        projects: slice,
      });
    });
  }

  render() {
    return (
      <div className="container">
        <ProjectItem cars={this.state.projects} />
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default carouselMaker;

function ProjectItem(props) {
  let rows = props.cars.map((car, index) => {
    return <CarouselItems car={car} key={index} />;
  });
  return rows;
}

function CarouselItems(props) {
  const c = props.car;
  return (
    <div className="carousel-frame">
      <ul>
        <li>Make: {c.Make}</li>
        <li>Model: {c.Model}</li>
        <li>Year: {c.Year}</li>
        <li>Body Style: {c.Body_Style}</li>
        <li>Engine Transmission: {c.Engine_Transmission}</li>
      </ul>
      <div className="carousel-buttons">
        <Link className="btn btn-warning" to={`/project/edit/${c._id}`}>
          Edit
        </Link>
        <Link className="btn btn-danger" to={`/project/delete/${c._id}`}>
          Delete
        </Link>
      </div>
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
