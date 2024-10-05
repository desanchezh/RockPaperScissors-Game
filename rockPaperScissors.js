let computerChoice = getComputerChoice ();
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

let humanChoice = getHumanChoice ();
function getHumanChoice () {
    let response = prompt ("Type Rock, Paper, or Scissors", "no answer")
    return String(response)
}

let humanChoiceStandard = toStandardizeCase ();
function toStandardizeCase () {
    let firstLetter = humanChoice.charAt(0).toUpperCase();
    let restOfWord = humanChoice.slice(1).toLowerCase();
    return firstLetter + restOfWord
}

console.log (humanChoiceStandard)

