import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import reportWebVitals from './reportWebVitals';
import MyResume from './Pages/MyResume';
import ContactUs from './Pages/ContactUs';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
        <NavigationBar />
        <Switch>
          <Route exact path="/" >
            <App />
          </Route>
          <Route  path="/resume">
            <MyResume />
          </Route>
          <Route  path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
