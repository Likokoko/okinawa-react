import { useState } from "react";
import itinerary from '../itinerary/itinerary'
import Schedule from "../itinerary/Schedule";

const FullItinerary = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showFullItinerary, setShowFullItinerary] = useState(true);
  const [currentDay, setCurrentDay] = useState("Day 1 (6/2)");
  const handleClick = (value) => {
    setCurrentDay(value);
    setShowSchedule(true);
    setShowFullItinerary(false);
  };

  const handleOff = (value) => {
    setShowSchedule(false);
    setShowFullItinerary(true);
  };

  return (
    <div className="FullItinerary animate__animated animate__bounceIn">
      {showFullItinerary && (
        <>
          <a
            href="#"
            className="photo"
            onClick={() => handleClick("Day 1 (6/2)")}
          >
            <h1 className="dates">Day 1</h1>
            <img src="./photo/aqua.jpeg" alt="bridge" />

            <a
              href="https://visitokinawajapan.com/"
              target="_blank"
              id="author"
            >
              必去鯨鯊海洋博物館
            </a>
          </a>

          <a
            href="#"
            className="photo"
            onClick={() => handleClick("Day 2 (6/3)")}
          >
            <h1 className="dates">Day 2</h1>
            <img src="./photo/dive.webp" alt="bridge" />

            <a
              href="https://visitokinawajapan.com/"
              target="_blank"
              id="author"
            >
              亞洲唯一深海藍洞潛水
            </a>
          </a>

          <a
            href="#"
            className="photo"
            onClick={() => handleClick("Day 3 (6/4)")}
          >
            <h1 className="dates">Day 3</h1>
            <img src="./photo/cave.jpg" alt="bridge" />

            <a
              href="https://visitokinawajapan.com/"
              target="_blank"
              id="author"
            >
              深入地底鐘乳石探險
            </a>
          </a>

          <a
            href="#"
            className="photo"
            onClick={() => handleClick("Day 4 (6/5)")}
          >
            <h1 className="dates">Day 4</h1>
            <img src="./photo/mallInside.jpg" alt="bridge" />

            <a
              href="https://visitokinawajapan.com/"
              target="_blank"
              id="author"
            >
              超激outlet大血拼
            </a>
          </a>

          <a
            href="#"
            className="photo"
            onClick={() => handleClick("Day 5 (6/6)")}
          >
            <h1 className="dates">Day 5</h1>
            <img src="./photo/street.jpg" alt="bridge" />
            <a
              href="https://visitokinawajapan.com/"
              target="_blank"
              id="author"
            >
              必敗國際通電車遊
            </a>
          </a>
        </>
      )}

      {showSchedule && (
        <Schedule
          itinerary={itinerary}
          currentDay={currentDay}
          handleOff={handleOff}
        />
      )}
    </div>
  );
};

export default FullItinerary;
