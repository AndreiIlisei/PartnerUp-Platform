import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";

// Styling  // Components
import { SHomePage, SLogo, SProfileButton } from "../styles/Shomepage";
import { SPartner, Cards } from "../styles/Shomepage";
import { SModale, SModalButton } from "../styles/Stylemodal";
import { Button } from "../components/ButtonElements";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

// MUI Stuff
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Dialog from '@material-ui/core/Dialog';


export function Database() {
  const [modalIsOpen, setModalIsOpen, show] = useState(false);
  return (
    <SHomePage>
      <Cards className="CardsStyle">
        <Row className="Show-Grid">
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Marie</Card.Title>
                <Card.Text>
                  BSC in International Business, CBS, 20yrs old, Copenhagen
                </Card.Text>
                <a
                  href="#"
                  className="btn-primary"
                  onClick={() => setModalIsOpen(true)}
                >
                  See more
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Max</Card.Title>
                <Card.Text>
                  BSC in Finance, CBS, 25yrs old, Copenhagen
                </Card.Text>

                {/* Modal Pop Up */}
                <a
                  href="#"
                  className="btn-primary"
                  onClick={() => setModalIsOpen(true)}
                >
                  See more
                </a>

                <Dialog
                  isOpen={modalIsOpen}
                  shouldCLoseOnOverlayClick={false}
                  onRequestClose={() => setModalIsOpen(false)}
                >
                  <SModale>
                    <img
                      className="modalImage"
                      src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    ></img>
                    <div>
                      <h1> Max </h1>
                    </div>
                    <div className="userInfo">
                      <h2 style={{ color: "#c8cdf9" }}>Location </h2>{" "}
                      <h3>Copenhagen, Denmark</h3>
                      <h2 style={{ color: "#c8cdf9" }}>Degree</h2>{" "}
                      <h3>BSc in Finance</h3>
                      <h2 style={{ color: "#c8cdf9" }}>Interests</h2>{" "}
                      <h3> I love to play basketball, big Chicago Bulls fan</h3>
                      <h2 style={{ color: "#c8cdf9" }}>Type</h2>{" "}
                      <h3>
                        ISFP and Early bird, I like to wake up early in the
                        mornings as I manage to achieve a lot of things
                        throughout the day
                      </h3>
                      <h2 style={{ color: "#c8cdf9" }}>Research Topic</h2>{" "}
                      <h3>
                        I would like to write about the organizational change in
                        a mid-sized company. I would like to do qualitative
                        approach.
                      </h3>
                    </div>
                  </SModale>

                  <SModalButton>
                    <Button
                      className="closeBtn"
                      onClick={() => setModalIsOpen(false)}
                    >
                      Close
                    </Button>
                    <Button
                      className="getInTouch"
                      onClick={() => setModalIsOpen(false)}
                    >
                      Get in Touch
                    </Button>
                    <Link className="secondrow" to="">
                      <InstagramIcon />
                    </Link>
                    <Link className="secondrow" to="">
                      <FacebookIcon />
                    </Link>
                  </SModalButton>
                </Dialog>
                
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Fiona</Card.Title>
                <Card.Text>
                  MSC in EBusiness, CBS, 24yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1545696968-1a5245650b36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1917&q=80"
              />
              <Card.Body>
                <Card.Title>Aron</Card.Title>
                <Card.Text>
                  BSC in Finance, CBS, 25yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1517842536804-bf6629e2c291?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Sofia</Card.Title>
                <Card.Text>
                  BSC in Marketing, CBS, 25yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1604820649462-62dbda149c73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Marek</Card.Title>
                <Card.Text>
                  BSC in Information Systems, CBS, 23yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1604820649462-62dbda149c73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Karl</Card.Title>
                <Card.Text>
                  BSC in International Business, CBS, 22yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1556159916-26bf2ce06da9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Emma</Card.Title>
                <Card.Text>
                  MSC in Information Systems, CBS, 27yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1518679898075-9c1be91261b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1952&q=80"
              />
              <Card.Body>
                <Card.Title>Sarah</Card.Title>
                <Card.Text>
                  MSC in Information Systems, CBS, 23yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Anna</Card.Title>
                <Card.Text>
                  MSC in Communications, CBS, 23yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1520911831154-12889531673c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <Card.Body>
                <Card.Title>Soeren</Card.Title>
                <Card.Text>
                  MSC in Business and Politcs, CBS, 23yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80"
              />
              <Card.Body>
                <Card.Title>Christina</Card.Title>
                <Card.Text>
                  MSC in Business Development, CBS, 23yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1876&q=80"
              />
              <Card.Body>
                <Card.Title>Simon</Card.Title>
                <Card.Text>
                  MSC in EBusiness, CBS, 28yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1518679898075-9c1be91261b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1952&q=80"
              />
              <Card.Body>
                <Card.Title>Sarah</Card.Title>
                <Card.Text>
                  MSC in Information Systems, CBS, 23yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "1em " }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80"
              />
              <Card.Body>
                <Card.Title>Sasha</Card.Title>
                <Card.Text>
                  MSC in Information Systems, CBS, 26yrs old, Copenhagen
                </Card.Text>
                <a href="#" className="btn-primary">
                  See More
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Cards>
    </SHomePage>
  );
}
