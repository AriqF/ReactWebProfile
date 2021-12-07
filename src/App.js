import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import './index.scss';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import MyResume from './Pages/MyResume';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import ScrollToTop from './Functions/ScrollToTop';
import NotFound from'./Pages/NotFound';
import LaraTalesDet from './Pages/ProjectDetails/LaraTalesDet';
import ManGoDet from './Pages/ProjectDetails/ManGoDet';

function App(){

  useEffect(() => {
    AOS.init();
    document.title = "Home | AFR Web Profile";
  });
  return(
    <>
      <HashRouter basename="/">
        <ScrollToTop>
          <NavigationBar />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/resume">
              <MyResume />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/laratales-details">
              <LaraTalesDet />
            </Route>
            <Route path="/mango-details">
              <ManGoDet />
            </Route>


            
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </ScrollToTop>

      </HashRouter>
    </>
  );
}

export default App;
