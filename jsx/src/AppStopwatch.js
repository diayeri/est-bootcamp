import { useRef, useState } from "react";

export default function Stopwatch() {
  // 시작한 시간
  const startTimeRef = useRef(0);
  // 인터벌함수의 id
  const intervalIdRef = useRef(null);
  // 경과 시간
  const [secondsPassed, setSecondPassed] = useState(0);

  function handleStart() {
    startTimeRef.current = Date.now();

    intervalIdRef.current = setInterval(() => {
      setSecondPassed(Date.now() - startTimeRef.current + secondsPassed);
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalIdRef.current);
  }
  function handleReset() {
    clearInterval(intervalIdRef.current);
    setSecondPassed(0);
  }

  return (
    <>
      <h1>Time passed: {(secondsPassed / 1000).toFixed(3)}</h1>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
