import React, { useState } from "react";

export default function PetFieldset({ setPets }) {
  const [name, setName] = useState();
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();

  const updatePets = (e) => {
    e.preventDefault();
    if (name && species && age) {
      setPets((prePets) => [
        ...prePets,
        { name, species, age, id: Date.now() },
      ]);
    }
  };
  return (
    <form action="" onSubmit={updatePets}>
      <fieldset>
        <legend>새로운 애완동물 추가</legend>
        <input
          type="text"
          placeholder="이름"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="종"
          onChange={(e) => setSpecies(e.target.value)}
          value={species}
        />
        <input
          type="text"
          placeholder="나이"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <button type="submit">추가하기</button>
      </fieldset>
    </form>
  );
}
