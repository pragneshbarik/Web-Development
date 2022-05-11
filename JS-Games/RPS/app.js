const yourClick = document.querySelectorAll("button");
const compChoices = ["Rock", "Paper", "Scissors"];



yourClick.forEach((choice)=>{
    choice.addEventListener("click", (clicked)=>{
        var yourChoice = clicked.target.id
        document.querySelector("#yrChoice").innerHTML = yourChoice;
        let compChoice = chooseRandom();
        if(compChoice === "Rock" && yourChoice==="Paper") {
            document.querySelector("#Result").innerHTML = "You Win";
        }
        else if(compChoice === "Rock" && yourChoice==="Scissors") {
            document.querySelector("#Result").innerHTML = "You Lose";
        }
        else if(compChoice === "Paper" && yourChoice==="Rock") {
            document.querySelector("#Result").innerHTML = "You Lose";
        }
        else if(compChoice === "Paper" && yourChoice==="Scissors") {
            document.querySelector("#Result").innerHTML = "You Win";
        }
        else if(compChoice === "Scissors" && yourChoice==="Paper") {
            document.querySelector("#Result").innerHTML = "You Lose";
        }
        else if(compChoice === "Scissors" && yourChoice==="Rock") {
            document.querySelector("#Result").innerHTML = "You win";
        }
        else {
            document.querySelector("#Result").innerHTML = "Draw";
        }

    })
    
})

function chooseRandom (){
    var compChoice = compChoices[Math.floor(Math.random()*3)];
    document.querySelector("#compChoice").innerHTML = compChoice;
    return compChoice
}