import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './styling/main.css';
import './styling/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import Footer from './components/Footer';
import Home from './components/Home';
import EventList from './components/Events';
import BudgetPage from './components/BudgetPage';
import MultiStepForm from './components/MultiStepForm';


import Map from './components/Map.js';

export default function Main() {
  return (
      <Router>
        <div className="homepage">
          <nav className="routeNav navbar navbar-expand-lg navbar-light bg-dark">
            <b>Nash</b>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul className="navbar-nav mr-auto">
                  <li>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="nav-link">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/budget" className="nav-link">
                      Budget
                    </Link>
                  </li>
                  <li>
                    <Link to="/map" className="nav-link">
                      Map
                    </Link>
                  </li>
                  <li>
                    <Link to="/multistepform" className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={EventList} />
            <Route path="/budget" component={BudgetPage} />
            <Route path="/map" component={Map} />
            <Route path="/multistepform" component={MultiStepForm} />
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}
