import Fragment from "./Fragment";
import "./App.css";

function Time() {
  const time = new Date();
  const timeStyle = { backgroundColor: "black", color: "white" };
  return (
    <>
      <h2>time: {time.toString()}</h2>
      <div className="flex">
        <h2 style={{ ...timeStyle, color: "red" }}>{time.getFullYear()}년</h2>
        <h2 style={timeStyle}>
          {time.getMonth() + 1}월 {time.getDate()}일 {time.getDay()}요일
        </h2>
        <h2 style={timeStyle}>
          {time.getHours()}시 {time.getMinutes()}분 {time.getSeconds()}초
        </h2>
      </div>
    </>
  );
}

function Props(props) {
  console.log(props);
  return (
    <div>
      <h2>안녕! {props.name}</h2>
    </div>
  );
}

function App() {
  const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];
  return (
    <div className="div">
      <Props name="dy" age="30" />
      <Fragment />
      <Time />
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
