
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
            return "tie";
            
        } else if (humanChoice == "Rock" && computerChoice == "Scissors" || 
            humanChoice == "Scissors" && computerChoice == "Paper" ||
            humanChoice == "Paper" && computerChoice == "Rock") {
                humanScore++;
                return "win";
                
        } else {
            computerScore++;
            return "lose"}
    }

    console.log(playRound ())
    console.log(playRound ())
    console.log(playRound ())
    console.log(playRound ())
    console.log(playRound ())


    console.log("Player score: " + humanScore)
    console.log("Computer score: " + computerScore)

    }


console.log(playGame())
