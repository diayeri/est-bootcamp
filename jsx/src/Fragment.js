import React from "react";

const items = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

function Fragment() {
  const dts = items.map((i) => (
    <React.Fragment key={i.id}>
      <dt>{i.name}</dt>
      <dd>{i.desc}</dd>
    </React.Fragment>
  ));

  return (
    <React.Fragment>
      <h1>정의 리스트</h1>
      <dl>{dts}</dl>
    </React.Fragment>
  );
}
export default Fragment;
