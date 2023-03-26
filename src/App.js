import React from "react";
import "./App.css";
import VideoPage from "./videoPage";
import Expense from "./spend/Expense";
import Fee from "./spend/Fee";

function App() {
  return (
    <div className="App">
      <VideoPage />
      <Expense />
    </div>
  );
}

export default App;
