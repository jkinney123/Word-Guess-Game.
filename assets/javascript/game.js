var words = ["fish", "apple", "tree", "television", "pencil", "rock", 
"cloth", "temple", "steak", "media", "village", "contract", "newspaper",
"glove", "bird", "chimp", "index", "apartment", "king", "oven",
"exam", "hat", "speaker", "library", "internet", "car", "engine", "dice",
"game", "code",]


var randomWord = "";
var letterWords = []
var blanks = 0;
var blanksAndSolved = [];

var wrongGuess = [];
var wins = 0;
var guessesRemaining = 9;


function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    letterWords = randomWord.split("");
     blanks = letterWords.length;
     
     console.log(randomWord);
    
     for (var i = 0; i < blanks; i++) {
        blanksAndSolved.push("_");
}
    document.getElementById("currentword").innerHTML = "  " + blanksAndSolved.join("  ");

    console.log(letterWords);
    console.log(blanksAndSolved);
}

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndSolved = [];
    Game()
}

function checkLetters(letter) {
    var letterWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterWord = true;
        }
    }
    if (letterWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndSolved[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndSolved);
}

function complete() {
    
    console.log("wins:" + wins + " guesses left:" + guessesRemaining)

    if (letterWords.toString() == blanksAndSolved.toString()) {
        wins++;
        reset()
        document.getElementById("wintracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        reset()
         }
    document.getElementById("currentword").innerHTML = "  " + blanksAndSolved.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    
    complete();
    
    console.log(guesses);
    
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}