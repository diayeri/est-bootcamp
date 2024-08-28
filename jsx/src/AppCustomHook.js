import React from "react";
import Input from "./components/Input";
import useScroll from "./hook/useScroll";
export default function AppCustomHook() {
  useScroll();
  return (
    <div style={{ height: "200vh" }}>
      <Input />
      {/* <button>테스트</button> */}
      <span style={{ marginTop: "100px" }}>span</span>
    </div>
  );
}
