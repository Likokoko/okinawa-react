import { useState } from "react";
import Dropdown from "./DropDown";

const VideoPage = () => {
  const [audioPlay, setAudioPlay] = useState(false);

  const ToggleAudio = () => {
    const audio = document.getElementById("myAudio");
    if (audio.paused) {
      audio.play();
      setAudioPlay(true);
      console.log("playing");
    } else {
      audio.pause();
      setAudioPlay(false);
    }
  };
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
      <audio id="myAudio" src="song.mp3" type="audio/mp3"></audio>

      <div className="content">
        <p className="title">Visit Okinawa on June</p>
        <p className="subtitle">get ready with your trip</p>
        <Dropdown />
        <button className="audioPlay" onClick={ToggleAudio}>
          {audioPlay ? "stop" : "play music"}
        </button>
      </div>
    </main>
  );
};

export default VideoPage;
