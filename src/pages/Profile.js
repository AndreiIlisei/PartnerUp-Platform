import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";



// Styles/Components
import UserProfile from "../components/FirebaseComponents/UserProfile";
import Dropp from "../components/Dropdown/dropDown";
import { ProfileFirebase } from "../styles/ProfileFirebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Scream from "../components/FirebaseComponents/Scream.js";
//Redux Stuff
import { connect } from "react-redux";
import { uploadImage } from "../redux/actions/userActions";
//MUI STUFF
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
//Icons
import EditIcon from "@material-ui/icons/Edit";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";
import { ReactComponent as Website } from '../images/website.svg';

class Profile extends Component {
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  // Function so screams will be retreived from FIREBASE
  state = {
    screams: null,
  };

  componentDidMount() {
    axios
      .get("/screams")
      .then((res) => {
        this.setState({
          screams: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    // Screams loading and posted
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map((scream) => (
        <Scream key={scream.screamId} scream={scream} />
      ))
    ) : (
      <p>Loading..</p>
    );

    const {
      classes,
      user: {
        credentials: {
          handle,
          imageUrl,
          bio,
          website,
          location,
          name,
          nickName,
          email,
          position,
          phone,
          school,
          degree,
          master,
          website3,
          website4,
        },
        loading,
        authenticated,
      },
    } = this.props;

    let profileMarkup = !loading && authenticated && (
      <div>
        <Dropp />
        <ProfileFirebase>
          <div className="container">
            <div className="main-body">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        {/* Edit Buttons */}
                        {/* Image EDIT */}
                        <img src={imageUrl} alt="profile" className="circle" />
                        <input
                          type="file"
                          id="imageInput"
                          hidden="hidden"
                          onChange={this.handleImageChange}
                        />
                        <div className="editing">
                          <Tooltip
                            title="Edit profile picture"
                            placement="bottom"
                          >
                            <IconButton
                              onClick={this.handleEditPicture}
                              className="button"
                            >
                              <EditIcon />
                            </IconButton>
                          </Tooltip>

                          {/* Go Back Button */}
                          <Tooltip title="Go Back" placement="top">
                            <IconButton
                              onClick={() =>
                                (window.location.href = "homepage")
                              }
                            >
                              <KeyboardReturn></KeyboardReturn>
                            </IconButton>
                          </Tooltip>

                          {/* Edit User Information */}
                          <UserProfile />
                        </div>

                        <div className="mb-3">
                          {/* Username --- Cannot be changed */}
                          <MuiLink
                            component={Link}
                            to={`/users/${handle}`}
                            variant="h4"
                            className="name-profile"
                          >
                            {handle}
                          </MuiLink>

                          {/* Email */}
                          <p className="text-secondary mb-1">
                            {email && (
                              <Typography variant="body2">{email}</Typography>
                            )}
                          </p>

                          {/* Bio-- Some info about the user  */}
                          <p className="text-muted font-size-sm">
                            {bio && (
                              <Typography variant="body2">{bio}</Typography>
                            )}
                          </p>

                          <button className="btn btn-primary">Follow</button>
                          <button className="btn btn-outline-primary">
                            Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span className="icon">
                            <Website style={{ width: "24px", height:" 24px" }} />
                      </span>   
                      <span className="text">
                            Website
                      </span>   
                        <span className="text-secondary">
                          {website && (
                            <Fragment>
                              <a
                                href={website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {" "}
                                {website}
                              </a>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6></h6>
                        <span className="text-secondary">
                          {website && (
                            <Fragment>
                              <a
                                href={website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {" "}
                                {website}
                              </a>
                            </Fragment>
                          )}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6></h6>
                        <span className="text-secondary">
                          {website && (
                            <Fragment>
                              <a
                                href={website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {" "}
                                {website}
                              </a>
                            </Fragment>
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {name && (
                            <Typography variant="body2">{name}</Typography>
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">School</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {school && (
                            <Typography variant="body2">{school}</Typography>
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Education Level</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {master && (
                            <Typography variant="body2">{master}</Typography>
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Educational programme</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {master && (
                            <Typography variant="body2">{master}</Typography>
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {location && (
                            <Fragment>
                              <span>{location}</span>
                            </Fragment>
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Work Place</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {position && (
                            <Typography variant="body2">{position}</Typography>
                          )}
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Phone Number</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {phone && (
                            <Typography variant="body2">{phone}</Typography>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2 Small Containers */}
                  <div className="row gutters-sm">
                    <div className="col-sm-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body"></div>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          {/* Screams to be see */}
                          <div> {recentScreamsMarkup} </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ProfileFirebase>
      </div>
    );

    return profileMarkup;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { uploadImage };

Profile.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
