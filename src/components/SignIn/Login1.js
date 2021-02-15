import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography, TextField } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserStyless } from '../../styles/UserStyles'
import Logo from "../../images/Logo.png"


// Redux stuff
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

const styles = {
  customError: {
    color: "red",
    fontSize: "0.8rem",
  },
};

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
    if (nextProps.UI.errors) {
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
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;

    return (
      <UserStyless>
    <div className="global-container">
      <div className="row">
        <div className="column">
          <div className="wording">
          <img src={Logo} className="Logo"></img>
              <h3 className="words">
                  Partner up, we are here to help you find the best partner for your thesis
              </h3>
              
          </div>
        </div>
        <div className="column">
    <div className="auth-inner">
      <form onSubmit={this.handleSubmit} noValidate>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email Adress</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleChange}
            helperText={errors.email}
            error={errors.email ? true : false}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleChange}
            helperText={errors.password}
            error={errors.password ? true : false}
          />
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        {errors.general && <Typography>{errors.general}</Typography>}

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Create a new account <a href="http://localhost:3000/signup">here</a>
        </p>
      </form>
      </div>
      </div>
      </div>
      </div>
      </UserStyless>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
