import React, { useState, useEffect, useRef } from "react";

const Schedule = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  function handleTurnPage() {
   console.log("hi")
  }
  return (
    <div className="schedule">
      <div className="schedule__day">
        <h3 className="schedule__day-title">{props.currentDay}</h3>
        <div className="schedule__day-selector"></div>
        <div className="leftRightIcon">
          {" "}
          <i
            class="fa-regular fa-circle-left"
            onClick={() => handleTurnPage()}
          ></i>{" "}
          <i
            class="fa-regular fa-circle-right"
            onClick={() => handleTurnPage()}
          ></i>
        </div>
        <ul className="schedule__list">
          {props.itinerary[props.currentDay]?.map((activity, index) => (
            <li key={index} className="schedule__item">
              <img
                className="scheduleImg"
                src={process.env.PUBLIC_URL + '/photo/' + activity.image}
                alt={"img here"}
              />{" "}
              {console.log(activity.image)}
              <div className="schedule__time">{activity.time}</div>
              <div className="schedule__place">{activity.place}</div>
              <div className="schedule__desc">{activity.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
