

//possibilities: bundle with other version to create single or multi player options
// begin with landing screen



// say PLAYER ONE: ENTER word
// ONCE BUTTON IS PRESSED, GENERATE GAME

//GET WORD
// maybe: check word against dictionary api to see if it's real

// TAKE WORD APART
// STORE IN ARRAY

// GENERATE AS MANY DIVS AS NEEDED, FOR ARRAY.LENGTH
// PUT ARRAY LETTERS IN A DIV THAT SERVES AS THE SPACE

// HAVE ALPHABET BUTTONS
// ON CLICK IT WILL CHECK THE ARRAY
// IF THE LETTER IS NOT INCLUDED
// HANGMAN BEGINS BEING DRAWN



const playButton = document.querySelector('.playButton');
const wrapper = document.querySelector('.wrapper');
const heading = document.querySelector('#info-header');
const inputBox = document.querySelector('.word-input');
playButton.addEventListener('click', playGame);
inputBox.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        playButton.click();
    }
});



function playGame() {
  const wordInput = document.querySelector('.word-input').value
  const wordLetters = [];
  for (i=0; i<wordInput.length; i++) {
    wordLetters[i] = wordInput.substr(i, 1);
    let div = document.createElement('div');
    div.setAttribute('class', 'space')
    wrapper.appendChild(div);
  }
  console.log(wordLetters);
  heading.innerText = 'player 2: guess!';
  document.querySelector('.word-input').value = '';
}

















































//
