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

function displaySolution(arr, rows, columns) {
    // let cards = [[], []];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let card = document.querySelector(`#card-${i}${j}`);
            // cards[i][j] = card;
            card.innerHTML = `<p>${arr[i][j]}</p>`;
        }
    }
};

let numberRows = 4;
let numberColumns = 4;
generateField(numberRows, numberColumns);

let field = generateSolution(numberRows, numberColumns)
console.log(field);
displaySolution(field, numberRows, numberColumns);


