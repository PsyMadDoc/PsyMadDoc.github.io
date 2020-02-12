// Possible outcomes
const win = 'You win!';
const lose = 'You lose!';
const tie = "It's a tie!";
const invalid = 'Stop trying to be funny and play the damn game... smh';
const playButton = document.getElementById('playBtn');
let choiceButtons = document.querySelectorAll('.choiceBtn');

// Reveal choice buttons
const showChoices = () => {
  document.getElementById('showChoicesContainer').style.visibility = 'visible';
  document.getElementById('showWinnerContainer').style.visibility = 'visible';
};

playButton.addEventListener('click', showChoices);

// Get computer input
const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
      break;
    default:
      console.log('getComputerChoice error');
      break;
  }
};

// Compute winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return tie;
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return lose;
    } else if (computerChoice === 'scissors') {
      return win;
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return lose;
    } else if (computerChoice === 'paper') {
      return win;
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return lose;
    } else if (computerChoice === 'rock') {
      return win;
    }
  } else {
    return invalid;
  }
};

// Reveal results text
const showResults = (userChoice, computerChoice, result) => {
  document.getElementById(
    'yourChoice'
  ).innerHTML = `Your choice is: ${userChoice}`;
  document.getElementById(
    'computerChoice'
  ).innerHTML = `Computer's choice is: ${computerChoice}`;
  document.getElementById('winner').innerHTML = `...And the result is: `;
  document.getElementById('winnerResult').innerHTML = `${result}`.toUpperCase();
};

// Check what button was clicked, get attr of button, compute and show results
const getUserChoiceAndPlay = event => {
  let target = event.target.getAttribute('data-choice');
  let computerChoice = getComputerChoice();
  showResults(target, computerChoice, determineWinner(target, computerChoice));
};

choiceButtons.forEach(item => {
  item.addEventListener('click', getUserChoiceAndPlay);
}); // AddEventListener for each button
