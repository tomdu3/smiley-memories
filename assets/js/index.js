// def sound variables
const flipSound = document.querySelector(`audio[data-sound='flip']`);
const screamSound = document.querySelector(`audio[data-sound='scream']`);
const tadaSound = document.querySelector(`audio[data-sound='tada']`);
const yeahSound = document.querySelector(`audio[data-sound='yeah']`);
const owSound = document.querySelector(`audio[data-sound='ow']`);
let currentTimeIntervalId;
let playSound = true;
let startTime;
let possibleSolutions; // control array for the solutions
let timerOn = true;
let alreadyPlayed;

// generate field of cards of the size rows x columns
function generateField(rows, columns) {
  let fieldHtml = document.querySelector(".memory-field");
  let html = "";
  let cardHtml;
  for (let i = 0; i < rows; i++) {
    cardHtml = "";
    for (let j = 0; j < columns; j++) {
      cardHtml += `
            <div class="card" id="card-${i}${j}">
            </div>`;
    }
    html += `<div class="row" id="row-${i}">
                ${cardHtml}
                </div>`;
  }
  fieldHtml.innerHTML = html;
}

// generate solution of the memory game in the 2d matrix of numbers
function generateSolution(rows, columns) {
  const field = [];
  for (let i = 0; i < rows; i++) {
    field.push([]);
  }
  const control_choice = [];
  for (let i = 0; i < (rows * columns) / 2; i++) {
    control_choice.push(0);
  }
  let choice;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      choice = Math.floor((Math.random() * rows * columns) / 2);
      if (control_choice[choice] === 2) {
        while (control_choice[choice] === 2) {
          choice = Math.floor((Math.random() * rows * columns) / 2);
          if (control_choice[choice] !== 2) {
            control_choice[choice] += 1;
            field[i][j] = choice;
            break;
          }
        }
      } else {
        control_choice[choice] += 1;
        field[i][j] = choice;
      }
    }
  }
  return field;
}

// display solution of the game - later cards
function displaySolution(arr, rows, columns) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let card = document.querySelector(`#card-${i}${j}`);
      card.dataset.value = `${arr[i][j]}`;
      card.classList.add(`${arr[i][j]}`);
      card.innerHTML = `
      <div class="back" data-value="${arr[i][j]}">
      </div>
      <div class="front" data-value="${arr[i][j]}">
      </div>`;
      card.children[0].classList.add(`image-${arr[i][j] + 1}`);
    }
  }
}

// start a game with the field size parameters
function gameOn(numberRows, numberColumns) {
  alreadyPlayed = false;
  document.querySelector(".timer span").innerText = '_.__';
  generateField(numberRows, numberColumns);
  timerOn = true;
  document.querySelector("#game-over").innerHTML = '';
  document.querySelector("#game-over").style.display = 'none';
  let field = generateSolution(numberRows, numberColumns);

  // generate field with cards shuffled
  displaySolution(field, numberRows, numberColumns);
  timer();

  // verify click on a card
  let cardDivs = [...document.querySelectorAll(".card")];
  console.log(cardDivs);

  let firstCard = null;
  possibleSolutions = (numberRows * numberColumns) / 2;
  document.body.addEventListener("click", function(e) {
    let tempFirstCard, tempCard;
    for (let cardDiv of cardDivs) {
      if (cardDiv.contains(e.target)) {
        console.log(e.target);
        if (firstCard) {

          // if first card is the same as one clicked on, flip it back
          if (firstCard.contains(e.target)) {
            if (playSound) {
              flipSound.play();
            }
            flipCard(firstCard);
            firstCard = null;

            // if the value of the second card is the same as of the first one
          } else if (firstCard.dataset.value === e.target.dataset.value) {
            tadaSound.currentTime = 0;
            if (playSound) {
              flipSound.play();
            }
            flipCard(cardDiv);
            if (playSound) {
              tadaSound.play();
            }

            // take out the cards that were guessed correctly
            cardDivs.splice(cardDivs.indexOf(firstCard), 1);
            cardDivs.splice(cardDivs.indexOf(cardDiv), 1);
            firstCard = null;
            possibleSolutions--;

            // if the value of the second card is different from the first one - flip them both back and play a sound
          } else {
            if (playSound) {
              flipSound.play();
            }
            flipCard(cardDiv);
            tempCard = cardDiv;
            tempFirstCard = firstCard;
            firstCard = "";
            setTimeout(() => {
              if (playSound) {
                screamSound.play();
              }
              flipCard(tempFirstCard);
              flipCard(tempCard);
            }, 400);
          }

          // if chosen the first card - flip
        } else {
          firstCard = cardDiv;
          if (playSound) {
            flipSound.play();
          }
          flipCard(firstCard);
        }
      }
    }
    if (possibleSolutions === 0) {
      timerOn = false;
      endGameWin();
      alreadyPlayed = true;
      return;
    }
  });
}

// end game as winner function
function endGameWin() {
  if (alreadyPlayed) {
    return;
  }
  let gameOver = document.querySelector("#game-over");
  if (playSound) {
    yeahSound.play();
  }
  gameOver.innerHTML = `
  <h1>You've won!!!</h1>
  <p>Congratulations! Hit <strong>(New Game)</strong> to play again!</p>`;
  gameOver.style.display = "unset";
}

// end game as loser function
function endGameLose() {
  // repaint the cards as initial screen - all faces down
  generateField(4, 5);
  document.querySelector('.memory-field').setAttribute('id', 'medium');
  let gameOver = document.querySelector("#game-over");
  if (playSound) {
    owSound.play();
  }
  gameOver.innerHTML = `
  <h1>You've lost!</h1>
  <p>Sorry! Hit <strong>(New Game)</strong> and practice more!</p>`;
  gameOver.style.display = "unset";
}

// flip card function 
function flipCard(card) {
  console.log(card);
  card.classList.toggle("toggleCard");
}

// change background by slecting a corresponding radio button
let radioBtns = document.querySelectorAll('input[name="back"]');

function findSelected() {
  let selected = document.querySelector('input[name="back"]:checked').value;
  document.body.classList = [`${selected}`];
}
radioBtns.forEach(radioBtn => {
  radioBtn.addEventListener('change', findSelected);
});
findSelected();

// new game and level function
const newGameBtn = document.getElementById("new-game");
newGameBtn.onclick = function(e) {
  let radioLevel = document.querySelector('input[name="level"]:checked');
  if (radioLevel.value === 'easy') {
    startTime = 30;
    document.querySelector('.memory-field').setAttribute('id', 'small');
    gameOn(3, 4);
  } else if (radioLevel.value === 'moderate') {
    startTime = 60;
    document.querySelector('.memory-field').setAttribute('id', 'medium');
    gameOn(4, 5);
  } else {
    startTime = 90;
    document.querySelector('.memory-field').setAttribute('id', 'big');
    gameOn(5, 6);
  }
};

// display game field on first run
generateField(4, 5);
document.querySelector('.memory-field').setAttribute('id', 'medium');

// control sound button off/on
let soundButton = document.getElementById('sound-toggle');
soundButton.onclick = function(e) {
  playSound = playSound ? false : true;
  this.innerHTML = this.innerHTML === '<i class="fa-solid fa-volume-high"></i>' ? '<i class="fa-solid fa-volume-xmark"></i>' : '<i class="fa-solid fa-volume-high"></i>';
};