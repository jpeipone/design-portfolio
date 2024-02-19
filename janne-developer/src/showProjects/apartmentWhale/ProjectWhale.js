import React, { useEffect, useState } from "react";
import "./ProjectWhale.css";
import ApartmentWhale from "../ApartmentWhale";

const ProjectWhale = () => {
  const [yScroll, setYScroll] = useState(0);

  const handleScroll = () => {
    setYScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imagesLeft = [
    { id: 0, name: "asuntovalas2.jpg" },
    { id: 1, name: "asuntovalas1.jpg" },
    { id: 2, name: "asuntovalas3.jpg" },
    { id: 3, name: "asuntovalas4.jpg" },
    { id: 5, name: "asuntovalas6.jpg" },
    { id: 11, name: "asuntovalas11.jpg" },
    { id: 8, name: "asuntovalas10.jpg" },
  ];
  const imagesCenter = [
    { id: 4, name: "asuntovalas5.jpg" },
    { id: 5, name: "asuntovalas6.jpg" },
    { id: 6, name: "asuntovalas7.jpg" },
    { id: 7, name: "asuntovalas8.jpg" },
    { d: 9, name: "asuntovalas9.jpg" },
    { id: 10, name: "asuntovalas11.jpg" },
  ];
  const imagesRight = [
    { id: 8, name: "asuntovalas10.jpg" },
    { id: 9, name: "asuntovalas4.jpg" },
    { id: 10, name: "asuntovalas11.jpg" },
    { id: 11, name: "asuntovalas12.jpg" },
    { id: 6, name: "asuntovalas7.jpg" },
    { id: 7, name: "asuntovalas8.jpg" },
    { id: 111, name: "asuntovalas12.jpg" },
    { id: 1, name: "asuntovalas8.jpg" },
    { id: 0, name: "asuntovalas2.jpg" },
  ];
  const imagesRight2 = [
    { d: 9, name: "asuntovalas9.jpg" },
    { id: 11, name: "asuntovalas11.jpg" },
    { id: 12, name: "asuntovalas12.jpg" },
    { id: 10, name: "asuntovalas10.jpg" },
    { id: 7, name: "asuntovalas8.jpg" },
    { id: 0, name: "asuntovalas2.jpg" },
    { id: 1, name: "asuntovalas1.jpg" },
  ];

  return (
    <div className="showcase-apartment-whale">
      <h2>Project: AsuntoValas.fi</h2>
      <div className="parallax-apartment">
        <ApartmentWhale
          images={imagesLeft}
          upOrDown={-1}
          yScroll={yScroll}
          initialY={-233}
          speed={2.5}
        />
        <ApartmentWhale
          images={imagesCenter}
          upOrDown={1}
          yScroll={yScroll}
          initialY={533}
          speed={0.3}
        />
        <ApartmentWhale
          images={imagesRight}
          upOrDown={-1}
          yScroll={yScroll}
          initialY={-344}
          speed={2}
        />
        <ApartmentWhale
          images={imagesRight2}
          upOrDown={-1}
          yScroll={yScroll}
          initialY={344}
          speed={0.7}
        />
      </div>
      <div className="info-how">
        <h3 className="short-intro__h3">Calculator for rental apartments</h3>
        <div className="list-and-links">
          <div className="built-container">
            <label className="built-with__label">Website was built with</label>
            <ul className="list">
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Firebase Hosting</li>
              <li>Node.js</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="links-container">
            <label className="built-with__label">Links</label>
            <ul className="list">
              <li>
                <a href="https://asuntovalas.fi/">asuntovalas.fi</a>
              </li>
              <li>
                <a href="https://github.com/jpeipone/Rental-Property">GitHub</a>
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

export default ProjectWhale;
