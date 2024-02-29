import React from "react";
import { StyledButton } from "./Button.styled";

export const SimpleButton = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick} type="submit">
      {children}
    </StyledButton>
  );
};
