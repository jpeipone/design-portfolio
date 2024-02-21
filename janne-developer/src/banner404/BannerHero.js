import { useEffect, useState } from "react";
import "./BannerHero.css";
import EmailIcon from "@mui/icons-material/Email";

const BannerHero = () => {
  const [location, setLocation] = useState({ x: 70, y: 100 });
  const [movement, setMovement] = useState({ x: 1, y: 1 });
  const [contactMe, setContactMe] = useState(false);
  const [thanks, setThanks] = useState("Contact Me");

  useEffect(() => {
    const heightContainer = 450 - 40;
    const windowWidth = window.innerWidth;

    const newLocation = () => {
      setLocation((location) => ({
        x: location.x + 2.4 * movement.x,
        y: location.y + 2.4 * movement.y,
      }));

      //left wall
      if (location.x <= 2) {
        let random = Math.floor(Math.random() * 5) - 2;

        if (random === 0) {
          random = -1;
        }
        setMovement({
          x: 1,
          y: random,
        });
      }
      //right wall
      else if (location.x >= windowWidth - 45) {
        let random = Math.floor(Math.random() * 5) - 2;

        if (random === 0) {
          random = 1;
        }
        setMovement({
          x: -1,
          y: random,
        });
      }

      //up wall
      else if (location.y <= 5) {
        let random = Math.floor(Math.random() * 5) - 2;

        if (random === 0) {
          random = 1.1;
        }
        setMovement({
          x: random,
          y: 1.2,
        });
      }

      //down wall
      else if (location.y >= heightContainer - 5) {
        let random = Math.floor(Math.random() * 5) - 2;
        if (random === 0) {
          random = 1.1;
        }
        setMovement({
          x: random,
          y: -1,
        });
      }
    };

    const intervalId = setInterval(newLocation, 50);

    return () => clearInterval(intervalId);
  }, [location, movement]);

  const handleHeroContact = () => {
    if (!contactMe) {
      setThanks("Thanks!");
    } else {
      setThanks("Contact Me");
    }
    setContactMe(!contactMe);
  };

  return (
    <div className="banner-hero">
      <div className="hero-banner-container">
        <div className="contact-banner">
          <div className="contact__info">
            <div className="contact-text">Hello, my name is</div>
            <div className="contact__name">Janne Peiponen</div>
            <div className="contact__title">- Developer</div>
          </div>
          <button className="contact__btn" onClick={handleHeroContact}>
            {thanks}
          </button>
        </div>
        {contactMe === false ? (
          <div
            className="hero-404-icon"
            style={{
              position: "absolute",
              left: location?.x,
              top: location?.y,
            }}
          >
            <div className="hero-quest"></div>
          </div>
        ) : (
          <div className="red-box">
            {/*    <div className="red-icon" /> */}
            <EmailIcon style={{ fontSize: "2.5rem", fill: "red" }} />{" "}
            <div className="excellent-choice">janne.peiponen@hotmail.com</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerHero;
