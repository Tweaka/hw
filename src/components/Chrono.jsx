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

  return (
    <div>
      <div>{formatTime(time)}</div>
      {!timerOn && <button onClick={handleStart}>Start</button>}
      {timerOn && <button onClick={handleStop}>Stop</button>}
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleLap}>Lap</button>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>{formatTime(lap)}</li>
        ))}
      </ul>

     
    </div>
  );
}

export default Chrono;
