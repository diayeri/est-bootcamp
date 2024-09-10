type TodoData = { id: number; todo: string };

const todoDatas: TodoData[] = [
  {
    id: 1,
    todo: "아침먹기",
  },
  {
    id: 2,
    todo: "양치하기",
  },
];

// 용도와 역할을 명확히 분리하기

const addTodoData = (todoText: string): TodoData[] => {
  // todoText를 받아서 todoDatas를 업데이트
  const newTodoId = todoDatas[todoDatas.length - 1].id + 1;
  const newTodo: TodoData = {
    id: newTodoId,
    todo: todoText,
  };
  todoDatas.push(newTodo);
  return todoDatas;
};

const addTodoList = () => {
  const $todoInput = document.querySelector("#todoInput");
  if ($todoInput && $todoInput instanceof HTMLInputElement) {
    const todoText = $todoInput.value;
    $todoInput.value = "";
    const todoDatas = addTodoData(todoText);
    todoRender(todoDatas);
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

const todoRender = (todoDatas: TodoData[]) => {
  const $todoCont = document.querySelector("#todoCont");
  $todoCont!.innerHTML = "";
  todoDatas.forEach((todoData) => {
    const $todoLi = createTodoLi(todoData);
    $todoCont!.append($todoLi);
  });
};

todoRender(todoDatas);
