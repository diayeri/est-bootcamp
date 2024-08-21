import styled, { css } from "styled-components";

const StyledPropsButton = styled.button`
  background-color: ${(props) => {
    switch (props.color) {
      case "danger":
        return "red";
      case "success":
        return "green";
      default:
        return "grey";
    }
  }};
  width: ${(props) => (props.fullwidth ? "100%" : "auto")};
  transition: all 0.2s;
  &:hover {
    ${(props) => props.size === "large" && "transform: scale(1.5)"};
  }
`;

// const StyledPropsButton

export default StyledPropsButton;
