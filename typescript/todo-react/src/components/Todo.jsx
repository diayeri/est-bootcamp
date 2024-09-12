import { useState, useEffect } from "react";
import TodoView from "./TodoView";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");
  useEffect(() => {
    fetch("http://localhost:3300/todos")
      .then((res) => {
        return res.json();
      })
      .then((todoData) => {
        // 이 상태에서는 반복해서 감지,작동함 -> useEffect 추가하기
        // - 컴포넌트 최상단: 컴포넌트가 렌더링 될때 실행됨 (=함수실행)
        // - 비교하기 위해 실행을 하다가 또 실행을 하게 되는?거 (무한반복)
        setTodoList(todoData);
      });
  }, []);

  const handleInput = (e) => {
    const newTodoText = e.target.value;
    setTodoText(newTodoText);
    // console.log(todoText);
  };
  const handleBtn = () => {
    fetch("http://localhost:3300/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: todoText }),
    })
      .then((res) => {
        return res.json();
      })
      .then((newTodo) => {
        setTodoList((prevTodoList) => {
          // prevTodoList.push() 를 하면 prevTodoList가 바뀐게 아니다 (내부 요소만 변함, 변화감지 못함)
          // 리액트에서는 props/state가 바뀌면 리렌더링을 한다
          return [...prevTodoList, newTodo];
        });
      });
    // setTodoList((prevTodoList) => {
    //   const newTodo = {
    //     id: +todoList[todoList.length - 1].id + 1,
    //     todo: todoText,
    //   };
    //   // push 사용시 기존 배열의 요소를 바꾸는 것인데, 이러한 변화는 감지하지 못한다
    //   const newTodoList = [...prevTodoList, newTodo];

    //   if (newTodoList.length > 5) {
    //     newTodoList.shift();
    //   }
    //   return newTodoList;
    // });
  };
  // 키와 값이 동일할때는 하나로 생략해서 넣을수 있다는 점
  const props = { todoList, todoText, handleInput, handleBtn };
  return <TodoView {...props} />;
}

export default Todo;
