let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = number => {
  number = Math.floor(Math.random() * 10);
  return number;
}

const compareGuesses = (humanGuess, comGuess, targetGuess) => {
  const humanDiff = Math.abs(targetGuess - humanGuess);
  const compDiff = Math.abs(targetGuess - comGuess);
  if (humanDiff <= compDiff){
    return true;
  }else{
    return false;
  }
}

const updateScore = winner => {
  if (winner === 'human'){
    humanScore++;
  }else if(winner === 'computer'){
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
