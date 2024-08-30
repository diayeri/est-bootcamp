import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PriceFormatter from "./components/PriceFormatter";

const Li = ({ title, population }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{population}</p>
    </li>
  );
};

// const fetchData = async () => {
//   const req = await fetch("http://localhost:4000/nations");
//   const json = await req.json();
//   return json;
// };

export default function AppEx7() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch("http://localhost:4000/nations");
        if (!req.ok) throw new Error();
        const json = await req.json();
        return setData(json);
      } catch (err) {
        console.error("ERR", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>나라 목록</h1>
      <ul>
        {data.map((i) => (
          <Li key={i.id} title={i.title} population={i.population} />
        ))}
      </ul>
      <div>
        <button type="button" onClick={() => {}}>
          전체목록
        </button>
        <button type="button" onClick={() => {}}>
          유럽목록
        </button>
      </div>
    </>
  );
}
