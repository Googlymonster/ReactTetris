import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback, gameOver }) => (
  <StyledStartButton onClick={callback}>
    {gameOver ? "Restart Game" : "Start Game"}
  </StyledStartButton>
);

export default StartButton;
