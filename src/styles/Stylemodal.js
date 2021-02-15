import styled from "styled-components";

export const SModale = styled.div`
  display: flex;
  .modalImage {
    width: 333px;
    height: 226px;
    left: -54px;
    top: 0px;
  }
  h1 {
    margin-left: 2em;
    font-weight: bold;
    font-size: 3em;
    line-height: 135.94%;
    margin-bottom: 2em;
  }
  h2 {
    font-weight: bold;
    font-size: 1.5em;
    line-height: 135.94%;
  }
  h3 {
    font-size: 1em;
    line-height: 135.94%;
  }
  .userInfo {
    margin-top: 6em;
    justify-content: space-around;
  }
`;

export const SModalButton = styled.div`
  display: flex;
  .closeBtn {
    background-color: white;
    color: black;
    font-size: 1em;
    height: 3em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 10px;
  }
  .getInTouch {
    color: black;
    background-color: #c8cdfa;
    font-size: 1em;
    height: 3em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #c8cdfa;
    border-radius: 10px;
  }
  .secondrow {
    margin-left: 1em;
    margin-top: 1.5em;
    color: black;
  }
`;
