import React, { useState } from "react";
import useInput from "../hook/useInput";

function Input() {
  // const [value, setValue] = useState("");
  // function onChange(e) {
  //   setValue(e.target.value);
  // }
  const [value, onChange] = useInput("");

  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}</div>
    </>
  );
}

export default Input;
