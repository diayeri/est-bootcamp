var todoDatas = [
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
var addTodoData = function (todoText) {
    // todoText를 받아서 todoDatas를 업데이트
    var newTodoId = todoDatas[todoDatas.length - 1].id + 1;
    var newTodo = {
        id: newTodoId,
        todo: todoText,
    };
    todoDatas.push(newTodo);
    return todoDatas;
};
var addTodoList = function () {
    var $todoInput = document.querySelector("#todoInput");
    if ($todoInput && $todoInput instanceof HTMLInputElement) {
        var todoText = $todoInput.value;
        $todoInput.value = "";
        var todoDatas_1 = addTodoData(todoText);
        todoRender(todoDatas_1);
    }
};
var $todoInputBtn = document.querySelector("#todoBtn");
$todoInputBtn === null || $todoInputBtn === void 0 ? void 0 : $todoInputBtn.addEventListener("click", addTodoList);
var createTodoLi = function (todoData) {
    // li추가를 따로 함수로 만들고 append 하는 방식으로, 한 목록씩 추가하게 만들 수도 있다
    var $todoLi = document.createElement("li");
    var $todoP = document.createElement("p");
    $todoP.innerText = todoData.todo;
    $todoLi.append($todoP);
    return $todoLi;
};
var todoRender = function (todoDatas) {
    var $todoCont = document.querySelector("#todoCont");
    $todoCont.innerHTML = "";
    todoDatas.forEach(function (todoData) {
        var $todoLi = createTodoLi(todoData);
        $todoCont.append($todoLi);
    });
};
todoRender(todoDatas);
