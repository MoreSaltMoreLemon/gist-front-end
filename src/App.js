import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/onLoad.css";

import AppHeader from "./containers/AppHeader";
import AppBody from "./containers/AppBody";
import AppFooter from "./containers/AppFooter";
import HomePage from "./components/HomePage";
import ErrorModal from "./components/ErrorModal";

const App = () => {
  const [hideHerokuNotice, setHideHerokuNotice] = useState(false);
  const [fadeHerokuNotice, setFadeHerokuNotice] = useState(false);

  const hideOnClick = () => setHideHerokuNotice(true);

  useEffect(() => {
    let fadeTimer = setTimeout(() => {
      setFadeHerokuNotice(true)
      setTimeout(() => setHideHerokuNotice(true), 1000)
    }, 3000);


    return () => {
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div className="app-container">
      <div
        className={`onload-heroku-notice ${fadeHerokuNotice ? "hide" : ""} ${
          hideHerokuNotice ? "hidden" : ""
        }`}
        onClick={hideOnClick}
      >
        <div className="heroku-notice-container">
          <h1>Welcome to Roughly!</h1>
          <p>The backend of this app is hosted on Heroku.</p>
          <p>Heroku may take 10-20 seconds to wake up.</p>
          <p>Please be patient, and I hope you enjoy Roughly!</p>
          <p>(click to hide)</p>
        </div>
      </div>
      <Router>
        <ErrorModal />
        <AppHeader />
        <Switch>
          <Route path="/Roughly.Recipes/" exact component={HomePage} />
          <Route component={AppBody} />
        </Switch>
        <AppFooter />
      </Router>
    </div>
  );
};

export default App;
