import React from "react";
import alarm_sound from "./assets/alarm_sound.mp3";
import { HiMiniPlayPause } from "react-icons/hi2";
import { IoRefreshCircle } from "react-icons/io5";

const Timer = ({
  timerName,
  startStopButton,
  minutes,
  seconds,
  resetButton,
}) => {
  let min, sec;
  minutes >= 10 ? (min = `${minutes}`) : (min = `0${minutes}`);
  seconds >= 10 ? (sec = `${seconds}`) : (sec = `0${seconds}`);
  return (
    <div className="timer">
      <p id="timer-label">{timerName}</p>
      <p id="time-left">
        {min}:{sec}
      </p>
      <button id="start_stop" onClick={startStopButton}>
        <HiMiniPlayPause />
      </button>
      <button id="reset" onClick={resetButton}>
        <IoRefreshCircle />
      </button>
      <audio id="beep" src={alarm_sound}></audio>
    </div>
  );
};

export default Timer;
