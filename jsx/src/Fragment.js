import React from "react";

const items = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

function Dl() {
  return items.map((i) => (
    <dl key={i.id}>
      <dt>{i.name}</dt>
      <dd>{i.desc}</dd>
    </dl>
  ));
}

function Fragment() {
  return (
    <React.Fragment>
      <Dl />
    </React.Fragment>
  );
}
export default Fragment;
