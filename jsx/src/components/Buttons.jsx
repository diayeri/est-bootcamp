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

export { Button1, Button2, Button3 };
