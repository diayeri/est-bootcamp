import { useRef, useState } from "react";

export default function Stopwatch() {
  // 시작한 시간
  const startTimeRef = useRef(0);
  // 인터벌함수의 id
  const intervalIdRef = useRef(null);
  // 경과 시간
  const [secondsPassed, setSecondPassed] = useState(0);
  // 타이머 동작여부
  const [isActive, setIsActive] = useState(false);

  function handleStart() {
    startTimeRef.current = Date.now();

    intervalIdRef.current = setInterval(() => {
      setSecondPassed(Date.now() - startTimeRef.current + secondsPassed);
    }, 10);

    setIsActive(true);
  }

  function handleStop() {
    clearInterval(intervalIdRef.current);
    setIsActive(false);
  }
  function handleReset() {
    clearInterval(intervalIdRef.current);
    setSecondPassed(0);
    setIsActive(false);
  }

  return (
    <>
      <h1>Time passed: {(secondsPassed / 1000).toFixed(3)}</h1>
      <button onClick={handleStart} disabled={isActive}>
        Start
      </button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
