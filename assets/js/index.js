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
      <div class="back" style="position: relative;" data-value="${arr[i][j]}">
      </div>
      <div class="front" style="position: absolute;" data-value="${arr[i][j]}">
      </div>`;
      console.log(card);
      card.children[0].classList.add(`image-${arr[i][j] + 1}`);
    }
  }
}

// verify if card already guessed

// define size of the field
let numberRows = 6;
let numberColumns = 6;
let possibleSolutions; // control array for the solutions

generateField(numberRows, numberColumns);

let field = generateSolution(numberRows, numberColumns);
console.log(field);

displaySolution(field, numberRows, numberColumns);

// verify click on a card
let cardDivs = [...document.querySelectorAll(".card")];
console.log(cardDivs);

let firstCard = null;
possibleSolutions = Array.from(Array((numberRows * numberColumns) / 2).keys());
document.body.addEventListener("click", function (e) {
  for (let cardDiv of cardDivs) {
    // console.log(cardDiv.children);
    if (cardDiv.contains(e.target)) {
      console.log(e.target);
      if (firstCard) {
        // if first card is the same as one clicked on, deselect first card
        if (firstCard.contains(e.target)) {
          flipCard(firstCard);
          //   firstCard.style.backgroundColor = "yellowgreen";
          firstCard = null;
          // if the value of the second card is the same as of the first one, change colour to orange - correct pair
        } else if (firstCard.dataset.value === e.target.dataset.value) {
          //   firstCard.style.backgroundColor = "orange";
          //   e.target.style.backgroundColor = "orange";
          flipCard(cardDiv);
          // TODO take out the cards that were guessed correctly
          cardDivs.splice(cardDivs.indexOf(firstCard), 1);
          cardDivs.splice(cardDivs.indexOf(cardDiv), 1);
          firstCard = null;
          // if the value of the second card is different from the first one - paint red, then return previous colour
        } else {
          //   firstCard.style.backgroundColor = "red";
          //   e.target.style.backgroundColor = "red";
          flipCard(cardDiv);
          setTimeout(() => {
            // firstCard.style.backgroundColor = "yellowgreen";
            // e.target.style.backgroundColor = "yellowgreen";
            flipCard(cardDiv);
            flipCard(firstCard);
            firstCard = "";
          }, 1000);
        }
        // if chosen the first card - paint blue
      } else {
        firstCard = cardDiv;
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

function endGame() {
  console.log("Game over");
  exit();
}

function flipCard(card) {
  console.log(card);
  for (child of card.children) {
    child.classList.toggle("front");
    child.classList.toggle("back");
  }
}
