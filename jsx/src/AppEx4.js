import React, { useState } from "react";
import PetFieldset from "./components/ex04/PetFieldset";
import PetList from "./components/ex04/PetList";
import "./App.css";

const data = [
  { name: "벨라", species: "고양이", age: "5", id: 111 },
  { name: "루시", species: "강아지", age: "3", id: 112 },
  { name: "데이지", species: "토끼", age: "2", id: 113 },
  { name: "몰리", species: "고양이", age: "1", id: 114 },
  { name: "매기", species: "강아지", age: "6", id: 115 },
];

function App() {
  const [name, setName] = useState();
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();

  const submitNew = () => {
    const newData = new Object();
    newData = {};
  };

  return (
    <>
      <h1>애완동물 정보 리스트</h1>
      <PetFieldset
        setName={setName}
        setSpecies={setSpecies}
        setAge={setAge}
        submit={submitNew}
      />
      <PetList data={data} />
    </>
  );
}
export default App;
