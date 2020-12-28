import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import HomePage from './pages/homepage';
import handleProfile from './pages/UserProfile';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/homepage" component={HomePage} />
        <Route path="/UserProfile" component={handleProfile} />
      </Switch>
    </Router>
  );
}

export default App;