import { useState } from "react";
import "./App.css";

const data = [
  { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
  { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
  { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
];

function App() {
  const [isSelected, setIsSelected] = useState("");
  const select = (id) => {
    setIsSelected(id);
  };
  return (
    <ul>
      {data.map((el) => (
        <li key={el.id} onClick={() => select(el.id)}>
          {el.name}
          {isSelected === el.id && (
            <div>
              <p>Email: {el.email}</p>
              <p>Job: {el.job}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
export default App;
