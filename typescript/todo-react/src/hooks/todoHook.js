import { useState, useEffect } from "react";

function useTodoData() {
  const [isLoading, setIsLoading] = useState(false);

  // # 컴포넌트 / 서버와 연결된 것들을 분리할 것이다
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3300/todos")
      .then((res) => {
        return res.json();
      })
      .then((todoData) => {
        setIsLoading(false);
        // 이 상태에서는 반복해서 감지,작동함 -> useEffect 추가하기
        // - 컴포넌트 최상단: 컴포넌트가 렌더링 될때 실행됨 (=함수실행)
        // - 비교하기 위해 실행을 하다가 또 실행을 하게 되는?거 (무한반복)
        setTodoList(todoData);
      });
  }, []);

  // handleBtn 처럼 컴포넌트(클라이언트), 서버 둘다 의존하는 경우는?
  // - 내부 코드를 나누어서 작업할것
  const postTodo = (todoText) => {
    setIsLoading(true);
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
        setIsLoading(false);
        setTodoList((prevTodoList) => {
          // prevTodoList.push() 를 하면 prevTodoList가 바뀐게 아니다 (내부 요소만 변함, 변화감지 못함)
          // 리액트에서는 props/state가 바뀌면 리렌더링을 한다
          return [...prevTodoList, newTodo];
        });
      });
  };

  return [todoList, postTodo, isLoading];
}

export default useTodoData;
