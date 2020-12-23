import { Form, FormText, Row, Col, Button, Container } from "react-bootstrap";
import React, { Component } from "react";
import "../styles/inquiries.css";

class Inquiries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Date: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Phone_Number: "",
      Description: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const URL = "http://localhost:8080/api/inquiries";

    const date = Date.now();

    const today = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);

    const newInquiry = {
      Date: today,
      Name: this.state.FirstName + " " + this.state.LastName,
      Email: this.state.Email,
      Phone_Number: this.state.Phone_Number,
      Description: this.state.Description,
    };

    console.log(newInquiry);

    // Authenticate user creds + verify permission
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInquiry),
    })
      .then((response) => {
        if (response.ok) {
          // Parse the response body as JSON
          return response.json();
        } else if (response.status >= 400 && response.status < 500) {
          // Error caused by the requestor
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        } else {
          // Some other situation
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        }
      })
      .then((responseData) => {
        // "responseData" is an object
        console.log(responseData.message);
      })
      .catch((error) => {
        // Handles an error thrown above, as well as network general errors
        console.log(error);
      });
  }

  render() {
    //styles
    const titleStyle = {
      fontSize: "26px",
      fontWeight: "300",
      padding: " 20px 0px 15px 0px",
    };
    const hrStyle = {
      display: "block",
      marginTop: "30px",
      marginBottom: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      height: "2px",
      backgroundColor: "#333",
    };

    // submit button state
    const isDisabled =
      this.state.FirstName.length === 0 ||
      this.state.LastName.length === 0 ||
      this.state.Email.length === 0 ||
      this.state.Phone_Number.length === 0 ||
      this.state.Description.length === 0;

    return (
      <Container id="inquiries-form">
        <header className="inquiries-title">Inquiries</header>
        <Container className="outer-form-container">
          <Container className="form-container">
            <Form>
              <h4 style={titleStyle}> 1. Please Enter Your Information </h4>
              <p id="des">
                (We need some basic information from you in order to contact you
                once you've reached out to us.)
              </p>
              <Form.Group as={Row}>
                <Col>
                  <Form.Label>First Name: </Form.Label>
                  <Form.Control
                    placeholder="first name"
                    style={{ marginLeft: "15px" }}
                    onChange={(e) =>
                      this.setState({ FirstName: e.target.value })
                    }
                  />
                </Col>
                <Col>
                  <Form.Label>Last Name: </Form.Label>
                  <Form.Control
                    placeholder="last name"
                    style={{ marginLeft: "15px" }}
                    onChange={(e) =>
                      this.setState({ LastName: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group controlId="formHorizontalEmail">
                <Form.Label>Email:</Form.Label>
                <Col sm={7}>
                  <Form.Control
                    type="email"
                    placeholder="example@gmail.com"
                    onChange={(e) => this.setState({ Email: e.target.value })}
                  />
                  <FormText>So we can reach out to you via email.</FormText>
                </Col>
              </Form.Group>
              <Form.Group controlId="formHorizontalPhoneNumber">
                <Form.Label>Phone Number:</Form.Label>
                <Col sm={7}>
                  <Form.Control
                    placeholder="647-733-61..."
                    type="phone"
                    onChange={(e) =>
                      this.setState({ Phone_Number: e.target.value })
                    }
                  />
                  <FormText>If we need to contact you to urgently.</FormText>
                </Col>
              </Form.Group>
              <hr style={hrStyle}></hr>
              <h4 style={titleStyle}> 2. Project Description </h4>
              <Form.Group
                controlId="exampleForm.ControlTextarea1"
                onChange={(e) => this.setState({ Description: e.target.value })}
              >
                <p id="des">
                  (Please provide some simple details about your current
                  vehicle, and describe what kind of modifications you would
                  like to make.)
                </p>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Form>
            <Button
              size="lg"
              variant="dark"
              type="submit"
              disabled={isDisabled}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default Inquiries;
