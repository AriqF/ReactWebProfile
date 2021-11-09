import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import MyResume from './Pages/MyResume';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';

function App(){
  return(
    <>
      <Router basename="/">
        <NavigationBar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route  path="/resume">
            <MyResume />
          </Route>
          <Route  path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
