import React from "react";
import { Button1, Button2, Button3 } from "./components/Buttons";
import StyledPropsButton from "./components/StyledPropsButton";

export default function AppEx6() {
  return (
    <div>
      <StyledPropsButton color="" size="large" fullwidth="true">
        스타일링된 버튼
      </StyledPropsButton>
      <Button1>버튼1</Button1>
      <Button2>버튼2</Button2>
      <Button3>버튼3</Button3>
    </div>
  );
}
