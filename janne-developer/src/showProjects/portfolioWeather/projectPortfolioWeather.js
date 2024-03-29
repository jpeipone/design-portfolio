import React from "react";
import "./projectPortfolioWeather.css";

const projectPortfolioWeather = () => {
  return (
    <div className="portfolio-weather-project">
      <br />
      <br />
      <br />
      <h2>Project: PortfolioWeather</h2>
      {/*   <img
        src="/images/portfolioWeather-ipad.jpg"
        alt="portfolio Weather ipad"
        className="portfolio-weather-img"
      /> */}
      <div className="images-row-weather">
        <img
          src="/images/phoneInvestorAssets.png"
          alt="phone summary"
          className="phone__db__img__left"
        />
        <img
          src="/images/phoneInvestorDb.png"
          alt="phone assets"
          className="phone__db__img"
        />
      </div>
      <div className="info-how">
        <h3> NoSQL database with authentication</h3>
        <div className="list-and-links">
          <div className="built-container">
            <label className="built-with__label">Website was built with</label>
            <ul className="list">
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>

              <li>Firestore NoSQL</li>
              <li>Firebase Authentication</li>
              <li>Firebase Hosting</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="links-container">
            <label className="built-with__label">Links</label>
            <ul className="list">
              <li>
                <a href="https://investors-database-e9d34.firebaseapp.com/">
                  PortfolioWeather
                </a>
              </li>
              <li>
                <a href="https://github.com/jpeipone/React-Firebase-Portfolio">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default projectPortfolioWeather;
