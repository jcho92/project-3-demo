var gameRunning = false;
// word list

// this will generate a random word




// this here will set start the game
// document.onkeyup = function(){
//     if (gameRunning == false){
//         gameRunning = true;
//         console.log(gameRunning);
//     };
//     if (gameRunning == true){
//         document.getElementById("gameStart").style.visibility= "hidden";
//         document.getElementById("play").style.visibility= "visible";
//     }
// }

// this will create the new array for the answer
function playgame() {
    var wordList = ["marine", "hellbat", "medic", "helion", "thor", "battlecruiser", "marauder", "firebat", "raven", "wraith", "viking", "ghost", "reaper", "siegetank", "widowmine", "medivac", "liberator", "cyclone"];
    var playWord = wordList[Math.floor(Math.random() * wordList.length)];
    var myLength = playWord.length;
    var answerArray = [];
    var livesLeft = 10;
    for (var i = 0; i < playWord.length; i++) {
        answerArray[i] = "_";
    }
    console.log(answerArray);

    var remainingLetters = playWord.length;

    while (remainingLetters > 0) {
        console.log(answerArray.join(""));

        var guess = prompt("guess a letter");

        if (guess == null) {
            break;
        }
        else {
            for (var j = 0; j < playWord.length; j++) {
                if (playWord[j] == guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
            if (playWord[j] != guess) {
                livesLeft--;
                console.log(livesLeft);
            }
        }
        if (livesLeft == 0) {
            alert("game OVer");
            break;
        }
        
    }
    if(livesLeft !==0 ){
        console.log("goodjob");
        console.log(playWord);
    }
    
}