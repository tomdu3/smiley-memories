const field = [[],[]];
const control_choice = [0,0,0]
let choice;
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        choice = Math.floor(Math.random() * 3);
        if (control_choice[choice] === 2) {
            while(control_choice[choice] === 2) {
                choice = Math.floor(Math.random() * 3);
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
console.log(field);