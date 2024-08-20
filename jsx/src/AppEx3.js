import React, { useState } from "react";
import "./App.css";

const data = [
  { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
  { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
  { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
];

function App() {
  const [isSelected, setIsSelected] = useState();
  const select = (id) => {
    setIsSelected(id);
  };
  return (
    <dl>
      {data.map((el) => (
        <React.Fragment key={el.id}>
          <dt>
            <button onClick={() => select(el.id)}>{el.name}</button>
          </dt>
          {isSelected === el.id && (
            <>
              <dd>Email: {el.email}</dd>
              <dd>Job: {el.job}</dd>
            </>
          )}
        </React.Fragment>
      ))}
    </dl>
  );
}
export default App;
