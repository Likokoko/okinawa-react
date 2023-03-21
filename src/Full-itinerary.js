import { useState } from "react";
import itinerary from "./itinerary";
import Schedule from "./Schedule";

const FullItinerary = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showFullItinerary, setShowFullItinerary] = useState(true);

  const handleClick = () => {
    setShowSchedule(true);
    setShowFullItinerary(false);
  };

  return (
    <div className="FullItinerary">
      {showFullItinerary && (
        <>
          <a href="#" className="photo" onClick={handleClick}>
            <h1 className="dates">Day 1</h1>
            <img src="aqua.jpeg" alt="bridge" />

            <a
              href="https://visitokinawajapan.com/"
              target="_blank"
              id="author"
            >
              必去鯨鯊海洋博物館
            </a>
          </a>

          <a href="#" className="photo" onClick={handleClick}>
            <h1 className="dates">Day 2</h1>
            <img src="dive.webp" alt="bridge" />

            <a
              href="https://visitokinawajapan.com/"
              target="_blank"
              id="author"
            >
              亞洲唯一深海藍洞潛水
            </a>
          </a>

          <a href="#" className="photo" onClick={handleClick}>
            <h1 className="dates">Day 3</h1>
            <img src="cave.jpg" alt="bridge" />

            <a
              href="https://visitokinawajapan.com/"
              target="_blank"
              id="author"
            >
              深入地底鐘乳石探險
            </a>
          </a>

          <a href="#" className="photo" onClick={handleClick}>
            <h1 className="dates">Day 4</h1>
            <img src="mallInside.jpg" alt="bridge" />

            <a
              href="https://visitokinawajapan.com/"
              target="_blank"
              id="author"
            >
              超激outlet大血拼
            </a>
          </a>

          <a href="#" className="photo" onClick={handleClick}>
            <h1 className="dates">Day 5</h1>
            <img src="street.jpg" alt="bridge" />
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

      {showSchedule && <Schedule itinerary={itinerary}/>}

      <a href="videoPage.js">
        <button className="button-81" role="button">
          回上一層
        </button>
      </a>
    </div>
  );
};

export default FullItinerary;