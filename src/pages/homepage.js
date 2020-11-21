import React from "react";
import fire from "../firebase";
import { useHistory } from "react-router-dom";
import { LogOutButton, SHeader } from "../styles/Shomepage";
import { SNavbar, SHomePage, SLogo } from "../styles/Shomepage";
import {
  SNavbar1,
  SNavbar2,
  SNavbar3,
  SNavbar4,
  SPartner,
  Cards,
} from "../styles/Shomepage";
import Card from "react-bootstrap/Card";

const HomePage = () => {
  const history = useHistory();

  const handleLogout = () => {
    fire.auth().signOut();
    history.push("/");
  };

  return (
    <SHomePage>
      <SHeader>
        {/* <div className="logoContainer">
            <img src={Logo} className="logo" alt="BorrowIT-logo" /> */}
        {/* </div> */}
        <SLogo>
          <h1>Partner Up</h1>
        </SLogo>
        <SNavbar>
          <SNavbar1>
            <h2>How it Works</h2>
          </SNavbar1>
          <SNavbar2>
            <h2>About Us</h2>
          </SNavbar2>
          <SNavbar3>
            <h2>Blog</h2>
          </SNavbar3>
          <SNavbar4>
            <h2>Profile</h2>
          </SNavbar4>
        </SNavbar>
        <LogOutButton>
          <button onClick={handleLogout}>Log Out</button>
        </LogOutButton>
        {/* <SearchBarPartner>
               <input  className="inputField" value={search} onChange={this.updateSearch} placeholder="Enter item you need..." />
          <button className="searchBtn" onClick={search}>Search</button>
          </SearchBarPartner> */}
      </SHeader>
      <SPartner>
        <h2>Find Your Partner</h2>
        <h3>
          You can browse through the list of other thesis writer and find your
          perfect match
        </h3>
      </SPartner>
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
          </Card.Body>
        </Card>
      </Cards>
    </SHomePage>
  );
};

export default HomePage;
