"use strict";

const score0El = document.querySelector("#score-0");
const score1El = document.querySelector("#score-1");
const choice0El = document.querySelector("#choice-0");
const choice1El = document.querySelector("#choice-1");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");
const choiceCont0 = document.querySelector("#player");
const choiceCont1 = document.querySelector("#comp");
score0El.textContent = 0;
score1El.textContent = 0;
choice0El.classList.add("hidden");
choice1El.classList.add("hidden");
choiceCont0.classList.remove("point");
choiceCont1.classList.remove("point");
let playing = true;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

let score = [0, 0];
function playRound(humanChoice, computerChoice) {
  if (playing) {
    computerChoice = getComputerChoice();
    humanChoice = this.value;
    choice0El.classList.remove("hidden");
    choice1El.classList.remove("hidden");

    choice0El.textContent = humanChoice;
    choice1El.textContent = computerChoice;
    score0El.textContent = score[0];
    score1El.textContent = score[1];

    if (humanChoice === computerChoice) {
      console.log("draw");
      choiceCont0.classList.remove("point");
      choiceCont1.classList.remove("point");
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
      console.log("you win");
      score[0] += 1;
      score0El.textContent = score[0];
      choiceCont0.classList.add("point");
      choiceCont1.classList.remove("point");
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      console.log("you win");
      score[0] += 1;
      score0El.textContent = score[0];
      choiceCont0.classList.add("point");
      choiceCont1.classList.remove("point");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("you win");
      score[0] += 1;
      score0El.textContent = score[0];
      choiceCont0.classList.add("point");
      choiceCont1.classList.remove("point");
    } else if (computerChoice === "rock" && humanChoice === "scissor") {
      console.log("computer wins");
      score[1] += 1;
      score1El.textContent = score[1];
      choiceCont0.classList.remove("point");
      choiceCont1.classList.add("point");
    } else if (computerChoice === "scissor" && humanChoice === "paper") {
      console.log("computer wins");
      score[1] += 1;
      score1El.textContent = score[1];
      choiceCont0.classList.remove("point");
      choiceCont1.classList.add("point");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log("computer wins");
      score[1] += 1;
      score1El.textContent = score[1];
      choiceCont0.classList.remove("point");
      choiceCont1.classList.add("point");
    }
    //Determine the Winner
    if (score[0] === 5) {
      document.querySelector(".player--0").classList.add("winner");
      playing = false;
    } else if (score[1] === 5) {
      document.querySelector(".player--1").classList.add("winner");
      playing = false;
    }
  }
}

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissor.addEventListener("click", playRound);
