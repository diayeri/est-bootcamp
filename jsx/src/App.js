import Fragment from "./Fragment";
import "./App.css";

function App() {
  const time = new Date();
  const timeStyle = { backgroundColor: "black", color: "white" };
  const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];
  return (
    <div className="div">
      <Fragment />
      <h1>time: {time.toString()}</h1>
      <div className="flex">
        <h2 style={{ ...timeStyle, color: "red" }}>{time.getFullYear()}년</h2>
        <h2 style={timeStyle}>
          {time.getMonth() + 1}월 {time.getDate()}일 {time.getDay()}요일
        </h2>
        <h2 style={timeStyle}>
          {time.getHours()}시 {time.getMinutes()}분 {time.getSeconds()}초
        </h2>
      </div>
      <ol>
        {list.map((i) => (
          <li className={(i.visited = true ? "visited" : null)} key={i.no}>
            {i.area}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default App;
