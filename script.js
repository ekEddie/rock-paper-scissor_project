"use strict";

const score0El = document.querySelector("#score-0");
const score1El = document.querySelector("#score-1");
const choice0El = document.querySelector("#choice-0");
const choice1El = document.querySelector("#choice-1");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");

let score = [0, 0];

score0El.textContent = 0;
score1El.textContent = 0;
choice0El.classList.add("hidden");
choice1El.classList.add("hidden");

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissor.addEventListener("click", playRound);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

function getHumanChoice() {
  const choice = value;
  return choice;
}

function playRound(humanChoice, computerChoice) {
  computerChoice = getComputerChoice();
  humanChoice = this.value;
  choice0El.classList.remove("hidden");
  choice1El.classList.remove("hidden");
  choice0El.textContent = humanChoice;
  choice1El.textContent = computerChoice;
  score0El.textContent = score[0];
  score1El.textContent = score[1];
  if (score[0] >= 5) {
    document.querySelector(".player--0").classList.add("winner");
  } else if (score[1] >= 5) {
    document.querySelector(".player--1").classList.add("winner");
  }
  if (humanChoice === computerChoice) {
    console.log("draw");
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    console.log("you win");
    score[0] += 1;
    score0El.textContent = score[0];
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    console.log("you win");
    score[0] += 1;
    score0El.textContent = score[0];
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("you win");
    score[0] += 1;
    score0El.textContent = score[0];
  } else if (computerChoice === "rock" && humanChoice === "scissor") {
    console.log("computer wins");
    score[1] += 1;
    score1El.textContent = score[1];
  } else if (computerChoice === "scissor" && humanChoice === "paper") {
    console.log("computer wins");
    score[1] += 1;
    score1El.textContent = score[1];
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("computer wins");
    score[1] += 1;
    score1El.textContent = score[1];
  }
}

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   const round1 = playRound(getComputerChoice(), getHumanChoice());
//   if (round1 === 1) {
//     humanScore += 1;
//   } else if (round1 === 2) {
//     computerScore += 1;
//   }
//   console.log(humanScore, computerScore);
//   const round2 = playRound(getComputerChoice(), getHumanChoice());
//   if (round2 === 1) {
//     humanScore += 1;
//   } else if (round2 === 2) {
//     computerScore += 1;
//   }
//   console.log(humanScore, computerScore);
//   const round3 = playRound(getComputerChoice(), getHumanChoice());
//   if (round3 === 1) {
//     humanScore += 1;
//   } else if (round3 === 2) {
//     computerScore += 1;
//   }
//   console.log(humanScore, computerScore);
//   const round4 = playRound(getComputerChoice(), getHumanChoice());
//   if (round4 === 1) {
//     humanScore += 1;
//   } else if (round4 === 2) {
//     computerScore += 1;
//   }
//   console.log(humanScore, computerScore);
//   const round5 = playRound(getComputerChoice(), getHumanChoice());
//   if (round5 === 1) {
//     humanScore += 1;
//   } else if (round5 === 2) {
//     computerScore += 1;
//   }
//   console.log(humanScore, computerScore);

//   if (humanScore > computerScore) {
//     console.log("YOU WIN");
//   } else if (computerScore > humanScore) {
//     console.log("YOU LOSE, COMPUTER WIN");
//   } else if (computerScore === humanScore) {
//     console.log("DRAW");
//   }
// }
// playGame();
