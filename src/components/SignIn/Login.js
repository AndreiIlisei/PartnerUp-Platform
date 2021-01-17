import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Typography, TextField } from "@material-ui/core";
import "./form.css";


// Redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';
import { propTypes } from "react-bootstrap/esm/Image";


const styles = {
    customError: {
        color: 'red',
        fontSize: '0.8rem'
    }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  } 

    handleSubmit = (event) => {
    event.preventDefault();
    const userData = { 
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
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
          <div className="form-inputs">
            <label className="form-label"> Email </label>
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
          </div>

          <div className="form-inputs">
            <label className="form-label"> Password </label>
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
          </div>

            {errors.general && (
                <Typography>
                    {errors.general}
                </Typography>

            )}
          <button className="form-input-btn" type="submit">
            {" "}
            Login{" "}
          </button>
          <span className="form-input-login">
            You dont have an account? Register <a href="localhost:3000/signup"> here </a>{" "}
          </span>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI:  PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(Login)