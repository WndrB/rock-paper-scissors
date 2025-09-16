let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice;
    const random_number = Math.random() * 3;
    if (random_number < 1) {
       choice = "rock"
    } else if (random_number < 2) {
       choice = "paper"
    } else {
      choice = "scissors"
    }
    return choice;
}

function getHumanChoice() {
    choice = prompt('Write "rock," "paper," or "scissors."', "");
    return choice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    choices = computerChoice + humanChoice;
    let result;
    if (choices === "rockscissors" || choices === "paperrock" || choices === "scissorspaper") {
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    } else if (choices === "scissorsrock" || choices === "rockpaper" || choices === "paperscissors") {
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        result = `It's a tie.`;
    }
    return result;
}

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

console.log(computerSelection)
console.log(humanSelection)

console.log(playRound(computerSelection, humanSelection));
console.log(computerScore)
console.log(humanScore)