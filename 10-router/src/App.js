import React from "react";
// import react router stuff
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <h1>Welcome to ACME Hardware</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutUsPage />
          </Route>
          <Route exact path="/contact">
            <ContactUsPage />
          </Route>
        </Switch>

        <div>
          <h3>(C) Paul Chor 2020</h3>
        </div>
      </div>
    </Router>
  );
}

export default App;
