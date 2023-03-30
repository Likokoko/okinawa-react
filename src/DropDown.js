import { useState, useEffect, useRef } from "react";
import FullItinerary from "./itinerary/Full-itinerary.js";

import Meals from "./Meals";
import Activities from "./Activities";

const Dropdown = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [audioPlay, setAudioPlay] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPos(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    color: scrollPos < 600 ? "white" : "black",
  };

  const AudioStyle = {
    color: scrollPos < 50 ? "white" : "black",
  };
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  const ToggleAudio = () => {
    const audio = document.getElementById("myAudio");
    if (audio.paused) {
      audio.play();
      setAudioPlay(true);
      console.log("playing");
    } else {
      audio.pause();
      setAudioPlay(false);
    }
  };

  return (
    <section className="Dropdown">
      <div className="DropUl">
        <button
          className="Dropli"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={navbarStyle}
        >
          Full Itinerary
          {isHovered && <FullItinerary />}
        </button>
        <button className="Dropli" style={navbarStyle} >
          Fee
        </button>
        <button className="Dropli" style={navbarStyle}>
          Food
        </button>
        <button className="Dropli" style={navbarStyle}>
          Fun
        </button>
        <i className="fa-brands fa-youtube" style={navbarStyle}></i>
        <i className="fa-solid fa-heart" style={navbarStyle}></i>
        <i className="fa-solid fa-film" style={navbarStyle}></i>
      </div>

      <button className="audioPlay" onClick={ToggleAudio} style={AudioStyle}>
        {audioPlay ? (
          <i className="fa-solid fa-pause"></i>
        ) : (
          <i className="fa-solid fa-play"></i>
        )}
      </button>
    </section>
  );
};

export default Dropdown;
