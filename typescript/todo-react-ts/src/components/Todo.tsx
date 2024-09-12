import { useState } from "react";
import TodoView from "./TodoView";
import useTodoData from "../hooks/todoHook";

function Todo() {
  const [todoText, setTodoText] = useState("");
  const [todoList, postTodo, isLoading] = useTodoData();

  const handleInput = (e) => {
    const newTodoText = e.target.value;
    setTodoText(newTodoText);
  };
  const handleBtn = () => {
    postTodo(todoText);
  };

  // 키와 값이 동일할때는 하나로 생략해서 넣을수 있다는 점
  const props = { todoList, todoText, handleInput, handleBtn };
  return isLoading ? <h1>로딩중</h1> : <TodoView {...props} />;
}

export default Todo;
