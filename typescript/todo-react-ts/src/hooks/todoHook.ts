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
    const getTodoData = async () => {
      const res = await fetch("http://localhost:3300/todos");
      const todoData = await res.json();
      setIsLoading(false);
      setTodoList(todoData);
    };
    getTodoData();
  }, []);

  const postTodo = async (newTodo: Partial<TodoItem>): Promise<TodoItem> => {
    const res = await fetch("http://localhost:3300/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const addedTodo = await res.json();
    return addedTodo;
  };

  const addTodo = async (todoText: string): Promise<void> => {
    setIsLoading(true);
    const newTodo = {
      todo: todoText,
    };
    const addedTodo = await postTodo(newTodo);
    setIsLoading(false);

    setTodoList((prevTodoList) => {
      return [...prevTodoList, addedTodo];
    });
  };

  return [todoList, addTodo, isLoading];
}

export default useTodoData;
