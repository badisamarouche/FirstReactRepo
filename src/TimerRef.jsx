import { useRef, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log(intervalRef.current);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    console.log(intervalRef.current)
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div>
      <h1>{seconds} seconds</h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;