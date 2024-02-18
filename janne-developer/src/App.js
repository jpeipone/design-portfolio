import "./App.css";
import React, { useEffect, useState } from "react";
import ApartmentWhale from "./showProjects/apartmentWhale/ApartmentWhale";
import Banner from "./parallax/Banner";

function App() {
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
    { id: 6, name: "asuntovalas7.jpg" },
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
    { id: 11, name: "asuntovalas12.jpg" },
    { id: 1, name: "asuntovalas8.jpg" },
    { id: 0, name: "asuntovalas2.jpg" },
  ];
  const imagesRight2 = [
    { d: 9, name: "asuntovalas9.jpg" },
    { id: 10, name: "asuntovalas11.jpg" },
    { id: 11, name: "asuntovalas12.jpg" },
    { id: 7, name: "asuntovalas8.jpg" },
    { id: 0, name: "asuntovalas2.jpg" },
    { id: 1, name: "asuntovalas1.jpg" },
  ];

  return (
    <div className="App">
      <Banner />

      <div className="parallax-apartment">
        <ApartmentWhale
          images={imagesLeft}
          upOrDown={-1}
          yScroll={yScroll}
          initialY={-233}
          speed={3}
        />
        <ApartmentWhale
          images={imagesCenter}
          upOrDown={1}
          yScroll={yScroll}
          initialY={533}
          speed={0.5}
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
          upOrDown={1}
          yScroll={yScroll}
          initialY={344}
          speed={0.7}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
