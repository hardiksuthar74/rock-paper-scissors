"use strict";

// function that returns computer choice
const getComputerChoice = () => {
  const moves = ["rock", "paper", "scissors"];
  const move = Math.floor(Math.random() * 3);
  return moves[move];
};

// game round function

const userHand = document.querySelectorAll(".btn");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const tie = document.querySelector(".tie");
const reset = document.querySelector(".resets");

win.textContent = 0;
lose.textContent = 0;
tie.textContent = 0;

userHand.forEach((hand) => {
  hand.addEventListener("click", () => {
    let userMove = hand.value;
    let cpuMove = getComputerChoice();
    game(userMove, cpuMove);
  });
});

const game = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return (tie.textContent = tie.textContent * 1 + 1);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return (win.textContent = win.textContent * 1 + 1);
  } else {
    return (lose.textContent = lose.textContent * 1 + 1);
  }
};

reset.addEventListener("click", () => {
  win.textContent = 0;
  lose.textContent = 0;
  tie.textContent = 0;

  reset.classList.add("dance-animation");

  setTimeout(function () {
    reset.classList.remove("dance-animation");
  }, 1000);
});
