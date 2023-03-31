import React from "react";
import "./App.css";
import "animate.css";
import VideoPage from "./videoPage";
import Expense from "./spend/Expense";
import Meals from "./Meals";
import { useState, useRef } from "react";
import Dropdown from "./DropDown";
function App() {
  const expenseRef = useRef(null);

  const handleDropDownClick = () => {
    expenseRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <VideoPage />
      <Dropdown onDropDownClick={handleDropDownClick} />
      <Expense ref={expenseRef} />
      <Meals />
    </div>
  );
}

export default App;
