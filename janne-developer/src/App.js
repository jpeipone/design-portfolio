import "./App.css";
import React, { useEffect, useState } from "react";

import ProjectWhale from "./showProjects/apartmentWhale/ProjectWhale";
import BannerHero from "./banner404/BannerHero";
import ProjectPortfolioWeather from "./showProjects/portfolioWeather/projectPortfolioWeather";

function App() {
  return (
    <div className="App">
      <BannerHero />

      <ProjectWhale />

      <ProjectPortfolioWeather />
    </div>
  );
}

export default App;
