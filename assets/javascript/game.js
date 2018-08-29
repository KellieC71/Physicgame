
		 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

		 var wins = 0;
		 var losses = 0;
		 var numGuesses = 10;
		 var guessChoices = [];

		 document.onkeyup = function(event) {

		 	var userGuess = event.key;

		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		 	

			if (computerChoices.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					numGuesses = 9;
					guessChoices = [];
				}

				if (userGuess != computerGuess) {
					numGuesses --;
					guessChoices.push(userGuess);
				}

				if (numGuesses === 0) {

				numGuesses = 9;
				losses ++;
				guessChoices = [];

				
			}

			var html = 
			"<h1> The GUESSING Game </h1>" +
			"<p>Guess what letter I am thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + numGuesses + "</p>" +
			"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

			document.querySelector("#game").innerHTML = html;

			
			}
		}


// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// var wins = 0;
// var losses = 0;
// var guesses = 10;

// var computerChoice = alphabet[Math.floor(Math.random()* alphabet.length)];

// console.log(computerChoice);

// document.onkeyup = function (event){
//     var userChoice = event.key;

//     // if(userChoice === computerChoice){
//     //     wins++;
//     // } else{
//     //     guesses===0;
//     // }
    
//     if (guesses ===10){
//         rewriteStats ()
    
        
        
//     }

//     document.getElementById('wins').innerHTML = "wins: " + wins;
//     document.getElementById('losses').innerHTML = "losses: " + losses;
//     document.getElementById('guesses').innerHTML = "guesses left: " + guesses;

// }
// function resetGame() {
//     psychicGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
//     guessChoices = [];
//     lives = 9;