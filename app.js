// Define an array of words to guess
var words = [
    "hangman",
    "javascript",
    "programming",
    "openai",
    "development"
];

// Select a random word from the array
var selectedWord = words[Math.floor(Math.random() * words.length)];

// Initialize variables
var guessedLetters = [];
var guessesRemaining = 6;

// Display the initial state of the word
var wordContainer = document.getElementById("word");
for (var i = 0; i < selectedWord.length; i++) {
    var letter = selectedWord[i];
    if (guessedLetters.includes(letter)) {
        wordContainer.innerHTML += letter + " ";
    } else {
        wordContainer.innerHTML += "_ ";
    }
}

// Update the word display and check for win/loss
function updateWordDisplay() {
    wordContainer.innerHTML = "";
    var allLettersGuessed = true;
    for (var i = 0; i < selectedWord.length; i++) {
        var letter = selectedWord[i];
        if (guessedLetters.includes(letter)) {
            wordContainer.innerHTML += letter + " ";
        } else {
            wordContainer.innerHTML += "_ ";
            allLettersGuessed = false;
        }
    }

    if (allLettersGuessed) {
        endGame("Congratulations! You won!");
    } else if (guessesRemaining === 0) {
        endGame("Game over. The word was: " + selectedWord);
    }
}

// Process the user's letter guess
function guessLetter() {
    var inputElement = document.getElementById("guess-input");
    var guess = inputElement.value.toLowerCase();

    // Clear the input field
    inputElement.value = "";

    // Check if the guess is a single letter
    if (guess.length !== 1) {
        alert("Please enter a single letter.");
        return;
    }

    // Check if the letter has already been guessed
    if (guessedLetters.includes(guess)) {
        alert("You already guessed that letter.");
        return;
    }

    // Add the letter to the guessedLetters array
    guessedLetters.push(guess);

    // Check if the letter is in the selected word
    if (selectedWord.includes(guess)) {
        updateWordDisplay();
    } else {
        guessesRemaining--;
        var guessesElement = document.getElementById("guesses");
        guessesElement.innerHTML = "Guesses remaining: " + guessesRemaining;
    }
}

// End the game and display the message
function endGame(message) {
    var inputElement = document.getElementById("guess-input");
    var buttonElement = document.querySelector("button");
    inputElement.disabled = true;
    buttonElement.disabled = true;
    alert(message);
}

// Initialize the game
window.onload = function() {
    var guessesElement = document.getElementById("guesses");
    guessesElement.innerHTML = "Guesses remaining: " + guessesRemaining;
};
