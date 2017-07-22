let append = require('./append').append;
let prepend = require('./prepend').prepend;
let functionDelete = require('./deleteFunc').deleteFunc;
let sort = require('./sortFunc').sortFuncion;
let count = require('./countFunc').count;
arr = ['alpha', 'beta', 'gamma'];
console.log(arr.join(' '));
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
            count(arr,command[1]);
            break;
        case 'end':
            return 'finished';
            break;
        default:
            break;
    }
    return arr.join(' ');
}


commands('append delta');
commands('prepend 00');
commands('delete 0');
commands('count alpha');

commands('sort');




