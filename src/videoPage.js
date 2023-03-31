import { useState } from "react";

const VideoPage = () => {
  return (
    <section>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        src="./video/motor-boat-23011.mp4"
        type="motor-boat-23011.mp4"
      ></video>
      <audio loop id="myAudio" src="song.mp3" type="audio/mp3"></audio>
      <div className="content">
        <p className="title animate__animated animate__bounce">
          Visit Okinawa on June
        </p>
        <p className="subtitle animate__animated animate__bounce">
          get ready with your trip
        </p>
      </div>
    </section>
  );
};

export default VideoPage;
