function getComputerChoice() {
    let choice = getRandomInteger(0, 2)

    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else {
        return "scissors"
    }
}

function getRandomInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getComputerChoice());

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

IF computer wins: 
    Show "You lost"
IF human wins:
    Show "You win"
*/