import React, { useState } from "react";

const Schedule = ({ itinerary }) => {
  const [currentDay, setCurrentDay] = useState("Day 1 (6/2)");
console.log(itinerary);

  const handleDayChange = (day) => {
    setCurrentDay(day);
    console.log("handleDayChange:"+day);
  };

  return (
    <div className="schedule">
      <div className="schedule__day">
        <h3 className="schedule__day-title">{currentDay}</h3>
        <div className="schedule__day-selector">
          <button onClick={() => handleDayChange("Day 1 (6/2)")}>Day 1</button>
          <button onClick={() => handleDayChange("Day 2 (6/3)")}>Day 2</button>
          <button onClick={() => handleDayChange("Day 3 (6/4)")}>Day 3</button>
        </div>
        <ul className="schedule__list">
          {itinerary[currentDay].map((activity, index) => (
            <li key={index} className="schedule__item">//嘗試更改key為item.id,出現Cannot read properties of undefined (reading 'map')
              <img className="scheduleImg" src={activity.image} alt={"img here"}/>
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
