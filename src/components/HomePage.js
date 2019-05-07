import React from "react";
import bg1 from "../images/bg1_compressed.jpg";
import "../css/homePage.css";

const HomePage = props => {
  return (
    <div className="home-page">
      <header className="home-header">
        <img className="splash-image" src={bg1} />
      </header>
      <div className="home-description">
        <ul className="description-points">
          <li className="description-point">
            <h1 className="description-point-title"><i className="material-icons button-icon md-dark">create</i><span> </span>Relationships</h1>
            <p>Ratios are the heart of cooking. Focus on the relationships between ingredients rather than on measurements.</p>
          </li>
          <li className="description-point">
            <h1 className="description-point-title"><i className="material-icons button-icon md-dark">create</i><span> </span>Resize</h1>
            <p>Easily resize your recipes for whatever your needs are!</p>
          </li>
          <li className="description-point">
            <h1 className="description-point-title"><i className="material-icons button-icon md-dark">create</i><span> </span>Share</h1>
            <p>Show off your amazing creations!</p>
          </li>
          <li className="description-point">
            <h1 className="description-point-title"><i className="material-icons button-icon md-dark">create</i><span> </span>Use</h1>
            <p>Easily incorporate other user's recipes into your own dishes!</p>
          </li>
        </ul>
      </div>
      <footer>

      </footer>
    </div>
  );
};

export default HomePage;
