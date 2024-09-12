import { useState, useEffect } from "react";
import "./App.css";

// 기능/로직과 화면에 보이는 요소를 분리 - 유지보수시 용이, 역할도 분명해짐
function TodoView({ todoList, todoText, handleInput, handleBtn }) {
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
  // 키와 값이 동일할때는 하나로 생략해서 넣을수 있다는 점
  const props = { todoList, todoText, handleInput, handleBtn };
  return <TodoView {...props} />;
}

function App() {
  return <Todo />;
}

export default App;
