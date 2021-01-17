import React, { Component } from "react";
import PropTypes from "prop-types";
import { LogOutButton, SHeader } from "../styles/Shomepage";
import { SNavbar, SHomePage, SLogo } from "../styles/Shomepage";
import {
  SPartner,
  Cards,
} from "../styles/Shomepage";
import Card from "react-bootstrap/Card";
import Logo from "../images/Logo.png";
import { logoutUser } from "../redux/actions/userActions"
import { connect } from "react-redux";



class HomePage extends Component {

  // Log out function
  handleLogout = () => {
    this.props.logoutUser();
  }

  render() {
  return (
    <SHomePage>
      <SHeader>
          <img src={Logo} className="Logo" alt="BorrowIT-logo" />
        <SNavbar>
          <h2 className="navbarStyle">How it Works</h2>
          <h2 className="navbarStyle">About Us</h2>
          <h2 className="navbarStyle">Blog</h2>
          <button onClick={() => (window.location.href = "profile")}> Profile</button>
          <button
          className="logoutBtn" 
          onClick={this.handleLogout}>
            Log Out
          </button>
        </SNavbar>
        {/* <SearchBarPartner>
               <input  className="inputField" value={search} onChange={this.updateSearch} placeholder="Enter item you need..." />
          <button className="searchBtn" onClick={search}>Search</button>
          </SearchBarPartner> */}
      </SHeader>
      <SPartner>
        <h3>Find Your Partner</h3>
        <h3>
          Browse through the list of other thesis writer and find your perfect
          match
        </h3>
      </SPartner>

        {/* Cards with the invented profiles mockup */}
      <Cards>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
          <Card.Body>
            <Card.Title>Marie</Card.Title>
            <Card.Text>
              BSC in International Business, CBS, 20yrs old, Copenhagen
            </Card.Text>
            <a href="#" className="btn-primary">
              See More
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
          <Card.Body>
            <Card.Title>Max</Card.Title>
            <Card.Text>BSC in Finance, CBS, 25yrs old, Copenhagen</Card.Text>
            <a href="#" className="btn-primary">
              See More
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
          <Card.Body>
            <Card.Title>Fiona</Card.Title>
            <Card.Text>MSC in EBusiness, CBS, 24yrs old, Copenhagen</Card.Text>
            <a href="#" className="btn-primary">
              See More
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
          <Card.Body>
            <Card.Title>Max</Card.Title>
            <Card.Text>BSC in Finance, CBS, 25yrs old, Copenhagen</Card.Text>
            <a href="#" className="btn-primary">
              See More
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <Card.Body>
            <Card.Title>Max</Card.Title>
            <Card.Text>BSC in Finance, CBS, 25yrs old, Copenhagen</Card.Text>
            <a href="#" className="btn-primary">
              See More
            </a>
          </Card.Body>
        </Card>
      </Cards>
    </SHomePage>
  );
};
};


const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { logoutUser };

HomePage.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapActionsToProps)(HomePage);