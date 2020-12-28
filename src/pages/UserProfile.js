import React from "react";
import { useHistory } from "react-router-dom";
import fire from "../firebase";
import { SProfilePage } from "../styles/SProfilePage";
import Logo from "../images/Logo.png";

const UserProfile = () => {
  const history = useHistory();

  const handleLogout = () => {
    fire.auth().signOut();
    history.push("/");
  };
  return (
    <SProfilePage>
      <img src={Logo} className="Logo" alt="BorrowIT-logo" />
      <div>
        <h1>This is your profile page</h1>
        <button className="logoutBtn" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </SProfilePage>
  );
};

export default UserProfile;