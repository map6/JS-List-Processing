let append = require('./append').append;
let prepend = require('./prepend').prepend;
let insert = require('./insert').insert;

let arr = ['alpha', 'beta', 'gamma'];

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
            // if (command[1] >= arr.length || command[1] < 0) {
            //     throw new Error(`Invalid index ${command[1]}`);
            // }
            insert(arr, command[1], command[2]);
            break;
        case 'roll':
            break;
        case 'sort':
            break;
        case 'count':
            break;
        case 'end':
            return console.log('finished');
            break;
        default:
            break;
    }
    // return arr.join(' ');
}


commands('append delta');
commands('prepend 00');
commands('end');
commands('insert 1 ins');
// commands('insert -1 ins');




