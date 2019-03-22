// var audio = new Audio('Family Guy magic trick.mp3');
// audio.loop = true;
// function playsong() {
//     audio.play();
// }
window.onload = function () {
    $("#generate").on("click", content.start);
    $("#generate").on("click", startButton);
};
function startButton() {
    $("#start").css("display", "none");
    $("#main").css("display", "block");
}
var questionNumber = 0;
var timeLeft = 10;
var timer;
var correct = 0;
var incorrect = 0;
var skip = 0;
var clockRunning = false;


var triviaForm = {
    questions: {
        one: 'what the does html stand for?',
        two: 'what is 2 + 2?',
        three: 'what is the hex color for white?',
        four: 'was the last question hard?',
        five: 'who invented the light bulb',
        six: 'did you get number four correct?',
        seven: 'ok this question is for real...is the earth flat?'

    },
    solutions: {
        one: ['hyper text mark up language', 'how to multiply lines', 'hot temperature makes lava', 'how to make lotsomoney'],
        two: ['4', '22', 'window', '18'],
        three: ['#ffffff', '#000000', '#000000', '#000000'],
        four: ['yes', 'no'],
        five: ['Tom Hanks', 'Bob', 'some guy on earth i forget his name though', 'Elon Musk'],
        six: ['no i did not', 'no i did not', 'no i did not', 'no i did not', 'no i did not', 'no i did not', 'no i did not', 'no i did not', 'no i did not', 'no i did not'],
        seven: ['yes because it is a government conspiracy that the earth is round', 'yes because there is no curviture when something something something', 'no the earth is round....', 'yes because the earth is carried by a giant elephant and the sun is a giant flashlight'],
    },
    answers: {
        one: 'how to make lotsomoney',
        two: '22',
        three: '#ffffff',
        four: 'lol its impossible to get this correct',
        five: 'some guy on earth i forget his name though',
        six: 'no i did not',
        seven: 'no the earth is round....',


    }
}

var questionDisplay = Object.values(triviaForm.questions)[questionNumber];
var solutionDisplay = Object.values(triviaForm.solutions)[questionNumber];
var answerDisplay = Object.values(triviaForm.answers)[questionNumber];



//creates the first question
var content = {

    start: function () {
        //start the clock
        timer = setInterval(content.count, 1000);
        var questionRow = $("<h2>");
        questionRow.html(questionDisplay);
        questionRow.attr('class', 'questionP');
        $('#questionHead').append(questionRow);
        $('.answer').remove();
        console.log(timeLeft)
        // checks the question number if it equals 3 the game will stop
        if (questionNumber == 7) {
            clearInterval(timer);
            $(".answer-btn").remove();
            $(".questionP").remove();
            var correctPop = $("<p>");
            correctPop.html("Finished. your result<br/>" + "correct: " + correct + "<br/> incorrect:" + incorrect + "<br/> skipped:" + skip + "<br/> how did you not get number 4? this quiz isnt even hard at all..");
            correctPop.attr('class', 'answer');
            $("#popup").append(correctPop);
            $("#finished").css('display', 'block');
            return;

        }


        // creates the solution buttons
        for (var i = 0; i < solutionDisplay.length; i++) {
            var solutionRow = $("<button>");
            solutionRow.html(solutionDisplay[i]);
            solutionRow.attr('data-answer', solutionDisplay[i]);
            solutionRow.attr('class', 'answer-btn');
            $('#solutionHead').append(solutionRow);
        };

        // on click function that checks the answer if it is correct or not
        $('.answer-btn').on("click", function () {
            console.log($(this).text());
            console.log(typeof ($(this).text()))
            // true
            if ($(this).text() == answerDisplay) {
                console.log("correct")
                timeLeft = 11;
                clearInterval(timer);
                correct++;
                $(".answer-btn").remove();
                $(".questionP").remove();
                var correctPop = $("<p>");
                correctPop.html("CORRECT <br/> the answer was " + answerDisplay);
                correctPop.attr('class', 'answer');
                $("#popup").append(correctPop);
                questionNumber++
                solutionDisplay = Object.values(triviaForm.solutions)[questionNumber];
                questionDisplay = Object.values(triviaForm.questions)[questionNumber];
                answerDisplay = Object.values(triviaForm.answers)[questionNumber];
                console.log(questionNumber)
                nextQuestion = setTimeout(content.start, 3000);

                // false
            } else {
                console.log("incorrect");
                timeLeft = 11;
                clearInterval(timer);
                incorrect++;
                $(".answer-btn").remove();
                $(".questionP").remove();
                var correctPop = $("<p>");
                correctPop.html("INCORRECT <br/> the answer was " + answerDisplay);
                correctPop.attr('class', 'answer');
                $("#popup").append(correctPop);
                questionNumber++
                solutionDisplay = Object.values(triviaForm.solutions)[questionNumber];
                questionDisplay = Object.values(triviaForm.questions)[questionNumber];
                answerDisplay = Object.values(triviaForm.answers)[questionNumber];
                console.log(questionNumber)
                nextQuestion = setTimeout(content.start, 3000);

            };


        });



    },//end of start: function()
    // this is the function that runs if the timer hits 0
    count: function () {
        timeLeft--;
        $("#timer").html(timeLeft + "seconds");
        if (timeLeft === 0) {
            skip++;
            timer = clearInterval(timer);
            timeLeft = 11;
            questionNumber++
            $(".answer-btn").remove();
            $(".questionP").remove();
            var correctPop = $("<p>");
            correctPop.html("TIMES UP <BR/> the answer was " + answerDisplay);

            correctPop.attr('class', 'answer');
            $("#popup").append(correctPop);
            solutionDisplay = Object.values(triviaForm.solutions)[questionNumber];
            questionDisplay = Object.values(triviaForm.questions)[questionNumber];
            answerDisplay = Object.values(triviaForm.answers)[questionNumber];
            nextQuestion = setTimeout(content.start, 3000);
        };
    },
}// end of var content;
$('#restart').click(function () {
    location.reload();
});