"use strict"

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

function getHumanChoice(){
    const choice = prompt('choose ROCK PAPER SCISSOR').toLowerCase()
    return choice;
}
function playRound(humanChoice, computerChoice) {
    const humansWin = 1
    const computerWin = 2
    const draw = 0
    if (humanChoice === computerChoice){
        console.log('draw')
        return draw;
    } else if (humanChoice === 'rock' && computerChoice === 'scissor') {
        console.log('you win')
        return humansWin;
    } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
        console.log('you win')
        return humansWin;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('you win')
        return humansWin;
    } else if (computerChoice === 'rock' && humanChoice === 'scissor') {
        console.log('computer wins')
        return computerWin;
    } else if (computerChoice === 'scissor' && humanChoice === 'paper') {
        console.log('computer wins')
        return computerWin;
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        console.log('computer wins')
        return computerWin;
    }
  }

  
  function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    const round1 = playRound(getComputerChoice(), getHumanChoice())
    if (round1 === 1){
        humanScore +=1;
    } else if (round1 === 2){
        computerScore +=1;
    }
    console.log(humanScore, computerScore);
    const round2 = playRound(getComputerChoice(), getHumanChoice())
    if (round2 === 1){
        humanScore +=1;
    } else if (round2 === 2){
        computerScore +=1;
    }
    console.log(humanScore, computerScore);
    const round3 = playRound(getComputerChoice(), getHumanChoice())
    if (round3 === 1){
        humanScore +=1;
    } else if (round3 === 2){
        computerScore +=1;
    }
    console.log(humanScore, computerScore);
    const round4 = playRound(getComputerChoice(), getHumanChoice())
    if (round4 === 1){
        humanScore +=1;
    } else if (round4 === 2){
        computerScore +=1;
    }
    console.log(humanScore, computerScore);
    const round5 = playRound(getComputerChoice(), getHumanChoice())
    if (round5 === 1){
        humanScore +=1;
    } else if (round5 === 2){
        computerScore +=1;
    }
    console.log(humanScore, computerScore);

    if (humanScore > computerScore){
        console.log('YOU WIN');
    } else if (computerScore > humanScore){
        console.log('YOU LOSE, COMPUTER WIN');
    } else if (computerScore === humanScore){
        console.log('DRAW')
    }
  }
  playGame();