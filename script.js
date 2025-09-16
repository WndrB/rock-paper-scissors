
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

console.log(getComputerChoice());