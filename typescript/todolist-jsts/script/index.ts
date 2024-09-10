const todoDatas = [
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

const addTodoData = (todoText: string) => {
  // todoText를 받아서 todoDatas를 업데이트
  const newTodoId = todoDatas[todoDatas.length - 1].id + 1;
  const newTodo = {
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

const todoRender = (todoDatas: { id: number; todo: string }[]) => {
  const $todoCont = document.querySelector("#todoCont");
  $todoCont!.innerHTML = "";
  todoDatas.forEach((todoData) => {
    // li추가를 따로 함수로 만들고 append 하는 방식으로, 한 목록씩 추가하게 만들 수도 있다
    const $todoLi = document.createElement("li");
    const $todoP = document.createElement("p");
    $todoP.innerText = todoData.todo;
    $todoLi.append($todoP);
    $todoCont!.append($todoLi);
  });
};

todoRender(todoDatas);
