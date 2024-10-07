
function getComputerChoice () {
    let randomNumber = Math.random(); 
    if (randomNumber <= (1/3)) {
        return "Rock";
    } else if (randomNumber <= (2/3)) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//I realized too late (throwaway project) that I could have just checked the input by applying .toLowerCase to input and computer choice//
function getHumanChoice () {
    let response = prompt ("Rock, Paper, or Scissors", "type your choice")
    function toStandardizeCase (response) {
        let firstLetter = response.charAt(0).toUpperCase();
        let restOfWord = response.slice(1).toLowerCase();
    return firstLetter + restOfWord
    }
    return String(toStandardizeCase(response));
}

function playGame () {
    let humanScore = 0
    let computerScore = 0
    function playRound () {
        computerChoice = getComputerChoice()
        humanChoice =  getHumanChoice ()
        if (computerChoice == humanChoice) {
            console.log(`It's a tie! You chose ${humanChoice} and the computer chose ${computerChoice}`);
            return "tie";

        } else if (humanChoice == "Rock" && computerChoice == "Scissors" || 
            humanChoice == "Scissors" && computerChoice == "Paper" ||
            humanChoice == "Paper" && computerChoice == "Rock") {
                humanScore++;
                console.log(`You win! You chose ${humanChoice} and the computer chose ${computerChoice}`);
                return "win";
                
        } else {
            computerScore++;
            console.log(`You lose. You chose ${humanChoice} and the computer chose ${computerChoice}`);
            return "lose"}
    }

    for (let i = 0; i < 5; i++) {
        playRound ()
    }

    console.log("Player score: " + humanScore)
    console.log("Computer score: " + computerScore)

    }

console.log(playGame())