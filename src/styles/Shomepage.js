import styled from "styled-components";

export const SHomePage = styled.div`
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

  .profileContainer {
    margin
  }
`;

export const SHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: calc(100% - 20px);
  background-color: #f8f9fb;
  font-size: 1.2em;
`;

export const SPartner = styled.h3`
  color: black;
  align-items: center;
  text-align: center;
  font-size: 0.8em;
  margin-bottom: 3em;
  margin-top: 5em;
  font-style: bold;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 6em;
  margin-right: 6em;
  max-width: 100%;
  margin-bottom: 2em;

  .CardsStyle {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 6em;
    margin-right: 6em;
    max-width: 100%;
  }
  .Show-Grid {
    margin-bottom: 2em;
  }
  .btn-primary {
    text-decoration: none;
    color: black;
    border-radius: 5%;
    height: 2em;
    padding: 0.5em;
    background-color: #f8f9fb;
    border-style: solid;
    border-color: black;
    font-size: 1em;
  }
  h3 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    align-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SOptions = styled.div`
  margin: 0 auto;
  display: flex;
  margin-left: 10em;
  flex-direction: row;
  text-decoration: none;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  border: 3px;
  padding: 4px;
  font-size: 22px;
  display: inline-block;
  margin-bottom: 30px;
  border-color: #c9cbff;
  align-items: center;

  .select {
    margin-right: 12px;
    font-size: 20px;
    background-color: #f8f9fb;
    border-radius: 5px;
    border-color: #c9cbff;
  }
  .searchBtn {
    display: flex;
    flex-direction: row;
    padding: 12px;
    display: inline-block;
    width: 100px;
    color: black;
    background: #c8cdfb;
    border-radius: 1em;

    /* Inside Auto Layout */
  }
`;
