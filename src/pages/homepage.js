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
} from "../styles/Shomepage";

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
        <h3>You can browse through the list of other thesis writer and find your perfect match</h3>
      </SPartner>
    </SHomePage>
  );
};

export default HomePage;
