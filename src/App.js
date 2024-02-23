import React from "react";
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";
import { useState, useEffect, useRef } from "react";

function App() {
  const [sessionTimeLength, setSessionTimeLength] = useState(25);
  const [breakTimeLength, setBreakTimeLength] = useState(5);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [timerName, setTimerName] = useState("Session");
  const [toggleStart, setToggleStart] = useState(false);

  // useEffect(() => {
  //   const audioFile = document.getElementById("beep");
  //   audioFile.addEventListener("loadedmetadata", () => {
  //     audioFile.play();
  //   });
  // }, []);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    if (toggleStart) {
      if (minutes === 0 && seconds === 0) {
        if (timerName === "Session") {
          setTimerName("Break");
          setMinutes(breakTimeLength);
          setSeconds(0);
        } else if (timerName === "Break") {
          setTimerName("Session");
          setMinutes(sessionTimeLength);
          setSeconds(0);
        }
      } else if (minutes === 0 && seconds === 1) {
        setSeconds(0);
        let audioFile = document.getElementById("beep");
        audioFile.play();
      } else if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }
  }, 1000);

  const timerIncrement = (time, func, name) => {
    if (toggleStart) {
      return;
    } else if (time < 60) {
      func(time + 1);
      if (name === timerName) {
        setMinutes(time + 1);
        setSeconds(0);
      }
    }
  };
  const timerDecrement = (time, func, name) => {
    if (toggleStart) {
      return;
    } else if (time > 1) {
      func(time - 1);
      if (name === timerName) {
        setMinutes(time - 1);
        setSeconds(0);
      }
    }
  };

  const startStopButton = () => {
    if (!toggleStart) {
      setToggleStart(true);
    } else {
      setToggleStart(false);
    }
  };

  const resetButton = () => {
    let audioFile = document.getElementById("beep");
    audioFile.pause();
    audioFile.currentTime = 0;
    setTimerName("Session");
    setSessionTimeLength(25);
    setBreakTimeLength(5);
    setMinutes(25);
    setSeconds(0);
    setToggleStart(false);
  };

  return (
    <div className="App">
      <Break
        breakTimeLength={breakTimeLength}
        setBreakTimeLength={setBreakTimeLength}
        timerDecrement={timerDecrement}
        timerIncrement={timerIncrement}
      />
      <Session
        sessionTimeLength={sessionTimeLength}
        setSessionTimeLength={setSessionTimeLength}
        timerDecrement={timerDecrement}
        timerIncrement={timerIncrement}
      />
      <Timer
        timerName={timerName}
        startStopButton={startStopButton}
        minutes={minutes}
        seconds={seconds}
        resetButton={resetButton}
      />
    </div>
  );
}

export default App;
