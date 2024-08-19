import ButtonList from "./components/ex01/ButtonList";
import MoodScreen from "./components/ex01/MoodScreen";
import "./App.css";
import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");
  return (
    <>
      <h1>오늘의 기분을 선택해주세요 😅</h1>
      <article style={{ width: "300px" }}>
        <ButtonList setMood={setMood} />
        <MoodScreen mood={mood} />
      </article>
    </>
  );
}
export default App;
