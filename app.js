let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");


let genCompChoice = () => {
    let options = ["rock","paper","scissors"]
    //randomly koi bhi ek generate krega rock, paper, scissors
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}



let drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw, Try Again.";
    msg.style.backgroundColor = "black";
}



let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `you lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}



let playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //generate computer choice -> modular
    let compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame(); //13 se 15
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}



choices.forEach((choice) => {
//console.log(choice) // seprate hogaye alg alg
    choice.addEventListener("click", () => {
        // console.log("choice is click") //click pr km kr rha hai addevent
        let userChoice = choice.getAttribute("id");
        // console.log("choice is click", userChoice) //kr rha km sai

        playGame(userChoice); // 18
    })
})