import Fragment from "./components/Fragment";
import Time from "./components/Time";
import Props from "./components/Props";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];
  return (
    <div className="div">
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
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
