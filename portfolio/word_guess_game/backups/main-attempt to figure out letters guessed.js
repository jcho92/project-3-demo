var gameRunning = false;
// word list

// this will generate a random word
var loss = 0;
var win = 0;



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
    var wrongLetters = [];
    var lettersGuessed = [];


    for (var i = 0; i < playWord.length; i++) {
        answerArray[i] = "_";
    }
    console.log(answerArray);
    console.log(playWord);

    var remainingLetters = playWord.length;

    // check if the word has been played yet        

    // main logic function when the game is playing
    while (remainingLetters > 0) {
        console.log(answerArray.join(""));
        var correct = false;
        var guess = prompt("guess a letter");
        console.log("value of lettersGuessed" + lettersGuessed.length);
        if (guess==""){
            alert("enter something");
            
        }
        else if (lettersGuessed.length == 0) {
            lettersGuessed.push(guess);
        }
        else {

            for (i = 0; i < lettersGuessed.length; i++) {
                if (guess == lettersGuessed[i]) {
                    alert("letter already guessed");
                    break;
                }
                else {
                    lettersGuessed.push(guess);
                    console.log(lettersGuessed);
                }
            }
        }
        console.log("letters guessed: " + lettersGuessed);
        if (guess == null) {
            break;
        }
        // else if (guess == lettersGuessed){
        //     alert("use a differnt letter");
        // }
        else {
            for (var j = 0; j < playWord.length; j++) {

                if (playWord[j] == guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                    var correct = true;
                    console.log(correct);
                    console.log("lives left " + livesLeft);
                    console.log("wrongLetters: " + wrongLetters);
                }
            }
            if ((correct == false)&&(guess!="")) {
                livesLeft--;
                console.log("lives left " + livesLeft);
                wrongLetters.push(guess);
                console.log(correct);
                console.log("what letter has been guesssed " + lettersGuessed);
                console.log("lives left " + livesLeft);
                console.log("wrongLetters: " + wrongLetters);
            }
            if (livesLeft == 0) {
                alert("game OVer");
                loss++;
                console.log("loss" + loss)
                break;
            }
        }


    }
    if (livesLeft !== 0) {
        win++;
        console.log("goodjob");
        console.log(playWord);
        console.log("win" + win);
    }

}