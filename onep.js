//possibilities: 
// bundle with other version to create single or multi player options
// (begin with landing screen)
// check word against dictionary api to see if it's real
// fix case sensitivity by making input to lower case

// style:
// make button sexy
// make input sexy



const playButton = document.querySelector('.playButton');
const spacesContainer = document.querySelector('.spaces-container');
const heading = document.querySelector('#info-header');
const inputBox = document.querySelector('.word-input');
const alphabetBar = document.querySelector('.alphabet')
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let word = [];
let correctlyGuessedLetters = [];
let numberGuesses = 0;

// add event listeners
playButton.addEventListener('click', playGame);
inputBox.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        playButton.click();
    }
});


// set game up
function playGame() {
    const wordInput = document.querySelector('.word-input').value
    const wordLetters = [];
    for (i = 0; i < wordInput.length; i++) {
        wordLetters[i] = wordInput.substr(i, 1);
        word[i] = wordInput.substr(i, 1);
        let div = document.createElement('div');
        div.setAttribute('class', 'space')
        div.setAttribute('id', `letter${i}`)
        spacesContainer.appendChild(div);
    }
    console.log(wordLetters);
    heading.innerText = 'player 2: guess!';
    document.querySelector('.word-input').value = '';
    makeAlphabet();
    inputBox.style.display = 'none';
    playButton.style.display = 'none';
}


function makeAlphabet() {
    for (let i = 26; i <= 51; i++) {
        let letterButton = document.createElement('a');
        letterButton.innerText = `${alphabet[i]}`;
        letterButton.setAttribute('class', `${alphabet[i]}`);
        letterButton.classList.add('letter');
        letterButton.setAttribute('href', '#');
        letterButton.addEventListener('click', guessLetter);
        alphabetBar.appendChild(letterButton);
    }
}


function guessLetter() {
    numberGuesses += 1;
    const wordLetters = [];
    let isGuessCorrect = '';
    let characterCorrect = [];
    for (i = 0; i < word.length; i++) {
        wordLetters.push(word[i]);
    }
    for (i = 0; i <= wordLetters.length; i++) {
        if (event.target.innerText === wordLetters[i]) {
            isGuessCorrect = true;
            characterCorrect.push(i);
            correctlyGuessedLetters.push(wordLetters[i]);
            word[i] = '0';
            console.log(characterCorrect);
            
        }
    }
    if (isGuessCorrect === true) {
        for (let i=0; i < characterCorrect.length; i++) {        
            document.querySelector(`#letter${characterCorrect[i]}`).innerText = wordLetters[characterCorrect[i]];
            heading.innerText = 'nice one!';
        }
        // this code to remind people to guess isn't working idk why
        // if (correctlyGuessedLetters.length < word.length) {
        //   setTimeout(putHeaderBack, 4000);
        // }
        console.log('correct');
        checkWinner();
    } else {
        guessWrong();
        console.log('WRONG');
    }
}






function checkWinner() {
    if (correctlyGuessedLetters.length === word.length) {
        heading.innerText = 'PLAYER 2 WINS';
        heading.fontSize = '120px';
    }
}

function guessWrong() {
    if (numberGuesses != 6) {
        heading.innerText = 'wrong!';
        setTimeout(putHeaderBack, 1100);
    }
    else if (numberGuesses == 6) {
        heading.innerText = 'WRONG! PLAYER 1 WINS';
    }
}

function putHeaderBack() {
    heading.innerText = 'guess again!';
}
