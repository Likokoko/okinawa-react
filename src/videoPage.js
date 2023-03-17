import { useState } from "react";
import Dropdown from "./DropDown";

const VideoPage = () => {


  return (
    <main>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        src="motor-boat-23011.mp4"
        type="video/mp4"
      ></video>
      <audio loop id="myAudio" src="song.mp3" type="audio/mp3"></audio>

      <div className="content">
        <p className="title">Visit Okinawa on June</p>
        <p className="subtitle">get ready with your trip</p>
        <Dropdown />

      </div>
    </main>
  );
};

export default VideoPage;
