import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Pages
import { SHeader } from "../styles/Shomepage";
import { SProfilePage } from "../styles/SProfilePage";
import Logo from "../images/Logo.png";

// Redux Stuff
import { connect } from 'react-redux';
import { editUserDetails } from '../redux/actions/userActions'

// MUI STUFF
import {
  DialogActions,
  Dialog,
  DialogContent,
  DialogTitle,
  Tooltip,
  IconButton,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

// React Bootstrap
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

class UserProfile extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    degree: "",
    details: "",
    open: false,
  };

  

  handleOpen = () => {
    this.setState({ open: true })
    this.mapUserDetailsToState(this.props.credentials);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: [event.target.value],
    });
  };

  handleSubmit = () => {
    const userDetails = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      degree: this.state.degree,
      details: this.state.details,
    };
    this.props.editUserDetails(userDetails);
    this.handleClose();
  };

  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  }

  mapUserDetailsToState = (credentials) => {
    this.setState({
      name: credentials.name ? credentials.name : "",
      email: credentials.email ? credentials.email : "",
      phone: credentials.phone ? credentials.phone : "",
      degree: credentials.degree ? credentials.degree : "",
      details: credentials.details ? credentials.details : "",
    });
  };

  render() {
    const { classses } = this.props;
    return (
      <SProfilePage>
        <Container className="profileContainer">
          <Row className="rowContainer">
            {/* Photo and photo edit */}
            <Col xs={9} md={5} className="photoEdit">
              <Image
                src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                rounded
                fluid
              />
              <Tooltip title="Change photo" placement="top">
                <IconButton type="file" name="file">
                  <Button variant="contained">
                    {" "}
                    Change picture <PhotoLibraryIcon className="padding" />
                  </Button>
                </IconButton>
              </Tooltip>
            </Col>
            {/* Form Details and edit details */}
            <Col>
              <Form>
                {/* <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder={this.state.name} />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control placeholder={this.state.email} />
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control placeholder={this.state.phone} />
                  <Form.Label>Degree</Form.Label>
                  <Form.Control placeholder={this.state.degree} />
                  <Form.Label>Description</Form.Label>
                  <Form.Control placeholder={this.state.details} />
                </Form.Group> */}
                <Tooltip title="Edit details" placement="top">
                  <IconButton onClick={this.handleOpen}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container className="skillsContainer">
          <Row className="this">
            <Link className="secondrow" to="">
              <InstagramIcon />
            </Link>
            <Link className="secondrow" to="">
              <FacebookIcon />
            </Link>
            <Link className="secondrow" to="/">
              Portofolio
            </Link>
            <Link className="secondrow" to="/">
              Written exams
            </Link>
            <Link className="secondrow" to="/">
              Resume
            </Link>
          </Row>
        </Container>


        {/* Dialog!! */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle> Edit your details </DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="name"
                type="text"
                label="Name"
                multiline
                rows="2"
                placeholder="What is your name?"
                value={this.state.name}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="email"
                type="text"
                label="Email"
                multiline
                rows="2"
                placeholder="What is your email?"
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="phone"
                type="text"
                label="Phone"
                multiline
                rows="2"
                placeholder="What is your phone number?"
                value={this.state.phone}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="degree"
                type="text"
                label="Degree"
                multiline
                rows="2"
                placeholder="What is your degree?"
                value={this.state.degree}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="details"
                type="text"
                label="Details"
                multiline
                rows="2"
                placeholder="What is your name?"
                value={this.state.details}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleSubmit}>Save</Button>
          </DialogActions>
        </Dialog>
      </SProfilePage>
    );
  }
}

UserProfile.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
});

export default connect(mapStateToProps, { editUserDetails })(UserProfile);
