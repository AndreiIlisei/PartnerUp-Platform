<<<<<<< Updated upstream
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import HomePage from './pages/homepage';
import handleProfile from './pages/UserProfile';
=======
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
>>>>>>> Stashed changes

// Pages
import Home from "./pages";
import HomePage from "./pages/homepage";
import Modal from "./components/SignIn/Modal";

// Components
import Signup from "./components/SignIn/signup";
import Login from "./components/SignIn/login";
import AuthRoute from "./util/AuthRoute";

//Redux
import { Provider } from "react-redux";
import store from "./redux/reducers/store";
import { SET_AUTHENTICATED } from "./redux/reducers/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 10000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
<<<<<<< Updated upstream
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/homepage" component={HomePage} />
        <Route path="/UserProfile" component={handleProfile} />
      </Switch>
    </Router>
=======
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} exact />
          <Route exact path="/homepage" component={HomePage} />
          <AuthRoute
            exact
            path="/login"
            component={Login}
          />
          <AuthRoute
            exact
            path="/signup"
            component={Signup}
          />
        </Switch>
      </Router>
    </Provider>
>>>>>>> Stashed changes
  );
}

export default App;
