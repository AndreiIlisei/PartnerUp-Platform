import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Redux Stuff
import { connect } from "react-redux";
import { editUserDetails } from "../../redux/actions/userActions";

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
import { TextField } from "@material-ui/core";


class UserProfile extends Component {
  state = {
    bio: "",
    website: "",
    location: "",
    name: "",
    nickName: "",
    email: "",
    position: "",
    phone: "",
    school: "",
    degree: "",
    master: "",
    website3: "",
    website4: "",
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
    this.mapUserDetailsToState(this.props.credentials);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const userDetails = {
      bio: this.state.bio,
      website: this.state.website,
      location: this.state.location,
      name: this.state.name,
      nickName: this.state.nickName,
      email: this.state.email,
      position: this.state.position,
      phone: this.state.phone,
      school: this.state.school,
      degree: this.state.degree,
      master: this.state.master,
      website3: this.state.website3,
      website4: this.state.website4,
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
      bio: credentials.bio ? credentials.bio : "",
      website: credentials.website ? credentials.website : "",
      location: credentials.location ? credentials.location : "",
      name: credentials.name ? credentials.name : "",
      nickName: credentials.nickName ? credentials.nickName : "",
      email: credentials.email ? credentials.email : "",
      position: credentials.position ? credentials.position : "",
      phone: credentials.phone ? credentials.phone : "",
      school: credentials.school ? credentials.school : "",
      degree: credentials.degree ? credentials.degree : "",
      master: credentials.master ? credentials.master : "",
      website3: credentials.website3 ? credentials.website3 : "",
      website4: credentials.website4 ? credentials.website4 : ""
    });
  };

  render() {
    return (
      <Fragment>
        <Tooltip title="Edit details" placement="top">
          <IconButton onClick={this.handleOpen}>
            <EditIcon />
          </IconButton>
        </Tooltip>

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
                name="bio"
                type="text"
                label="Short Description"
                multiline
                rows="2"
                placeholder="Tell us about you?"
                value={this.state.bio}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="website"
                type="text"
                label="Facebook"
                multiline
                rows="2"
                placeholder="Link to you Facebook"
                value={this.state.website}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="location"
                type="text"
                label="Address"
                multiline
                rows="2"
                placeholder="Where do you live?"
                value={this.state.location}
                onChange={this.handleChange}
                fullWidth
              />
                <TextField
                name="name"
                type="text"
                label="Full Name"
                multiline
                rows="2"
                placeholder="What is your name?"
                value={this.state.name}
                onChange={this.handleChange}
                fullWidth
              />
                <TextField
                name="nickName"
                type="text"
                label="Nickname"
                multiline
                rows="2"
                placeholder="How people call you?"
                value={this.state.nickName}
                onChange={this.handleChange}
                fullWidth
              />
                <TextField
                name="email"
                type="text"
                label="Email"
                multiline
                rows="2"
                placeholder="What is your email address?"
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth
              />
                <TextField
                name="position"
                type="text"
                label="Position"
                multiline
                rows="2"
                placeholder="What is your position?"
                value={this.state.position}
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
                name="school"
                type="text"
                label="School"
                multiline
                rows="2"
                placeholder="What school do you study at?"
                value={this.state.school}
                onChange={this.handleChange}
                fullWidth
              />
                <TextField
                name="degree"
                type="text"
                label="Subject"
                multiline
                rows="2"
                placeholder="What are you studying?"
                value={this.state.degree}
                onChange={this.handleChange}
                fullWidth
              />
                <TextField
                name="master"
                type="text"
                label="Education Level"
                multiline
                rows="2"
                placeholder="Master or Bachelor?"
                value={this.state.master}
                onChange={this.handleChange}
                fullWidth
              />
                <TextField
                name="website3"
                type="text"
                label="Instagram"
                multiline
                rows="2"
                placeholder="What is your instagram profile?"
                value={this.state.website3}
                onChange={this.handleChange}
                fullWidth
              />
                <TextField
                name="website4"
                type="text"
                label="Github"
                multiline
                rows="2"
                placeholder="What is your github page?"
                value={this.state.website4}
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
      </Fragment>
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
