import { useState, useEffect } from "react";
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
      id: "2",
      todo: "점심먹기",
    },
  ]);
  const [todoText, setTodoText] = useState("");
  const handleInput = (e) => {
    const newTodoText = e.target.value;
    setTodoText(newTodoText);
    // console.log(todoText);
  };
  const handleBtn = () => {
    setTodoList((prevTodoList) => {
      const newTodo = {
        id: +todoList[todoList.length - 1].id + 1,
        todo: todoText,
      };
      // push 사용시 기존 배열의 요소를 바꾸는 것인데, 이러한 변화는 감지하지 못한다
      const newTodoList = [...prevTodoList, newTodo];

      if (newTodoList.length > 5) {
        newTodoList.shift();
      }
      return newTodoList;
    });
  };

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
      {/* 제어 컴포넌트? */}
      <input type="text" value={todoText} onChange={handleInput} />
      <button onClick={handleBtn}>추가</button>
    </div>
  );
}

function App() {
  return <Todo />;
}

export default App;
