import { ChangeEvent } from "react";
import { TodoItem } from "../hooks/todoHook";

interface TodoViewProps {
  todoList: TodoItem[];
  todoText: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBtn: () => void;
}

// React.FC는 함수 표현식에서만 가능하다 - 선언문인 function 함수에서는 사용 불가
const TodoView: React.FC<TodoViewProps> = ({
  todoList,
  todoText,
  handleInput,
  handleBtn,
}) => {
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
      <label htmlFor="">
        새 할일
        <input type="text" value={todoText} onChange={handleInput} />
      </label>
      <button onClick={handleBtn}>추가</button>
    </div>
  );
};

export default TodoView;
