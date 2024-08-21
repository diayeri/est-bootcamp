import React from "react";
import styled, { css } from "styled-components";

const ButtonRound = css`
  border-radius: 10px;
  border: 0;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const Button1 = styled.button`
  background-color: royalblue;
  padding: 0.5em;
  color: white;
`;

const Button2 = styled(Button1)`
  ${ButtonRound}
  color: black;
`;

const Button3 = styled(Button1)`
  ${ButtonRound}
  background-color: greenyellow;
`;

export default function AppEx6() {
  return (
    <div>
      <Button1>버튼1</Button1>
      <Button2>버튼2</Button2>
      <Button3>버튼3</Button3>
    </div>
  );
}
