import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles'
import { Typography, TextField } from "@material-ui/core";
import "./form.css";
import PropTypes from "prop-types";

//Redux Stuff
import { connect } from "react-redux";
import { signupUser } from "../../redux/actions/userActions";

const styles = { 
  customError: {
    color: "red",
    fontSize: "0.8rem",
  },
};

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,
    };
    this.props.signupUser(newUserData, this.props.history);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes, UI: { loading }} = this.props;
    const { errors } = this.state;

    return (
      <div className="form-container">
        <form className="form" onSubmit={this.handleSubmit} noValidate>
          <TextField
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleChange}
            helperText={errors.email}
            error={errors.email ? true : false}
          />

          <TextField
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleChange}
            helperText={errors.password}
            error={errors.password ? true : false}
          />

          <TextField
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            className="form-input"
            placeholder="Enter your password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            helperText={errors.confirmPassword}
            error={errors.confirmPassword ? true : false}
            fhandle
          />

          <TextField
            id="handle"
            type="text"
            name="handle"
            className="form-input"
            placeholder="Enter your UserName"
            value={this.state.handle}
            onChange={this.handleChange}
            helperText={errors.handle}
            error={errors.handle ? true : false}
          />

          {errors.general && (
            <Typography variant="body2" className={classes.customError}>
              {errors.general}
            </Typography>
          )}

          <button className="form-input-btn" type="submit">
            SignUp
          </button>
          <span className="form-input-login">
            You dont have an account? Register <a href="#"> here </a>
          </span>
        </form>
      </div>
    );
  }
}

signupUser.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps,{ signupUser })(withStyles(styles)(Signup));
