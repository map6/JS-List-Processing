let append = require('./append').append;
let prepend = require('./prepend').prepend;
let functionDelete = require('./deleteFunc').deleteFunc;
let sort = require('./sortFunc').sortFuncion;
arr = ['alpha', 'beta', 'gamma'];

function commands(input) {


    let command = input.split(' ');

    switch (command[0]) {
        case 'append':
            append(arr, command[1]);
            break;
        case 'prepend':
            prepend(arr, command[1]);
            break;
        case 'reverse':
            break;
        case 'insert':
            break;
        case 'roll':
            break;
        case 'sort':
            sort(arr);
            break;
        case 'delete':
            functionDelete(arr,command[1]);
            break;
        case 'count':
            break;
        case 'end':
            return 'finished';
            break;
        default:
            break;
    }
    return arr.join(' ');
}


console.log(commands('append delta'));
console.log(commands('prepend 00'));
console.log(commands('delete 2'));

console.log(commands('sort'));




