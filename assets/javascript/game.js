// initialization
var letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var inputList = [];
var computerChoice = "";
var wins = 0;
var losses = 0;
var guess = 9;
var sofar = "";
var correctcounter = 0;

// initial computer guess
computerGuess = letterList[Math.floor(Math.random() * letterList.length)];

// cheat code $$Show me the money$$
// console.log(computerGuess);

// waiting for user input to start game
document.onkeyup = function(event) {

    // Store the key that was pressed.
    var userGuess = event.key;
        
    // Check for lowercase alphabet input and ingore other keys
    if(letterList.includes(userGuess) && !inputList.includes(userGuess)){
        inputList.push(userGuess);

        if(sofar === ""){
            sofar = userGuess;
        }

        else{
        sofar = sofar.concat(", " + userGuess);
        }
        // Checking to see if player input is same as computer guess
        if (userGuess === computerGuess){
            correctcounter++;
        }
        // keeping track of the number of guesses made by the player
            guess--;
            
        //Check for the end of the game then, check for  win/loss condition 
        if (guess === 0){
            if(correctcounter <1 ){
            losses++;
            }
            else{
            wins++;
            }
            guess = 9;
            correctcounter=0;
            sofar="";
            computerGuess = letterList[Math.floor(Math.random() * letterList.length)];
            // console.log(computerGuess);
            inputList = [];
        }

        // resets the player input
        userGuess="";
        
        // Game display
        document.getElementById('wins').textContent = "Wins: " +wins;
        document.getElementById('losses').textContent = "losses: " +losses;
        document.getElementById('left').textContent = "Guesses left: " +guess;
        document.getElementById('sofar').textContent = "Your guesses so far: " +sofar;
        
    }
}