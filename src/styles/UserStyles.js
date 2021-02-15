import styled from "styled-components";

export const UserStyless = styled.div`

@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');
  
h1,h2,h3,h4,h5,h6,label,span {
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
  }

.global-container{
    min-height: 100vh;
    margin: 15px;
}

.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  
  .column {
    margin:100px auto ;
    justify-content: center;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }

  .wording {
    margin: auto;
    text-align: center;
    justify-content: center;
  }

  .Logo{
    width: 20%;
    justify-content: center;
  }

  .words {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin-right: 150px;
    font-size: 2em;
    margin-left: 0.5em;
    margin-top: 0.5em;
    margin-right: 2em;
    width: 100%;
  }

.auth-inner {
  width: 450px;
  height: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;

}

.middle{
    text-align: center;
}

.auth-inner2 {
  width: 450px;
  height: 550px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
  

}

.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: none;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label {
  font-weight: 400;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a {
  color: #167bff;
}



/* Extra Small Devices, Phones */ 

  @media only screen and (max-width : 1000px) {
    .column .auth-inner2 {
    width: 450px;
     height: 550px;
    }
  }

  @media only screen and (max-width : 1000px) {
    .column .words {
        display: none;
    }
  }

  @media only screen and (max-width : 1000px) {
    .column .Logo {
        display: none;
    }
  }
`

