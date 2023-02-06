// def sound variables
const flipSound = document.querySelector(`audio[data-sound='flip']`);
const screamSound = document.querySelector(`audio[data-sound='scream']`);
const tadaSound = document.querySelector(`audio[data-sound='tada']`);
let currentTimeIntervalId;
let playSound = true;

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
  console.log(field);
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
            console.log(i, j);
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
  console.log(control_choice);
  return field;
}

// display solution of the game - later cards
function displaySolution(arr, rows, columns) {
  // let cards = [[], []];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let card = document.querySelector(`#card-${i}${j}`);
      // cards[i][j] = card;
      card.dataset.value = `${arr[i][j]}`;
      card.classList.add(`${arr[i][j]}`);
      card.innerHTML = `
      <div class="back" data-value="${arr[i][j]}">
      </div>
      <div class="front" data-value="${arr[i][j]}">
      </div>`;
      console.log(card);
      card.children[0].classList.add(`image-${arr[i][j] + 1}`);
    }
  }
}

// define size of the field - max 6 x 6
let numberRows = 5;
let numberColumns = 6;

// start a game with the filed size parameters
function gameOn(numberRows, numberColumns) {
  let possibleSolutions; // control array for the solutions
  generateField(numberRows, numberColumns);

  let field = generateSolution(numberRows, numberColumns);
  console.log(field);

  displaySolution(field, numberRows, numberColumns);
  timer();
  // verify click on a card
  let cardDivs = [...document.querySelectorAll(".card")];
  console.log(cardDivs);

  let firstCard = null;
  possibleSolutions = Array.from(Array((numberRows * numberColumns) / 2).keys());
  document.body.addEventListener("click", function (e) {
    let tempFirstCard, tempCard;
    for (let cardDiv of cardDivs) {
      // console.log(cardDiv.children);
      if (cardDiv.contains(e.target)) {
        console.log(e.target);
        if (firstCard) {
          // if first card is the same as one clicked on, deselect first card
          if (firstCard.contains(e.target)) {
            if (playSound) {
              flipSound.play();
            }
            flipCard(firstCard);
            //   firstCard.style.backgroundColor = "yellowgreen";
            firstCard = null;
            // if the value of the second card is the same as of the first one, change colour to orange - correct pair
          } else if (firstCard.dataset.value === e.target.dataset.value) {
            //   firstCard.style.backgroundColor = "orange";
            //   e.target.style.backgroundColor = "orange";
            tadaSound.currentTime = 0;
            if (playSound) {
              flipSound.play();
            }
            flipCard(cardDiv);
            if (playSound) {
              tadaSound.play();
            }
            // TODO take out the cards that were guessed correctly
            cardDivs.splice(cardDivs.indexOf(firstCard), 1);
            cardDivs.splice(cardDivs.indexOf(cardDiv), 1);
            firstCard = null;
            // if the value of the second card is different from the first one - paint red, then return previous colour
          } else {
            //   firstCard.style.backgroundColor = "red";
            //   e.target.style.backgroundColor = "red";
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
          // if chosen the first card - paint blue
        } else {
          firstCard = cardDiv;
          if (playSound) {
            flipSound.play();
          }
          flipCard(firstCard);
          // firstCard.style.backgroundColor = "blue";
        }
        console.log(`clicked card:${cardDiv.id}`);
      }
    }
    if (cardDivs.length === 0) {
      endGame();
    }
  });
}

// game over function
function endGame() {
  console.log("Game over");
  exit();
}

// flip card function 
function flipCard(card) {
  console.log(card);
  card.classList.toggle("toggleCard");
  //   for (child of card.children) {
  //     child.classList.toggle("front");
  //     child.classList.toggle("back");
  //   }
}

// change background - old
// let back = document.getElementById('change-background');
// back.onclick = function (e) {
//     let backgroundColour = document.body.style.background;
//     document.body.style.background = backgroundColour === 'red' ? 'white': 'red';
// };

// change background
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
    gameOn(3,4);
  } else if (radioLevel.value === 'moderate') {
    gameOn(4,5);
  } else {
    gameOn(5,6);
  }
}

// sound off/on
let soundButton = document.getElementById('sound-toggle');
soundButton.onclick = function (e) {
    playSound = playSound ? false: true;
    
    this.innerText = this.innerText === 'Sound: On' ? 'Sound: Off': 'Sound: On';
};


// call to start game
// gameOn(numberRows, numberColumns);

//timer function
function timer() {
  if (currentTimeIntervalId) {
    clearInterval(currentTimeIntervalId);
  }
  let timerElement = document.getElementById('timer');
  let startTime = 90; 
  let currentTime = startTime;

  // Function to update the timer display
  function updateTimer() {
    let min = Math.floor(currentTime / 60);
    let sec = currentTime % 60;
    let minString = `${min}`;
    let secString = `${sec}`;
    if (sec < 10) {
      secString = `0${secString}`;
    }
    timerElement.textContent = `${minString}:${secString}`;

    if (currentTime <= 10) {
      timerElement.style.color = "red";
    }

    if (currentTime === 0) {
      endGame()
    }

    currentTime--;
  }

  // // Function to play the sound
  // function playSound() {
  //   const sound = new Audio("sound.mp3");
  //   sound.play();
  // }

  // Start the timer
  currentTimeIntervalId = setInterval(updateTimer, 1000);
}