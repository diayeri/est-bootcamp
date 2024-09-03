import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{ backgroundColor: buttonColor }}
          onClick={() => setButtonColor(newColor)}
        >
          change to {newColor}!
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
