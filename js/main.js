"use strict";

// function that returns computer choice
const getComputerChoice = () => {
  const moves = ["rock", "paper", "scissors"];
  const move = Math.floor(Math.random() * 3);

  return moves[move];
};

// game round function

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Its a Tie";
  } else if ((playerSelection === "rock") & (computerSelection === "paper")) {
    return "You Lose";
  } else if (
    (playerSelection === "rock") &
    (computerSelection === "scissors")
  ) {
    return "You Won";
  } else if (
    (playerSelection === "paper") &
    (computerSelection === "scissors")
  ) {
    return "You Lose";
  } else if ((playerSelection === "paper") & (computerSelection === "rock")) {
    return "You Won";
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "paper")
  ) {
    return "You Won";
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "rock")
  ) {
    return "You Lose";
  }
};

const game = () => {
  let i = 0;
  while (i < 5) {
    const userMove = prompt("Your move: ");
    const cpuMove = getComputerChoice();
    const result = playRound(userMove, cpuMove);
    console.log(result);
    i++;
  }
};

// game();
