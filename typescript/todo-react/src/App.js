import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Todo() {
  // console.log(<div id="id_name"></div>);
  const [todoList, setTodoList] = useState([
    {
      id: "1",
      todo: "아침먹기",
    },
    {
      id: "1",
      todo: "점심먹기",
    },
  ]);

  return (
    <div>
      <h1>멋진 투두</h1>
      <ul>
        {todoList.map((i) => (
          <li key={i.id}>
            <p>{i.todo}</p>
          </li>
        ))}
      </ul>
      <input type="text" />
      <button>추가</button>
    </div>
  );
}

function App() {
  return <Todo />;
}

export default App;
