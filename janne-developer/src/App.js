import "./App.css";
import React, { useEffect, useState } from "react";

import ProjectWhale from "./showProjects/apartmentWhale/ProjectWhale";
import BannerHero from "./banner404/BannerHero";

function App() {
  return (
    <div className="App">
      <BannerHero />

      <ProjectWhale />
    </div>
  );
}

export default App;
