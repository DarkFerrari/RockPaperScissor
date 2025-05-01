console.log("Hello there");
let HumanScore = 0;
let ComputerScore = 0;
let tie = 0;
let GameResult = "";

document.querySelector(".play-again").addEventListener("click", ()=>{
    HumanScore = 0;
    ComputerScore = 0;
    tie = 0;
    GameResult = "";
    updateScore()
} )

function getComputerChoice() {
  let computerChoice = Math.random() * 100;

  if (computerChoice < 33.33) {
    //console.log("Rock")
    computerChoice = "rock";
  } else if (computerChoice > 66.66) {
    //console.log("scissor")
    computerChoice = "scissor";
  } else {
    //console.log("paper")
    computerChoice = "paper";
  }

  return computerChoice;
}

function getHumanChoice(a) 
{
  if (a == "") {
     return null;
  } else {
    b = a.toLowerCase();
  }
  console.log("Provided input is '", b, "' and it is of type ", typeof b);
  console.log("ParseInt of the ", b, " is : ", parseInt(b));

  return check_valid_string(b);
}

function check_valid_string(b) {
  let result = "";
  if (b == "rock" || b == "paper" || b == "scissor") {
    result = b;
  }
  return result;
}

// let Human = getHumanChoice();

// let Computer = getComputerChoice();

function beginGame(Human, Computer) {
  if (Human === Computer) {
    return "tie";
  } else if (Computer === "rock") {
        if (Human === "paper") return "Human wins this round";
        else if (Human === "scissor") return "Computer wins this round";
  } else if (Computer === "scissor") {
        if (Human === "rock") return "Human wins this round";
        else return "Computer wins this round";
  } else if (Computer === "paper") {
        if (Human === "scissor") return "Human wins this round";
        else return "Computer wins this round";
  } else {
        return "something wrong";
  }

}

function playRound(Human) 
{
  if (Human == "") {
    return GameResult = null;
  }
  console.log("Human choice is : ", Human);
  Computer = getComputerChoice();
  console.log("computer choice is : ", Computer);
  GameResult = beginGame(Human, Computer);
  if (GameResult == "tie") {
    tie++;
  } else if (GameResult == "Computer wins this round") ComputerScore++;
  else HumanScore++;


  updateScore();
  return GameResult;
}

let input = document.querySelector(".rps-input");
let submit = document.querySelector(".submit");
let Human = null;

document.querySelector(".rock-button").addEventListener("click", () => playRound("rock"))
document.querySelector(".paper-button").addEventListener("click", () => playRound("paper"))
document.querySelector(".scissor-button").addEventListener("click", () => playRound("scissor"))

submit.addEventListener("click", () => 
    {
        a = input.value;
        let Human = getHumanChoice(a);
        if(Human==null) return document.querySelector(".output").textContent = "no choice entered";
        GameResult = playRound(Human);
        console.log("from eventlistener",GameResult);

        //console.log(GameResult)

        // if (GameResult == "tie") GameResult = "Round Tie";
        // else if (GameResult == "Human wins this round") GameResult = "Human wins this round";
        // else GameResult = "computer wins this round";

        updateScore()
    }
);

    function updateScore()
    {   
        console.log(GameResult)
        document.querySelector(".output").textContent =
        GameResult +
        "\n\nOverall number of tie's is " +
        tie +
        "\nOverall Human score is " +
        HumanScore +
        " \nOverall Computer score is " +
        ComputerScore;
        document.querySelector(".output").style.whiteSpace = "pre-line";
    }


//rock wins with scissor so rock but paper
//scissor wins with paper but not rock
//paper wins with rock but not scissor
