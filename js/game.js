function getComputerChoice() {
    let choice = getRandomInteger(0, 2)

    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getUserChoice() {
    let choice;
    let correctInput = false;

    while(!correctInput) {
        choice = prompt("Choose rock, paper or scissors").toLowerCase();

        if(choice == "rock") {
            correctInput = true;
            return choice;
        }
        else if (choice == "paper") {
            correctInput = true;
            return choice;
        }
        else if (choice == "scissors"){
            correctInput = true;
            return choice;
        }
    }
}

function playRound(playerSelection, computerSelection) {
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

function game() {
    let userChoice;
    let computerChoice;
    let message;
    let computerPoints = 0;
    let userPoints = 0;
    while (computerPoints < 5 && userPoints < 5){
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();

        message = playRound(userChoice, computerChoice);
        console.log(message);

        if (message == "Tie game!"){

        }
        else if (message.slice(0, 8) == "You win!") {
            userPoints++;
        }
        else {
            computerPoints++;
        }
    }

    if (computerPoints == 5) {
        console.log("Computer won...")
    }
    else {
        console.log("You won!");
    }
}

game();

/*
Pseudo coding

While: Computer wins < 5 or Human wins <5
    Ask user input: Rock, paper, scissors
        Check for legal input
        Check capitalization
    Generate computers choice: Rock, paper or scissors
    Compare choices
    IF computer won:
        add win to computer
    IF human won:
        add win to human
    Show results

    */
