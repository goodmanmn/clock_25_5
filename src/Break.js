import React from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const Break = ({
  breakTimeLength,
  setBreakTimeLength,
  timerDecrement,
  timerIncrement,
}) => {
  return (
    <div className="timer-set" id="break-set">
      <p id="break-label">Break Length</p>
      <div className="buttons">
        <button
          id="break-decrement"
          onClick={() =>
            timerDecrement(breakTimeLength, setBreakTimeLength, "Break")
          }>
          <FaArrowCircleDown />
        </button>
        <p id="break-length">{breakTimeLength}</p>
        <button
          id="break-increment"
          onClick={() =>
            timerIncrement(breakTimeLength, setBreakTimeLength, "Break")
          }>
          <FaArrowCircleUp />
        </button>
      </div>
    </div>
  );
};

export default Break;
