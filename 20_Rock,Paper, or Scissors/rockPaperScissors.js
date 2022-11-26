const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }else{
      console.log('Invalid choice');
    }
  };
  
  const getComputerChoice = () => {
    ranNum = Math.floor(Math.random()*3);
    switch (ranNum){
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'The game is a tie!';
    }
  
    if (userChoice === 'bomb'){
      return 'You Win!';
    }
  
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Computer win!';
      }else{
        return 'User win!';
      }
    }
  
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Computer Win!';
      }else{
        return 'You Win!';
      }
    }
  
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Computer Win!';
      }else{
        return 'You Win!';
      }
    }
  
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`User choice is: ${userChoice}, Computer Choice is: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  