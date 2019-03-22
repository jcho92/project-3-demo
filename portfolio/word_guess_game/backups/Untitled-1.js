var word;

		var guess;		//user guess
		var letters = [];		//correctly guessed letters
		var wrongLetters = [];		//incorrectly guessed letters
		var counter;		//counts correct letters
		var losses = 0;
		var wins = 0;


		document.getElementById("losses").innerHTML = losses;
		document.getElementById("wins").innerHTML = wins;

		var wordList = ["cat", "dog", "wolf", "laser", "apple"]; 		//FILL LIST LATER!!


		//randomly chooses a word from the array and replaces letters with underscores
		function start() {
		    word = wordList[Math.floor(Math.random() * wordList.length)];
		    counter = 7;
		    document.getElementById("counter").innerHTML = counter;
		    for (i = 0; i < word.length; i++) {
		        letters[i] = "__";
		    }

		    document.getElementById("answer").innerHTML = letters.join(" ");
		    console.log(word);

		}


		//checks if letter is in the word or not
		function checkLetter() {
			document.onkeyup = function(event) {
				guess = event.key.toLowerCase();
				var found = false;
				for (i = 0; i < word.length; i++) {
					if (guess === word[i]) {
						letters[i] = guess;
						document.getElementById("answer").innerHTML = letters.join(" ");
						found = true;
					} 
				}
				//wrong letters go into the wrongLetters array and are displayed
				if (found) return;
				if (wrongLetters.indexOf(guess) < 0) {
					wrongLetters.push(guess);
					document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
					//every wrong guess subtracts one from the counter
					counter--;
					console.log(counter);
					document.getElementById("counter").innerHTML = counter;
					//when counter reaches 0 it's Game Over
					//+1 to the losses if 7 words are missed
					
					//if (counter > 0 && letters.join(" ") == word) {
					//	document.getElementById("wins").innerHTML = wins + 1;
					//	console.log(wins);
					//	confirm("YOU WIN! Play Again?");
					//	start();
					//}

					if (counter === 0) {
						document.getElementById("losses").innerHTML = losses + 1;
						console.log(losses);
						confirm("YOU LOOSE... play again?"); {
							losses++;
							counter = 7;
							letters = [];
							wrongLetters = [];
							start();
						}
					}
				}
			}
		}


		start();
		checkLetter();
