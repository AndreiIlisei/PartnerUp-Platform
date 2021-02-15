import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography, TextField } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import { UserStyless } from '../../styles/UserStyles'
import Logo from "../../images/Logo.png"

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
        <div class='column'>
        <div className="auth-inner2">
          <form onSubmit={this.handleSubmit} noValidate>
            <h3 className="middle"> Sign Up </h3>
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
            <label>Password Confirmation</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Enter your password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                helperText={errors.confirmPassword}
                error={errors.confirmPassword ? true : false}
                fhandle
              />
            </div>

            <div className="form-group">
            <label>User Name</label>
              <input
                id="handle"
                type="text"
                name="handle"
                className="form-control"
                placeholder="Enter your UserName"
                value={this.state.handle}
                onChange={this.handleChange}
                helperText={errors.handle}
                error={errors.handle ? true : false}
              />
            </div>


            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            <p className="forgot-password text-right">
              Have a account already? <a href="http://localhost:3000/login">Login?</a>
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

export default connect(mapStateToProps, { signupUser })(
  withStyles(styles)(Signup)
);
