const computerChoice = getComputerChoice ();
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

console.log(computerChoice)

let humanChoice = getHumanChoice ();
function getHumanChoice () {
    let response = prompt ("Rock, Paper, or Scissors", "type your choice")
    return String(response);
}

let humanChoiceStandard = toStandardizeCase ();
function toStandardizeCase () {
    let firstLetter = humanChoice.charAt(0).toUpperCase();
    let restOfWord = humanChoice.slice(1).toLowerCase();
    return firstLetter + restOfWord;
}

let humanScore = 0
let computerScore = 0

let roundResult = playRound ();
function playRound () {
    if (computerChoice == humanChoiceStandard) {
        return "tie";
    } else if (humanChoiceStandard == "Rock" && computerChoice == "Scissors" || 
        humanChoiceStandard == "Scissors" && computerChoice == "Paper" ||
        humanChoiceStandard == "Paper" && computerChoice == "Rock") {
            humanScore + 1
            return "win";
    } else {
        computerScore + 1
        return "lose"}
}



console.log(roundResult)
