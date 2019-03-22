var winAudio = new Audio('Thor_Death00.mp3');
var livesTwo = new Audio('Thor_CriticalWhat02.mp3');
var startGame = new Audio('Thor_What08.mp3');
var livesFive = new Audio('Thor_CriticalWhat01.mp3');
var buttonHit = new Audio('UI_Button0.wav');
var dead = new Audio('Thor_Attack05.mp3');
var dead2 = new Audio('Thor_Pissed07.mp3');
var restartAudio = new Audio('Thor_Pissed11.mp3');
var twoAttempts = new Audio('Thor_Pissed04.mp3');
var fiveAttempts = new Audio('Thor_Repaired01.mp3');
var backgroundSong = new Audio('Starcraft 2 Terran Theme Music.mp3');
var fourAttempts = new Audio('Thor_Pissed09.mp3');
var sixAttempts = new Audio('Thor_What05.mp3');
var tenAttempts = new Audio('Thor_What03.mp3');
var twelveAttempts = new Audio('Thor_Pissed10.mp3');



function start() {
    document.getElementById('start').disabled = true;
    document.getElementById('start').style.display = "none";
    document.getElementById("body").className = 'show';
    document.getElementById("loadingScreen").style.display = "none";
    startGame.play();
    backgroundSong.play();
    backgroundSong.volume = 0.5;
    backgroundSong.loop = true;
    generate();

}

// list of variables that will be used. 
var wordList = ["marine", "hellbat", "medic", "helion", "thor", "predator", "hellhound", "specter", "sciencevessel", "vulture", "scv", "valkyrie", "diamondback", "goliath", "banshee", "battlecruiser", "marauder", "firebat", "raven", "wraith", "viking", "ghost", "reaper", "siegetank", "widowmine", "medivac", "liberator", "cyclone"];
var playWord = wordList[Math.floor(Math.random() * wordList.length)];
var myLength = playWord.length;
var answerArray = [];
var livesLeft = 10;
var wrongLetters = [];
var buttonClicked = [];
var correct = false;
var loss = 0;
var win = 0;

function popup() {
    document.getElementById("popup").style.display = "block";
}
function winPop() {
    document.getElementById("winPop").style.display = "block";
}
function resetpop(){
    document.getElementById("lossPop").style.display = "none";
    document.getElementById("winPop").style.display = "none";
}

function lossPop() {
    document.getElementById("lossPop").style.display = "block";
}

function hideImage() {
    document.getElementById("portrait").style.display = "block";
    setTimeout(function () { doHide(); }, 5000);
}

function unpopup() {
    document.getElementById("popup").style.display = "none";
}
function unwinPop() {
    document.getElementById("winPop").style.display = "none";
}

function doHide() {
    document.getElementById("portrait").style.display = "none";
}
// this will generate the list dash array 
function generate() {
    for (var gi = 0; gi < playWord.length; gi++) {
        answerArray[gi] = "_";
        document.getElementById("display").innerHTML = (answerArray.join(""));
    }
}
document.getElementById("display").innerHTML = (answerArray.join(""));
console.log(answerArray.join(""));
console.log(playWord);

// each time a button is pressed it will run this function 
function test() {
    var remainingLetters = playWord.length;

    // this will compare the play with the new word that has been entered into the array buttonclicked, if buttonClicked matches and letter in playWord then this will return correct
    for (var g = 0; g < playWord.length; g++) {
        if (playWord[g] == buttonClicked[buttonClicked.length - 1]) {
            answerArray[g] = buttonClicked[buttonClicked.length - 1];
            remainingLetters--;
            var correct = true;
            console.log(correct);
            console.log("lives left " + livesLeft);
            console.log("wrongLetters: " + wrongLetters);
            console.log(remainingLetters)
            document.getElementById("display").innerHTML = (answerArray.join(""));
            console.log(buttonClicked[buttonClicked.length - 1])

        }

    }
    // if the letter is not matching then this code will return false and var livesLeft will go down by 1    
    if (correct != true) {
        livesLeft--;
        console.log("this does not exist");
        console.log("lives left " + livesLeft);
        wrongLetters.push(buttonClicked[buttonClicked.length - 1]);
        document.getElementById("wrongLetters").innerHTML = "wrong letters: " + wrongLetters;
        document.getElementById("livesLeft").innerHTML = "lives left: " + livesLeft;
    }
    // if livesLeft hits 0 the game will end 
    if (livesLeft == 0) {
        dead.play();
        loss++;
        document.getElementById("winCounter").innerHTML = "Wins: " + win;
        document.getElementById("lossCounter").innerHTML = "Loss: " + loss;
        document.getElementById("answer2").innerHTML ="the word was " + playWord;
        lossPop();
        popup();
    }
    // this will end the game once the player has successfully guessed the word
    if (answerArray.join("") == playWord) {
        console.log("you Win");
        win++;
        document.getElementById('winCounter').innerHTML = "wins: " + win;
        document.getElementById('lossCounter').innerHTML = "loss: " + loss;
        document.getElementById("answer").innerHTML ="the word was " + playWord;
        winAudio.play();
        winPop();
        popup();
        

    }
    if ((livesLeft == 2) && (answerArray.join("") != playWord) && (correct != true)) {
        livesTwo.play();
        hideImage();
    }
    if ((livesLeft == 5) && (answerArray.join("") != playWord) && (correct != true)) {
        livesFive.play();
        hideImage();
    }
    if ((buttonClicked.length == 6) && (answerArray.join("") != playWord)) {
        sixAttempts.play();
        hideImage();
    }
    if ((buttonClicked.length == 8) && (livesLeft != 5) && (livesLeft != 1) ) {
        fiveAttempts.play();
        hideImage();
    }
    if ((buttonClicked.length == 2) && (livesLeft != 1) && (livesLeft != 5) ) {
        twoAttempts.play();
        hideImage();
    }
    if ((buttonClicked.length == 4) && (answerArray.join("") != playWord)) {
        fourAttempts.play();
        hideImage();
    }
    if ((buttonClicked.length == 10) && (answerArray.join("") != playWord)) {
        tenAttempts.play();
        hideImage();
    }
    if ((buttonClicked.length == 12) && (answerArray.join("") != playWord)) {
        twelveAttempts.play();
        hideImage();
    }
}

// these are the button functions, they set the value of disable to true so that the user can not double a word
function a() {
    buttonClicked.push("a");
    console.log(buttonClicked);
    document.getElementById('a').disabled = true;
    buttonHit.play();
    test();

}
function b() {
    buttonClicked.push("b");
    console.log(buttonClicked);
    document.getElementById('b').disabled = true;
    buttonHit.play();
    test();

}
function c() {
    buttonClicked.push("c");
    console.log(buttonClicked);
    document.getElementById('c').disabled = true;
    buttonHit.play();
    test();

}
function d() {
    buttonClicked.push("d");
    console.log(buttonClicked);
    document.getElementById('d').disabled = true;
    buttonHit.play();
    test();

}
function e() {
    buttonClicked.push("e");
    console.log(buttonClicked);
    document.getElementById('e').disabled = true;
    buttonHit.play();
    test();

}
function f() {
    buttonClicked.push("f");
    console.log(buttonClicked);
    document.getElementById('f').disabled = true;
    buttonHit.play();
    test();

}
function g() {
    buttonClicked.push("g");
    console.log(buttonClicked);
    document.getElementById('g').disabled = true;
    buttonHit.play();
    test();

}
function h() {
    buttonClicked.push("h");
    console.log(buttonClicked);
    document.getElementById('h').disabled = true;
    buttonHit.play();
    test();

}

function j() {
    buttonClicked.push("j");
    console.log(buttonClicked);
    document.getElementById('j').disabled = true;
    buttonHit.play();
    test();

}
function k() {
    buttonClicked.push("k");
    console.log(buttonClicked);
    document.getElementById('k').disabled = true;
    buttonHit.play();
    test();

}

function l() {
    buttonClicked.push("l");
    console.log(buttonClicked);
    document.getElementById('l').disabled = true;
    buttonHit.play();
    test();

}

function m() {
    buttonClicked.push("m");
    console.log(buttonClicked);
    document.getElementById('m').disabled = true;
    buttonHit.play();
    test();

}
function m() {
    buttonClicked.push("m");
    console.log(buttonClicked);
    document.getElementById('m').disabled = true;
    buttonHit.play();
    test();

}
function n() {
    buttonClicked.push("n");
    console.log(buttonClicked);
    document.getElementById('n').disabled = true;
    buttonHit.play();
    test();

}
function o() {
    buttonClicked.push("o");
    console.log(buttonClicked);
    document.getElementById('o').disabled = true;
    buttonHit.play();
    test();

}
function p() {
    buttonClicked.push("p");
    console.log(buttonClicked);
    document.getElementById('p').disabled = true;
    buttonHit.play();
    test();

}
function q() {
    buttonClicked.push("q");
    console.log(buttonClicked);
    document.getElementById('q').disabled = true;
    buttonHit.play();
    test();

}
function r() {
    buttonClicked.push("r");
    console.log(buttonClicked);
    document.getElementById('r').disabled = true;
    buttonHit.play();
    test();

}
function s() {
    buttonClicked.push("s");
    console.log(buttonClicked);
    document.getElementById('s').disabled = true;
    buttonHit.play();
    test();

}
function t() {
    buttonClicked.push("t");
    console.log(buttonClicked);
    document.getElementById('t').disabled = true;
    buttonHit.play();
    test();

}
function u() {
    buttonClicked.push("u");
    console.log(buttonClicked);
    document.getElementById('u').disabled = true;
    buttonHit.play();
    test();

}
function v() {
    buttonClicked.push("v");
    console.log(buttonClicked);
    document.getElementById('v').disabled = true;
    buttonHit.play();
    test();

}
function w() {
    buttonClicked.push("w");
    console.log(buttonClicked);
    document.getElementById('w').disabled = true;
    buttonHit.play();
    test();

}
function x() {
    buttonClicked.push("x");
    console.log(buttonClicked);
    document.getElementById('x').disabled = true;
    buttonHit.play();
    test();

}
function y() {
    buttonClicked.push("y");
    console.log(buttonClicked);
    document.getElementById('y').disabled = true;
    buttonHit.play();
    test();

}
function z() {
    buttonClicked.push("z");
    console.log(buttonClicked);
    document.getElementById('z').disabled = true;
    buttonHit.play();
    test();

}
function i1() {
    buttonClicked.push("i");
    console.log(buttonClicked);
    document.getElementById('i').disabled = true;
    buttonHit.play();
    test();

}
// reset function to set all the values back to their default state. 
function reset() {
    document.getElementById('a').disabled = false;
    document.getElementById('b').disabled = false;
    document.getElementById('c').disabled = false;
    document.getElementById('d').disabled = false;
    document.getElementById('e').disabled = false;
    document.getElementById('f').disabled = false;
    document.getElementById('g').disabled = false;
    document.getElementById('h').disabled = false;
    document.getElementById('h').disabled = false;
    document.getElementById('i').disabled = false;
    document.getElementById('j').disabled = false;
    document.getElementById('k').disabled = false;
    document.getElementById('l').disabled = false;
    document.getElementById('m').disabled = false;
    document.getElementById('n').disabled = false;
    document.getElementById('o').disabled = false;
    document.getElementById('p').disabled = false;
    document.getElementById('q').disabled = false;
    document.getElementById('r').disabled = false;
    document.getElementById('s').disabled = false;
    document.getElementById('t').disabled = false;
    document.getElementById('u').disabled = false;
    document.getElementById('v').disabled = false;
    document.getElementById('w').disabled = false;
    document.getElementById('x').disabled = false;
    document.getElementById('y').disabled = false;
    document.getElementById('z').disabled = false;
    buttonClicked = [];
    playWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(buttonClicked);
    answerArray = [];
    livesLeft = 10;
    wrongLetters = [];
    buttonClicked = []
    console.log(playWord);
    document.getElementById("display").innerHTML = (answerArray.join(""));
    restartAudio.play();
    generate();
    document.getElementById("answer").innerHTML = "";
    document.getElementById("wrongLetters").innerHTML = "wrong letters: ";
    document.getElementById("livesLeft").innerHTML = "lives left: 10 ";
    hideImage();
}
// once the game is over this will restart
function again() {
    document.getElementById('a').disabled = false;
    document.getElementById('b').disabled = false;
    document.getElementById('c').disabled = false;
    document.getElementById('d').disabled = false;
    document.getElementById('e').disabled = false;
    document.getElementById('f').disabled = false;
    document.getElementById('g').disabled = false;
    document.getElementById('h').disabled = false;
    document.getElementById('h').disabled = false;
    document.getElementById('i').disabled = false;
    document.getElementById('j').disabled = false;
    document.getElementById('k').disabled = false;
    document.getElementById('l').disabled = false;
    document.getElementById('m').disabled = false;
    document.getElementById('n').disabled = false;
    document.getElementById('o').disabled = false;
    document.getElementById('p').disabled = false;
    document.getElementById('q').disabled = false;
    document.getElementById('r').disabled = false;
    document.getElementById('s').disabled = false;
    document.getElementById('t').disabled = false;
    document.getElementById('u').disabled = false;
    document.getElementById('v').disabled = false;
    document.getElementById('w').disabled = false;
    document.getElementById('x').disabled = false;
    document.getElementById('y').disabled = false;
    document.getElementById('z').disabled = false;
    buttonClicked = [];
    playWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(buttonClicked);
    answerArray = [];
    livesLeft = 10;
    wrongLetters = [];
    buttonClicked = []
    console.log(playWord);
    unpopup();
    unwinPop();
    document.getElementById("display").innerHTML = (answerArray.join(""));
    restartAudio.play();
    generate();
    document.getElementById("answer").innerHTML = "";
    document.getElementById("wrongLetters").innerHTML = "wrong letters: ";
    document.getElementById("livesLeft").innerHTML = "lives left: 10 ";
    resetpop();
    hideImage();
   
}



window.onload = function () {

}

function stopMusic() {
    backgroundSong.pause();
    backgroundSong.currentTime = 0;
}
function playMusic() {
    backgroundSong.play();
}


