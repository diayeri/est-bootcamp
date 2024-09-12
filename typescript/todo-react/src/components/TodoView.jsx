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

export default TodoView;
