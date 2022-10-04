const NUMBER_OF_WINS = 5;

let computerPoints = 0;
let userPoints = 0;


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInteger(0, 2)];
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function cleanPoints() {
    computerPoints = 0;
    userPoints = 0;
}

function playRound(playerSelection, computerSelection) {
// The logic, that decides did the user win or lost and individual round

    if (playerSelection == computerSelection) {
        return "Tie game!";
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You win! Scissors beats paper";
        }
        else {
            return "You lost. Rock defeats scissors";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock";
        }
        else {
            return "You lost. Scissors beat paper"
        }
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You win! Rock beats scissors"
        }
        else
            return "You lost. Paper beats rock"
    }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', game("rock"));
paperBtn.addEventListener('click', game("paper"));
scissorsBtn.addEventListener('click', game("scissors"));


function game(userChoice) {
    let computerChoice;
    let message;

    computerChoice = getComputerChoice();

    message = playRound(userChoice, computerChoice);
    console.log(message);

    if (message == "Tie game!"){
        // Do nothing
    }
    else if (message.slice(0, 8) == "You win!") {
        userPoints++;
    }
    else {
        computerPoints++;
    }

    // Win checking
    if (computerPoints == 5) {
        console.log("Computer won...")
        cleanPoints();
    }
    else if (userPoints == 5) {
        console.log("You won!");
        cleanPoints();
    }
}

