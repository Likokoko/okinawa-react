import React, { useState, useEffect } from "react";
import FullItinerary from "./itinerary/Full-itinerary.js";

const Dropdown = ({ handleDropDownClick }) => {
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

  const isMobile = scrollPos < 600;
  const commonStyle = {
    borderStyle: isMobile ? "none" : "outset",
    borderColor: isMobile ? "none" : "lightgrey",
    borderRadius: isMobile ? "0px" : "15px",
    margin: isMobile ? "15px" : "5px",
  };
  const navbarStyle = {
    ...commonStyle,
    color: isMobile ? "white" : "black",
    margin: isMobile ? "15px" : "5px",
  };
  const iconStyle = {
    ...commonStyle,
    color: isMobile ? "white" : "black",
    fontSize: isMobile ? "xx-large" : "x-large",
  };
  const audioStyle = {
    color: scrollPos < 50 ? "white" : "black",
  };

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  const toggleAudio = () => {
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
      <div
        className="DropUl animate__animated animate__backInRight"
        style={{
          width: isMobile ? "95%" : "10%",
          flexDirection: isMobile ? "row" : "column",
          right: isMobile ? "10px" : "-1px",
        }}
      >
        <button
          className="Dropli"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={navbarStyle}
        >
          Full Itinerary
          {isHovered && <FullItinerary />}
        </button>
        <button
          className="Dropli Fee"
          style={navbarStyle}
          onClick={handleDropDownClick}
        >
          Fee
        </button>
        <button className="Dropli" style={navbarStyle}>
          Food
        </button>
        <button className="Dropli" style={navbarStyle}>
          Fun
        </button>
        <a
          href="https://www.youtube.com/watch?v=0chpzwXUewU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-youtube" style={iconStyle}></i>
        </a>
        <i className="fa-solid fa-heart" style={iconStyle}></i>
        <a
          href="https://www.klook.com/zh-TW/car-rentals/city/12571-okinawa-car-rentals/?gclid=CjwKCAjw5pShBhB_EiwAvmnNVyh6PJD1tsJnKyQ8aIKospWl73-T6OzBCMvXFrnj99m_nEJFmMGORhoC-QcQAvD_BwE&gclsrc=aw.ds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-film" style={iconStyle}></i>
        </a>
      </div>
      <button className="audioPlay" onClick={toggleAudio} style={audioStyle}>
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
