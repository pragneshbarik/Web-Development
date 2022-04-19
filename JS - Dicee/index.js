function throwDice(){
    return Math.floor(Math.random()*(6)) + 1;
}
var dice1 = throwDice();
var dice2 = throwDice();
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+dice1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+dice2+".png");

if(dice1>dice2) {
    document.getElementById("title").innerHTML="Player 1 wins";
}
else if(dice2>dice1) {
    document.getElementById("title").innerHTML="Player 2 wins";
}
else {
    document.getElementById("title").innerHTML="Tie";
}