import styled from "styled-components";
export const SProfilePage = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  .Logo {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin-right: 150px;
    font-size: 2em;
    margin-left: 0.5em;
    margin-top: 0.5em;
    margin-right: 2em;
    width: 9%;
  }
  .padding {
    padding-left: 5px;
  }
  .profileContainer {
    margin-top: 2em;
    border: 1px solid;
    border-radius: 10px;
    padding: 15px;
    background-color: #f8f9fb;
  }
  .rowContainer {
    padding: 1em;
    background-color: #f8f9fb;
  }
  .skillsContainer {
    margin-top: 2em;
    border: 1px solid;
    border-radius: 10px;
    padding: 15px;
    background-color: #f8f9fb;
  }
  .this {
    justify-content: center;
    text-align: center;
  }
  .secondrow {
    color: black;
    text-align: center;
    margin: 10px;
    font-size: 1em;
  }
  .photoEdit {
    margin-top: 2em;
  }
  .profileButton {
    text-decoration: none;
    text-transform: none;
    font-size: 1em;
    font-size: 1em;
    text-align: justify;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    background-color: #f8f9fb;
    color: black;
    background-color: #c9cbff;
    border-color: #c9cbff;
  }
  body {
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  }
  .emp-profile {
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
  }
  .profile-img {
    text-align: center;
  }
  .profile-img img {
    width: 80%;
    height: 100%;
  }
  .profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
  }
  .profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
  }
  .profile-head h5 {
    color: #333;
  }
  .profile-head h6 {
    color: #c9cbff;
  }
  .profile-edit-btn {
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
  }
  .proile-rating {
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
  }
  .proile-rating span {
    color: #495057;
    font-size: 15px;
    font-weight: 600;
  }
  .profile-head .nav-tabs {
    margin-bottom: 5%;
  }
  .profile-head .nav-tabs .nav-link {
    font-weight: 600;
    border: none;
  }
  .profile-head .nav-tabs .nav-link.active {
    border: none;
    border-bottom: 2px solid #c9cbff;
  }
  .profile-work {
    padding: 14%;
    margin-top: -15%;
  }
  .profile-work p {
    font-size: 14px;
    color: black;
    font-weight: 800;
    margin-top: 10%;
  }
  .profile-work a {
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
  }
  .profile-work ul {
    list-style: none;
  }
  .profile-tab label {
    font-weight: 600;
  }
  .profile-tab p {
    font-weight: 600;
    color: #312c51;
  }
`;
export const SNavbar = styled.div`
  background-color: #f8f9fb;
  display: flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  font-size: 1.3em;
  .navbarStyle {
    margin-right: 10em;
    margin-top: 0.5em;
    font-size: 1em;
    padding: 1em;
    text-align: justify;
  }
`;
export const SHeader = styled.div`
  background-color: #f8f9fb;
  display: flex;
  flex-direction: row;
`;
export const ContactInfo = styled.div`
  background-color: #f8f9fb;
  display: flex;
  flex-direction: row;
`;
