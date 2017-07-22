/**
 * Created by mila on 22/07/2017.
 */
function insert(arr, commandArg1, commandArg2) {

    // if (commandArg1 >= arr.length || commandArg1 < 0) {
    //     throw Error(`Invalid index ${commandArg1}`);
    // }
    arr.splice(commandArg1, 0, commandArg2);
    console.log(arr.join(' '));
}

module.exports = {insert};