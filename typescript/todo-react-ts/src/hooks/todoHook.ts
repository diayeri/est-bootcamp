import { useState, useEffect } from "react";

export interface TodoItem {
  id: string;
  todo: string;
}

// 튜플: 배열, 그런데 각 위치의 타입과 전체 길이가 정해진.
function useTodoData(): [TodoItem[], (todoText: string) => void, boolean] {
  const [isLoading, setIsLoading] = useState(false);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3300/todos")
      .then((res) => {
        return res.json();
      })
      .then((todoData) => {
        setIsLoading(false);
        setTodoList(todoData);
      });
  }, []);

  // handleBtn 처럼 컴포넌트(클라이언트), 서버 둘다 의존하는 경우는?
  // - 내부 코드를 나누어서 작업할것
  const postTodo = (todoText: string): void => {
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
          return [...prevTodoList, newTodo];
        });
      });
  };

  return [todoList, postTodo, isLoading];
}

export default useTodoData;
