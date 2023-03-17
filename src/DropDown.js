import { useState } from "react";
import FullItinerary from "./Full-itinerary";
import Expense from "./Expense";
import Meals from "./Meals";
import Activities from "./Activities";

const Dropdown = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [audioPlay, setAudioPlay] = useState(false);
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
        >
          Full Itinerary
          {isHovered && <FullItinerary />}
        </button>
        <button className="Dropli">Fee</button>
        <button className="Dropli">Food</button>
        <button className="Dropli">Fun</button>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-film"></i>
      </div>

      <button className="audioPlay" onClick={ToggleAudio}>
        {audioPlay ? (
          <i class="fa-solid fa-pause"></i>
        ) : (
          <i class="fa-solid fa-play"></i>
        )}
      </button>
    </section>
  );
};

export default Dropdown;
