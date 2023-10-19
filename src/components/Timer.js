import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef();

  const handleMinuteChange = (e) => {
    if (!isRunning) {
      setMinutes(parseInt(e.target.value, 10));
    }
  };

  const handleSecondChange = (e) => {
    if (!isRunning) {
      setSeconds(parseInt(e.target.value, 10));
    }
  };

  const startTimer = () => {
    let totalSeconds = minutes * 60 + seconds;
    if (totalSeconds > 0) {
      setIsRunning(true);
      timerId.current = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          const newMinutes = Math.floor(totalSeconds / 60);
          const newSeconds = totalSeconds % 60;
          setMinutes(newMinutes);
          setSeconds(newSeconds);
        } else {
          clearInterval(timerId.current);
          setIsRunning(false);
        }
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="App debugger">
		<br></br>
      <div className="debugger display-time">
        <p className="p-time">{minutes}m {seconds}s</p>
      </div>
	  <br></br>
      <input
        className="debugger input"
        type="number"
        value={isRunning ? "" : minutes}
        readOnly={isRunning}
        placeholder="min"
        onChange={handleMinuteChange}
      />
      <input
        className="debugger input"
        type="number"
        value={isRunning ? "" : seconds}
        readOnly={isRunning}
        placeholder="sec"
        onChange={handleSecondChange}
      />
      <br />
      <br />
      <div className="button-container debugger">
        <div className="button debugger">
          <Button variant="contained" color="inherit" onClick={startTimer}>
            Start
          </Button>
        </div>
        <div className="button debugger">
          <Button variant="contained" color="inherit" onClick={stopTimer}>
            Stop
          </Button>
        </div>
        <div className="button debugger">
          <Button variant="contained" color="inherit" onClick={resetTimer}>
            Reset
          </Button>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Timer;
