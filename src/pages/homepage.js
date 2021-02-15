import React, { Component } from "react";
import PropTypes from "prop-types";

// Components/ Styles
import { SHomePage, SOptions } from "../styles/Shomepage";
import { SPartner } from "../styles/Shomepage";


// Redux Stuff
import { logoutUser } from "../redux/actions/userActions"
import { connect } from "react-redux";

// Pages
import { Database } from "./database";
import Dropp from "../components/Dropdown/dropDown"


class HomePage extends Component {

    render(){
  return (
    <SHomePage>
      <Dropp/>
      <SPartner>
        <h3>Find Your Partner</h3>
        <h3>
          Browse through the list of other thesis writer and find your perfect
          match
        </h3>
      </SPartner>
      <SOptions>
        <select class="select" data-mdb-filter="true">
          <option value="1"> Resarch Topic</option>
          <option value="2"></option>
          <option value="3"></option>
        </select>
        <select class="select" data-mdb-filter="true">
          <option value="1"> University</option>
          <option value="2">Copenhagen Business School</option>
          <option value="3">IT University of Copenhagen</option>
          University{" "}
        </select>
        <select class="select" data-mdb-filter="true">
          <option value="1">Programme</option>
          <option value="2">Finance</option>
          <option value="3">International Business</option>
          <option value="3">Digitalization</option>
          <option value="3">Accounting</option>
          <option value="3">Strategy and Innovation</option>
          <option value="3">Communication</option>
        </select>
        <select class="select" data-mdb-filter="true">
          <option value="1">Degree</option>
          <option value="3">Master</option>
          <option value="3">Bachelor</option>
        </select>
        <select class="select" data-mdb-filter="true">
          <option value="1">Language</option>
          <option value="3">English</option>
          <option value="3">Danish</option>
        </select>
        <button className="searchBtn">Search</button>
      </SOptions>
      <Database />
    </SHomePage>
  );
}};

const mapStateToProps = (state) => ({
    user: state.user,
  });
  
  const mapActionsToProps = { logoutUser };
  
  HomePage.propTypes = {
    logoutUser: PropTypes.func.isRequired
  };
  
  export default connect(mapStateToProps, mapActionsToProps)(HomePage);