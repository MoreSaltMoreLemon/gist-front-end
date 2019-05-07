import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import AppHeader from "./containers/AppHeader";
import AppBody from "./containers/AppBody";
import AppFooter from "./containers/AppFooter";
import HomePage from "./components/HomePage";
import ErrorModal from "./components/ErrorModal";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <ErrorModal />
          <AppHeader />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route component={AppBody} />
          </Switch>
          <AppFooter />
        </Router>
      </div>
    );
  }
}

export default App;
