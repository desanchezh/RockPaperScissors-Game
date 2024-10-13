
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

let humanChoice = ""

let rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click", () => {
    humanChoice = "Rock"
    playRound()
    //create a function that shows user selection and computer selection image//
})
let paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click", () => {
    humanChoice = "Paper"
    playRound()
})
let scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener("click", () => {
    humanChoice = "Scissors"
    playRound()
})

let humanScore = 0;
let computerScore = 0;

let scoreUser = document.querySelector("#scoreUser");
let currentScoreUser = document.createElement("span")
scoreUser.appendChild(currentScoreUser)
currentScoreUser.textContent = `Your score: ${humanScore}`;

let scoreComputer = document.querySelector("#scoreComputer");
let currentScoreComputer = document.createElement("span")
scoreComputer.appendChild(currentScoreComputer)
currentScoreComputer.textContent = `Computer score: ${computerScore}`;

let result = document.querySelector("#result");
let message = document.createElement("span");
result.appendChild(message);
message.textContent = "make your choice."

function playRound () {
    computerChoice = getComputerChoice();
    if (computerChoice == humanChoice) {
        message.textContent = "";
        message.textContent = `It's a tie! You both chose ${computerChoice}`;
        currentScoreUser.textContent = "";
        currentScoreComputer.textContent = "";
        currentScoreUser.textContent = `Your score: ${humanScore}`;
        currentScoreComputer.textContent = `Computer score: ${computerScore}`;
        return "tie";
    } else if (humanChoice == "Rock" && computerChoice == "Scissors" || 
        humanChoice == "Scissors" && computerChoice == "Paper" ||
        humanChoice == "Paper" && computerChoice == "Rock") {
            humanScore++;
            message.textContent = "";
            message.textContent = `You win! You chose ${humanChoice} and the computer chose ${computerChoice}`
            currentScoreUser.textContent = "";
            currentScoreComputer.textContent = "";
            currentScoreUser.textContent = `Your score: ${humanScore}`;
            currentScoreComputer.textContent = `Computer score: ${computerScore}`;
            return "win";
        } else {
            computerScore++;
            message.textContent = "";
            message.textContent = `You lose. You chose ${humanChoice} and the computer chose ${computerChoice}`;
            currentScore.textContent = "";
            currentScoreUser.textContent = "";
            currentScoreComputer.textContent = "";
            currentScoreUser.textContent = `Your score: ${humanScore}`;
            currentScoreComputer.textContent = `Computer score: ${computerScore}`;
            return "lose"}
    }

    //needs a hard cutoff after 5 rounds (reset button or reload page)//
if (humanScore == 5) {
    message.textContent = "";
    message.textContent = "You win! :)";
} else if (computerScore == 5) {
    message.textContent = "";
    message.textContent = "You lose :(";
}
