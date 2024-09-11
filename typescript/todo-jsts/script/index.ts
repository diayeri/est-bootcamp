type TodoData = { id: number; todo: string; done: boolean };

// const todoDatas: TodoData[] = [
//   {
//     id: 1,
//     todo: "아침먹기",
//   },
//   {
//     id: 2,
//     todo: "양치하기",
//   },
// ];

const getTodoData = async (): Promise<TodoData[]> => {
  const res = await fetch("http://localhost:3000/todos");
  const todoDatas: TodoData[] = await res.json();
  return todoDatas;
};

// 용도와 역할을 명확히 분리하기

const addTodoData = async (todoText: string): Promise<TodoData[]> => {
  const newTodo: Partial<TodoData> = {
    // id는 보통 서버에서 자동으로 생성해준다 (Id 세팅하던 코드 제거!)
    todo: todoText,
  };
  const res = await fetch(`http://localhost:3000/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  const newTodoData = await res.json();
  return newTodoData;
};

const addTodoList = async () => {
  const $todoInput = document.querySelector("#todoInput");
  if ($todoInput && $todoInput instanceof HTMLInputElement) {
    const todoText = $todoInput.value;
    $todoInput.value = "";

    await addTodoData(todoText); // 서버에 todo 추가 요청
    const newTodoDatas = await getTodoData(); // 최신 todolist 받아오기
    todoListRender(newTodoDatas);
  }
};

const $todoInputBtn = document.querySelector("#todoBtn");
$todoInputBtn?.addEventListener("click", addTodoList);

const createTodoLi = (todoData: TodoData): HTMLLIElement => {
  // li추가를 따로 함수로 만들고 append 하는 방식으로, 한 목록씩 추가하게 만들 수도 있다
  const $todoLi = document.createElement("li");
  const $todoP = document.createElement("p");
  $todoP.innerText = todoData.todo;
  $todoLi.append($todoP);
  return $todoLi;
};

const todoListRender = (todoDatas: TodoData[]) => {
  const $todoCont = document.querySelector("#todoCont");
  $todoCont!.innerHTML = "";
  todoDatas.forEach((todoData) => {
    const $todoLi = createTodoLi(todoData);
    $todoCont!.append($todoLi);
  });
};

const init = async () => {
  const todoDatas = await getTodoData();
  todoListRender(todoDatas);
};
init();
