//Array that contains all the word choices for game
let words = ["labrador", "pitbull", "chihuahua", "french bulldog", "pug"];

//Initialize variables
let wins = 0;
let losses = 0;
//Contains individual letters in word chosen
let ltrsInWord = [];
//Contains letters that match letters in word chosen
let ltrsMatched = [];
//Contains letter that have been guessed
let ltrsGuessed = [];

// let userGuess = null;

let guessesLeft = 0;
let totalGuesses = 0;

// //Pick a random word from array
// currentWord = words[Math.floor(Math.random() * words.length)];

// //Show how many letters are in the word using "_"
// let ansArray = [];
// for (var i = 0; i < currentWord.length; i++) {
//   ansArray[i] = "_";
// }

// //Variable that tells us how many letters are left in current word
// let remainingLtrs = currentWord.length;

//Function for when page first loads
startGame = () => {
  let currentWord = words[Math.floor(Math.random() * words.length)];
  console.log(`The chosen word is ${currentWord}`);

  //Split this word into individual letters
  ltrsInWord = currentWord.split("");
  console.log(`The letters in the word are: ${ltrsInWord}`);

  //Call function that sets up word we are trying to guess and displays it on page
  showWord();

  //Updates guesses
  updateGuessesLeft();
};

//Function to run whenever uses guesses a letter
updateAll = () => {
  if (guessesLeft === 0) {
    restartGame();
  } else {
    //Check incorrect guesses
    updateGuessedLtrs(letter);
    //Check for correct
    updateMatchedLtrs(letter);
    //Update word view on page
    showWord();
    //If wins- restart game
    if (updateWins() === true) {
      restartGame();
    }
  }
};

//Update to check incorrect guesses aka letter not there
updateGuessedLtrs = letter => {
  if (ltrsGuessed.indexOf(letter) === -1 && ltrsInWord.indexOf(letter) === -1) {
    //push letter into ltrsGuessedArray
    ltrsGuessed.push(letter);
    //Decrease guessesLEft
    guessesLeft--;
    //Update HTML
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
    document.querySelector("#guessed-letters").innerHTML = ltrsGuessed.join(
      ", "
    );
  }
};

showWord = () => {
  let displayedWord = "";

  //loop through letters we are trying to guess
  for (var i = 0; i < ltrsInWord.length[i]; i++) {
    //If it matches then display the letter
    if (ltrsMatched.indexOf(ltrsInWord[i]) !== -1) {
      displayedWord += ltrsInWord[i];
    } else {
      displayedWord += "_";
    }
  }
  //Update HTML page
  document.querySelector("#current-word").innerHtml = displayedWord;
};

//Updates guesses
updateGuessesLeft = () => {
  //User gets 5 more guess than length of word
  totalGuesses = ltrsInWord.length + 5;
  guessesLeft = totalGuesses;
  //Update html
  document.querySelector("#guesses-left").innerHtml = guessesLeft;
};

updateMatchedLtrs = letter => {
  for (var i = 0; i < ltrsInWord.length; i++) {
    if (letter === ltrsInWord[i] && ltrsMatched.indexOf(letter) === -1) {
      ltrsMatched.push(letter);
    }
  }
};

//Testing
startGame();
