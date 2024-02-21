import "./App.css";
import React, { useEffect, useState } from "react";

import ProjectWhale from "./showProjects/apartmentWhale/ProjectWhale";
import BannerHero from "./banner404/BannerHero";
import ProjectPortfolioWeather from "./showProjects/portfolioWeather/projectPortfolioWeather";
import MeIntro from "./meIntro/MeIntro";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerHero />

      <ProjectWhale />
      <ProjectPortfolioWeather />
      <MeIntro />
    </div>
  );
}

export default App;
