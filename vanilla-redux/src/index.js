import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

// reducer 함수는 최초 랜더링시 한번 실행됨
const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReducer);

// let count = 0;

// UI Update - text
const updateResult = (c) => {
  // number.innerText = count;
  // quantity.innerHTML = c;
  // totalPrice.innerHTML = c * PRICE;
  number.innerText = store.getState();
  quantity.innerHTML = store.getState();
  totalPrice.innerHTML = store.getState() * PRICE;
};

store.subscribe(updateResult);

// State Change
const addNumber = () => {
  // count += 1;
  // updateResult(count);
  store.dispatch({ type: "PLUS" });
  minus.disabled = false;
};

// State Change
const substractNumber = () => {
  // count -= 1;
  // if (count <= 0) {
  //   minus.disabled = true;
  // }
  // updateResult(count);
  store.dispatch({ type: "MINUS" });
  if (store.getState() <= 0) {
    minus.disabled = true;
  }
};

// Init
// number.innerHTML = count;
// updateResult(count);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);
