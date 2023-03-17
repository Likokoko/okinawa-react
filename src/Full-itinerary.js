import { useState } from "react";

const FullItinerary = () => {
  const [data, setData] = useState([]);
  return (
    <div className="FullItinerary">
      <link href="https://visitokinawajapan.com/" rel="stylesheet"></link>
      <a href="#" class="photo">
        <h1 className="dates">Day 1</h1>
        <img src="aqua.jpeg" alt="bridge" />
        <div class="glow-wrap">
          <i class="glow"></i>
        </div>{" "}
        <a href="https://visitokinawajapan.com/" target="_blank" id="author">
          必去鯨鯊海洋博物館
        </a>
      </a>

      <link href="https://visitokinawajapan.com/" rel="stylesheet"></link>
      <a href="#" class="photo">
        <h1 className="dates">Day 2</h1>
        <img src="dive.webp" alt="bridge" />
        <div class="glow-wrap">
          <i class="glow"></i>
        </div>{" "}
        <a href="https://visitokinawajapan.com/" target="_blank" id="author">
          亞洲唯一深海藍洞潛水
        </a>
      </a>

      <link href="https://visitokinawajapan.com/" rel="stylesheet"></link>
      <a href="#" class="photo">
        <h1 className="dates">Day 3</h1>
        <img src="cave.jpg" alt="bridge" />
        <div class="glow-wrap">
          <i class="glow"></i>
        </div>{" "}
        <a href="https://visitokinawajapan.com/" target="_blank" id="author">
          深入地底鐘乳石探險
        </a>
      </a>

      <link href="https://visitokinawajapan.com/" rel="stylesheet"></link>
      <a href="#" class="photo">
        <h1 className="dates">Day 4</h1>
        <img src="mallInside.jpg" alt="bridge" />
        <div class="glow-wrap">
          <i class="glow"></i>
        </div>

        <a href="https://visitokinawajapan.com/" target="_blank" id="author">
          超激outlet大血拼
        </a>
      </a>

      <link href="https://visitokinawajapan.com/" rel="stylesheet"></link>
      <a href="#" class="photo">
        <h1 className="dates">Day 5</h1>
        <img src="street.jpg" alt="bridge" />
        <div class="glow-wrap">
          <i class="glow"></i>
        </div>{" "}
        <a href="https://visitokinawajapan.com/" target="_blank" id="author">
          必敗國際通電車遊
        </a>
      </a>

      <button class="button-81" role="button">
        回上一層
      </button>
    </div>
  );
};

export default FullItinerary;
