import React, { Component } from "react";
import PropTypes from "prop-types";
import { logoutUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';


class Loging extends Component {
  // Log out function
  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    return <Button onClick={this.handleLogout}> Logout </Button>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { logoutUser };

Loging.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Loging);
