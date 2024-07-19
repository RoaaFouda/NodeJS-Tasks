class Hangman {

    // You can Modify wordList here are you like.
    constructor() {
        this.wordList = ["apple", "avocado", "estimate", "kombat"]; //list of words that the secret word will be chosen from
        this.word = ""; // the secret word
        this.attempts = 3; // total number of attempts that the user gets
        this.guesses = []; // All the letters which the user has guessed before
        this.current_state = ""; // the user's progress so far.
    }

    //chooses a random word from wordList
    selectRandomWord() {
        let randomIndex = Math.floor(Math.random() * this.wordList.length);
        this.word = this.wordList[randomIndex];
    }

    // Resets all game variables.
    initializeGame() {
        this.selectRandomWord();
        this.attempts = 3;
        this.guesses = [];
        this.current_state = "_".repeat(this.word.length);
    }


    // takes the guessed letter and checks if it was guessed before, correct or incorrect. 
    makeGuess(letter) {
        if (this.guesses.includes(letter)) {
            return "Already guessed";
        }

        this.guesses.push(letter);

        if (this.word.includes(letter)) {
            let currentArr = this.current_state.split('');
            for (let i = 0; i < this.word.length; i++) {
                if (this.word[i] === letter) {
                    currentArr[i] = letter;
                }
            }
            this.current_state = currentArr.join('');
            return `Correct guess! ${this.current_state}`;
        } else {
            this.attempts--;
            return `Incorrect guess. Attempts remaining: ${this.attempts}`;
        }
    }

    //Checks if the game ended or not. returns true if the game ended and false otherwise.
    isGameOver() {
        if (this.attempts === 0) return true;
        if (!this.current_state.includes('_')) return true;
        return false;
    }

    //returns the word with the letters which the user has guessed and the missing ones.
    getCurrentState() {
        return this.current_state;
    }


    //Implements game Logic.
    play() {
        this.initializeGame();

        while (!this.isGameOver()) {
            let letter = prompt(`Make a guess! ${this.current_state}`);
            console.log(this.makeGuess(letter));
        }

        if (this.attempts === 0) {
            console.log(`Good luck next time. The word was: ${this.word}`);
        } else {
            console.log("Yay, you won!");
        }

        let again = prompt("Play again? (yes/no)");
        if (again === "yes") {
            this.play();
        } else {
            console.log("Thanks for playing!");
        }
    }
}

let test = new Hangman();
test.play();
