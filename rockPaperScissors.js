
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

console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0


function playRound () {
    if (computerChoice == humanChoiceStandard) {
        return "tie";
    } else if (humanChoiceStandard == "Rock" && computerChoice == "Scissors" || 
        humanChoiceStandard == "Scissors" && computerChoice == "Paper" ||
        humanChoiceStandard == "Paper" && computerChoice == "Rock") {
            return "win";
    } else {
        return "lose"}
}

function playGame () {

        playRound ();
        let roundResult = playRound ();
        console.log(roundResult)
        getComputerChoice ()
        getHumanChoice
        toStandardizeCase ()

    }
    

console.log(playGame())

