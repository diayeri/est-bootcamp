import React, { useState } from "react";
import PetFieldset from "./components/ex04/PetFieldset";
import PetList from "./components/ex04/PetList";
import "./App.css";

function App() {
  const [pets, setPets] = useState([
    { name: "벨라", species: "고양이", age: "5", id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "1", id: 114 },
    { name: "매기", species: "강아지", age: "6", id: 115 },
  ]);

  const addNew = () => {};

  return (
    <>
      <h1>애완동물 정보 리스트</h1>
      <PetFieldset setPets={setPets} />
      <PetList data={pets} />
    </>
  );
}
export default App;
