function generateField(rows, columns) {
    const field = [];
    for (let i = 0; i < rows; i++) {
        field.push([]);
    }
    const control_choice = [];
    for (let i = 0; i < columns; i++) {
        control_choice.push(0);
    }
    console.log(control_choice);
    let choice;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            choice = Math.floor(Math.random() * columns);
            if (control_choice[choice] === 2) {
                while(control_choice[choice] === 2) {
                    choice = Math.floor(Math.random() * columns);
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
    return field;
}

function displaySolution(arr) {
    // let cards = [[], []];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            let card = document.querySelector(`#row-${i} #card-${j}`);
            // cards[i][j] = card;
            card.innerHTML = `<p>${arr[i][j]}</p>`;
        }
    }
};

let field = generateField(2, 3)
console.log(field);
displaySolution(field);


