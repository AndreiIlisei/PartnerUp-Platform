import styled from "styled-components";

export const SHomePage = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;

  .Logo {
    /*   display: flex;
  justify-content: space-evenly;
  flex-direction: row; */
    margin-right: 150px;
    font-size: 2em;
    margin-left: 0.5em;
    margin-top: 0.5em;
    margin-right: 0.5em;
    width:8%;
  }
`;

export const SHeader = styled.div`
  background-color: #f8f9fb;
  /*   display: flex;
  flex-direction: row; */
`;

export const SNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  font-size: 1.3em;

  .navbarStyle {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    font-size: 1em;
  }
  .logoutBtn {
    text-decoration: none;
    font-size: 0.8em;
    margin: 1em;
    padding: 0.1em;
    border-radius: 10px;
    border-radius: 2px solid;
    background-color: #18bd76;
    font-family: sans-serif;
    font-style: normal;
  }
`;
export const SPartner = styled.div`
  color: #18bd76;
  align-items: center;
  text-align: center;
  font-size: 0.8em;
  margin-bottom: 1em;
  margin-top: 1em;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 6em;
  margin-right: 6em;
  max-width: 100%;
  margin-bottom: 2em;

  .btn-primary {
    text-decoration: none;
    color: black;
    border-radius: 5%;
    height: 2em;
    padding: 0.5em;
    background-color: white;
    border-style: solid;
    border-color: black;
    font-size: 1em;
  }
`;
export const Card = styled.div`
  display: flex;
  justify-content: space-between;

`;
