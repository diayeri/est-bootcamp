import plus from "./plus.js";
import image64 from "./android.png";
import "./styles.css";

console.log(plus(10, 4));

function minus(a, b) {
  return a - b;
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `<img src="${image64}"/>`;
});
