import ButtonList from "./components/ex01/ButtonList";
import MoodScreen from "./components/ex01/MoodScreen";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentMood, setCurrentMood] = useState("");
  return (
    <>
      <h1>오늘의 기분을 선택해주세요 😅</h1>
      <article style={{ width: "300px" }}>
        <ButtonList setMood={setCurrentMood} currentMood={currentMood} />
        <MoodScreen mood={currentMood} />
      </article>
    </>
  );
}
export default App;
