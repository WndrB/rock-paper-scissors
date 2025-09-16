

// Make a random computer choice
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

// Get the user's choice.
function getHumanChoice(message) {
    choice = prompt(message, "");
    return choice.toLowerCase();
}

// Play five rounds
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    // Play only one round
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
    
    // Show the final score after the five rounds
    function showFinalScore(computerScore, humanScore) {
        console.log("#####")
        console.log(`The final score is: Computer = ${computerScore} pts. You = ${humanScore} pts.`);
    }
    
    // round 1
    console.log("Round One!")
    humanSelection = getHumanChoice("Round one! Type rock, paper, or scissors.");
    computerSelection = getComputerChoice();
    console.log(playRound(computerSelection, humanSelection));
    
    // round 2
    console.log("Round Two!")
    humanSelection = getHumanChoice("Round Two! Type rock, paper, or scissors.");
    computerSelection = getComputerChoice();
    console.log(playRound(computerSelection, humanSelection));
    
    // round 3
    console.log("Round Three!")
    humanSelection = getHumanChoice("Round Three! Type rock, paper, or scissors.");
    computerSelection = getComputerChoice();
    console.log(playRound(computerSelection, humanSelection));
    
    // round 4
    console.log("Round Four!")
    humanSelection = getHumanChoice("Round Four! Type rock, paper, or scissors.");
    computerSelection = getComputerChoice();
    console.log(playRound(computerSelection, humanSelection));
    
    // round 5
    console.log("Last Round!")
    humanSelection = getHumanChoice("Last Round! Type rock, paper, or scissors.");
    computerSelection = getComputerChoice();
    console.log(playRound(computerSelection, humanSelection));
    
    showFinalScore(computerScore, humanScore);
}

playGame();