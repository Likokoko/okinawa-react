import React, { useState } from "react";

const Schedule = (props) => {
  // const [currentDay, setCurrentDay] = useState("Day 1 (6/2)");
  console.log(props.itinerary);
  // console.log(props.currentDay);
  // const handleDayChange = (day) => {
  //   setCurrentDay(day);
  //   console.log("handleDayChange:" + day);
  // };

  return (
    <div className="schedule">
      <div className="schedule__day">
        <h3 className="schedule__day-title">{props.currentDay}</h3>
        <div className="schedule__day-selector">

        </div>
        <ul className="schedule__list">
          {props.itinerary[props.currentDay]?.map((activity, index) => (
            <li key={index} className="schedule__item">
              {/* // 嘗試更改key為item.id,出現Cannot read properties of undefined (reading 'map') */}
              <img className="scheduleImg" src={activity.image} alt={"img here"} />
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
