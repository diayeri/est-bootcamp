var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
var getTodoData = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, todoDatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("http://localhost:3000/todos")];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                todoDatas = _a.sent();
                return [2 /*return*/, todoDatas];
        }
    });
}); };
// 용도와 역할을 명확히 분리하기
var addTodoData = function (todoText) { return __awaiter(_this, void 0, void 0, function () {
    var newTodo, res, newTodoData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newTodo = {
                    // id는 보통 서버에서 자동으로 생성해준다 (Id 세팅하던 코드 제거!)
                    todo: todoText,
                };
                return [4 /*yield*/, fetch("http://localhost:3000/todos", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newTodo),
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                newTodoData = _a.sent();
                return [2 /*return*/, newTodoData];
        }
    });
}); };
var addTodoList = function () { return __awaiter(_this, void 0, void 0, function () {
    var $todoInput, todoText, newTodoDatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                $todoInput = document.querySelector("#todoInput");
                if (!($todoInput && $todoInput instanceof HTMLInputElement)) return [3 /*break*/, 3];
                todoText = $todoInput.value;
                $todoInput.value = "";
                return [4 /*yield*/, addTodoData(todoText)];
            case 1:
                _a.sent(); // 서버에 todo 추가 요청
                return [4 /*yield*/, getTodoData()];
            case 2:
                newTodoDatas = _a.sent();
                todoListRender(newTodoDatas);
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
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
var todoListRender = function (todoDatas) {
    var $todoCont = document.querySelector("#todoCont");
    $todoCont.innerHTML = "";
    todoDatas.forEach(function (todoData) {
        var $todoLi = createTodoLi(todoData);
        $todoCont.append($todoLi);
    });
};
var init = function () { return __awaiter(_this, void 0, void 0, function () {
    var todoDatas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getTodoData()];
            case 1:
                todoDatas = _a.sent();
                todoListRender(todoDatas);
                return [2 /*return*/];
        }
    });
}); };
init();