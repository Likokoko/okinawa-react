import React from "react";
import "./App.css";
import "animate.css";
import VideoPage from "./videoPage";
import Expense from "./spend/Expense";
import Meals from "./Meals";
import Map from "./map/Map";
import { useState, useRef } from "react";
import Dropdown from "./DropDown";
import Cards from "./card";

function App() {
  const expenseRef = useRef(null);

  const handleDropDownClick = () => {
    expenseRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const cards = [
    {
      id: 1,
      description: "Restaurant 1",
      image_url: "https://via.placeholder.com/150",
      categories: [{ title: "Category 1" }],
      rating: 4.5,
    },
    {
      id: 2,
      description: "Restaurant 2",
      image_url: "https://via.placeholder.com/150",
      categories: [{ title: "Category 2" }],
      rating: 4,
    },
    {
      id: 3,
      name: "Restaurant 3",
      image_url: "https://via.placeholder.com/150",
      categories: [{ title: "Category 3" }],
      rating: 3.5,
    },
  ];

  return (
    <div className="App">
      <VideoPage />
      <Dropdown onDropDownClick={handleDropDownClick} />
      <Expense ref={expenseRef} />
      <Meals />
      <Map />
      <h1>Popular Restaurants Near You</h1>
      <Cards cards={cards} />
    </div>
  );
}


export default App;
