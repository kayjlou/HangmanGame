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
let currentWord;
let displayedWord;


let guessesLeft = 0;
let totalGuesses = 0;

let loss = false



document.addEventListener('keyup', event => {
  console.log("HI", event.key)
  if(event.keyCode >= 65 && event.keyCode <= 90){
    updateAll(event.key)
  }
})


// //Variable that tells us how many letters are left in current word
// let remainingLtrs = currentWord.length;

//Function for when page first loads
const startGame = () => {
  currentWord = words[Math.floor(Math.random() * words.length)];
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
const updateAll = (letter) => {
  if (guessesLeft === 0) {
    loss = true
    updateScore()
  } else {
    //Check incorrect guesses
    updateGuessedLtrs(letter);
    //Check for correct
    updateMatchedLtrs(letter);
    //Update word view on page
    showWord();
    
    if(displayedWord == currentWord){
      updateScore()
    }
    
   
  
  }
};

const updateScore = () =>{
  if (loss){ 
    losses++
    document.querySelector('#losses').textContent = `Losses: ${losses}`
    document.querySelector("#directions").textContent = `You Lost!!`
  }
  else {
    wins ++
    document.querySelector("#wins").textContent = `Wins: ${wins}`
    document.querySelector("#directions").textContent = `You Won!!`
    //updateWin
  }
}

//Update to check incorrect guesses aka letter not there
const updateGuessedLtrs = letter => {
  console.log("letter", letter)
  if (ltrsGuessed.indexOf(letter) === -1 && ltrsInWord.indexOf(letter) === -1) {
    //push letter into ltrsGuessedArray
    ltrsGuessed.push(letter);
    //Decrease guessesLEft
    guessesLeft--;
    //Update HTML
    document.querySelector("#guesses-left").textContent = `Guesses Left:  ${guessesLeft}`;
    document.querySelector("#guessed-letters").textContent = `Letters Guessed: ${ltrsGuessed.join(
      ", "
    )}`
  }
};

//display word 
const showWord = () => {
  displayedWord = ""
  

  //loop through letters we are trying to guess
  for (var i = 0; i < ltrsInWord.length; i++) {
    //If it matches then display the letter
    if (ltrsMatched.indexOf(ltrsInWord[i]) != -1) {
      displayedWord += ltrsInWord[i];
    } else {
      displayedWord += " _ "
      // console.log("HI", displayedWord)
    }
  }
  //Update HTML page
  document.querySelector("#current-word").textContent = `Current Word : ${displayedWord}`;
};

//Updates guesses
const updateGuessesLeft = () => {
  //User gets 5 more guess than length of word
  totalGuesses = ltrsInWord.length + 2;
  guessesLeft = totalGuesses;
  //Update html
  document.querySelector("#guesses-left").textContent = `Guesses Left: ${guessesLeft}`;
};

const updateMatchedLtrs = letter => {
  for (var i = 0; i < ltrsInWord.length; i++) {
    if (letter === ltrsInWord[i] && ltrsMatched.indexOf(letter) === -1) {
      ltrsMatched.push(letter);
      
    }
  }
};

//Testing
startGame();
