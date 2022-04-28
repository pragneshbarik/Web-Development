/// <reference path="../typings/globals/jquery/index.d.ts" />
var colors = ["green", "red", "yellow", "blue"];
var level = 0;
var gamePattern = [];
var clickedPattern = [];
var started = false;

$(document).keypress(function() {
    if(!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

$(".btn").click(function() {
    var clickedColor  = this.classList[1];
    clickedPattern.push(clickedColor);
    console.log(clickedPattern);
    play_animation(clickedColor);
    play_sound(clickedColor);
    checkAnswer(clickedPattern.length -1);
})

function checkAnswer(cur){
    if(gamePattern[cur] === clickedPattern[cur]) {
        if(clickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        play_sound("wrong");
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function play_animation (btn_color) {
    $("." + btn_color).fadeOut(100).fadeIn(100);
    $("." + btn_color).addClass("pressed");
    setTimeout(function () {
        $("." + btn_color).removeClass("pressed");
    }, 100);
}


function startOver () {
    level = 0;
    gamePattern = [];
    started = false;
}
function play_sound(btn_color) {
    to_play = new Audio("sounds/" + btn_color + ".mp3");
    to_play.play();
}

function nextSequence () {
    clickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var r = Math.floor(Math.random() * 4);
    var rChosenColor = colors[r];
    gamePattern.push(rChosenColor);
    $("." + rChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    play_sound(rChosenColor);
}