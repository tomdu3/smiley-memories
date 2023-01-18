// generate field of cards of the size rows x columns
function generateField(rows, columns) {
    let fieldHtml = document.querySelector('.memory-field');
    let html = '';
    let cardHtml;
    for (let i = 0; i < rows; i++) {
        cardHtml = '';
        for (let j = 0; j < columns; j++) {
            cardHtml += `<div class="card" id="card-${i}${j}"></div>`;
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
    for (let i = 0; i < rows*columns/2; i++) {
        control_choice.push(0);
    }
    let choice;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            choice = Math.floor(Math.random() * rows*columns/2);
            if (control_choice[choice] === 2) {
                while(control_choice[choice] === 2) {
                    choice = Math.floor(Math.random() * rows * columns/2);
                    if (control_choice[choice] !== 2) {
                        control_choice[choice] += 1;
                        console.log(i,j);
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
    console.log(control_choice)
    return field;
}

// display solution of the game - later cards
function displaySolution(arr, rows, columns) {
    // let cards = [[], []];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let card = document.querySelector(`#card-${i}${j}`);
            // cards[i][j] = card;
            card.innerHTML = `${arr[i][j]}`;
        }
    }
};


// define size of the field
let numberRows = 4;
let numberColumns = 4;

generateField(numberRows, numberColumns);

let field = generateSolution(numberRows, numberColumns)
console.log(field);

displaySolution(field, numberRows, numberColumns);

// verify click on a card
let cardDivs = document.querySelectorAll('.card');

let firstCard = null;
document.body.addEventListener('click', function(e) {
	for (let cardDiv of cardDivs) {
        console.log(firstCard);
        if(cardDiv.contains(e.target)){
            if (firstCard) {
                if (firstCard === e.target) {
                    firstCard.style.backgroundColor = 'yellowgreen';
                    firstCard = null;
                } else if (firstCard.textContent === e.target.textContent) {
                    firstCard.style.backgroundColor = 'orange';
                    e.target.style.backgroundColor = 'orange';
                    firstCard = null;
                } else {
                    firstCard.style.backgroundColor = 'red';
                    e.target.style.backgroundColor = 'red';
                    setTimeout(() => {
                        firstCard.style.backgroundColor = 'yellowgreen';
                        e.target.style.backgroundColor = 'yellowgreen';
                        firstCard = '';
                    }, 1000);
                }
                } else {
                    firstCard = e.target;
                    firstCard.style.backgroundColor = 'blue';
                    console.log(firstCard);
            }
            console.log(`clicked card'${cardDiv.id}`);
        } else {
        }    
    }}
);