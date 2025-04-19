console.log("Hello there");
let HumanScore = 0
let ComputerScore = 0
let tie = 0

function getComputerChoice() {
    let a = (Math.random() * 100);
    //console.log(a);

    if (a<=33){
        //console.log("Rock")
        a="rock"
    }
    else if (a>66){
        //console.log("scissor")
        a="scissor"
    }
    else{
        //console.log("paper")
        a="paper"
    }

    return a;
}

function getHumanChoice(){

    let a = prompt("enter rock/paper/scissor"); 
    if (a==null){
        return null
    }
    let b = a.toLowerCase();
    console.log("Provided input is '", b,"' and it is of type ",typeof b);
    console.log("ParseInt of the ",b, " is : ",parseInt(b));
    
    //let checked_value = check_valid_string(b)

    
    return check_valid_string(b)
}

function check_valid_string(b){
    let result = '';
    if (((b=="rock")||(b=="paper")||(b=="scissor"))) //if input is string, parseInt tries to convert to number and gives NaN, which allows to enter "IF"
        {
            result = b;
        }
        else if (b===null) return null;
       else// if isNaN is flase, it means the value is a number, which gives should ask the user to only enter rock,paper,scissor 
       {
        console.log("you entered wrong value")
        let b = prompt("enter only rock paper scissor")
        if (b==null) return null;
        let c = b.toLowerCase();
        console.log("value of lower case c is : ",c)
        result = check_valid_string(c)
       }
    return result;

}

// let Human = getHumanChoice();


// let Computer = getComputerChoice();



function beginGame(Human, Computer) {
    if (Human === Computer) {
        return "tie";
    } else if (Computer === "rock") {
        if (Human === "paper") return "Human wins";
        else if (Human === "scissor") return "Computer wins";
    } else if (Computer === "scissor") {
        if (Human === "rock") return "Human wins";
        else return "Computer wins";
    } else if (Computer === "paper") {
        if (Human === "scissor") return "Human wins";
        else return "Computer wins";
    } else {
        return "something wrong";
    }
}


//GameResult=beginGame(Human,Computer)
function playRound() {
  for(i=0;i<5;i++) {
    Human = getHumanChoice();
    if (Human==null) break;
    console.log("Human choice is ",Human);
    Computer = getComputerChoice();
    console.log("Computer choice is ",Computer);
    GameResult = beginGame(Human, Computer);
    console.log(GameResult)
    if (GameResult == "tie") {
        tie++
    }
    else if (GameResult == "Computer wins") ComputerScore ++;
    else HumanScore ++;
  }
  return GameResult
}





GameResult= playRound()
if (HumanScore==ComputerScore) GameResult="Round Tie"
    else if (HumanScore>ComputerScore) GameResult= ("Human wins this round ")
    else GameResult=("computer wins this round")

document.getElementsByClassName("output")[0].innerHTML = GameResult + "<br>Number of tie is "+tie+"<br> <b>Human score is</b> " +HumanScore + " <br>Computer score is " +ComputerScore







//rock wins with scissor so rock but paper
//scissor wins with paper but not rock
//paper wins with rock but not scissor