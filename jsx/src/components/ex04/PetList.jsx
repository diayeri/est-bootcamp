import React from "react";

export default function PetList(props) {
  return (
    <ul>
      {props.data.map((item) => {
        return (
          <li key={item.id}>
            {item.name}은 {item.species}입니다. 그리고 {item.age}살 입니다.
          </li>
        );
      })}
    </ul>
  );
}
