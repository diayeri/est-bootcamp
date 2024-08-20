import React from "react";

export default function PetFieldset({
  setName,
  setSpecies,
  setAge,
  submitNew,
}) {
  return (
    <form action="">
      <filedset>
        <legend>새로운 애완동물 추가</legend>
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="종" />
        <input type="text" placeholder="나이" />
        <button type="submit" onClick={submitNew}>
          추가하기
        </button>
      </filedset>
    </form>
  );
}
