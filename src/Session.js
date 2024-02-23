import React from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const Session = ({
  sessionTimeLength,
  setSessionTimeLength,
  timerDecrement,
  timerIncrement,
}) => {
  return (
    <div className="timer-set" id="session-set">
      <p id="session-label">Session Length</p>
      <div className="buttons">
        <button
          id="session-decrement"
          onClick={() =>
            timerDecrement(sessionTimeLength, setSessionTimeLength, "Session")
          }>
          <FaArrowCircleDown />
        </button>
        <p id="session-length">{sessionTimeLength}</p>
        <button
          id="session-increment"
          onClick={() =>
            timerIncrement(sessionTimeLength, setSessionTimeLength, "Session")
          }>
          <FaArrowCircleUp />
        </button>
      </div>
    </div>
  );
};

export default Session;
