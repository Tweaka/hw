import React, { useState, useRef } from 'react';

function Chrono() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);

  const handleStart = () => {
    setTimerOn(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const handleStop = () => {
    setTimerOn(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setTime(0);
    setTimerOn(false);
    clearInterval(intervalRef.current);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (time) => {
    const date = new Date(time);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(date.getMilliseconds() / 10)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  //TODO 2e timer à 00:00:00 quand on clique sur lap

  //TODO disable lap quand timer à 00:00:00 (ou STOP actif)

  return (
    <div className=" flex flex-col items-center  ">
      <div className=" text-9xl pb-10 pt-6 ">{formatTime(time)}</div>
      <div className="btn-group">
        {!timerOn && (
          <button className="btn btn-outline btn-success" onClick={handleStart}>
            Start
          </button>
        )}
        {timerOn && (
          <button className="btn btn-outline btn-error" onClick={handleStop}>
            Stop
          </button>
        )}
        <button className="btn btn-outline btn-warning" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-outline btn-info" onClick={handleLap}>
          Lap
        </button>
      </div>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>{formatTime(lap)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Chrono;
