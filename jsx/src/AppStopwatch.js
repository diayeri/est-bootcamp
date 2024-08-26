import { useRef, useState } from "react";

export default function Stopwatch() {
  // 시작한 시간
  const startTime = useRef(null);
  // 현재 시간
  const [now, setNow] = useState(null);
  // 인터벌함수의 id
  const intervalId = useRef(null);

  function handleStart() {
    startTime.current = Date.now();
    setNow(Date.now());

    intervalId.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalId.current);
    console.log(intervalId.current);
    console.log(startTime.current, now);
  }

  let secondsPassed = 0;
  if (startTime && now) {
    secondsPassed = (now - startTime.current) / 1000; // 기본 단위가 밀리세컨드이기 때문에 초단위로 표현하기 위해서 1000을 나눕니다.
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStop}>Reset</button>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
