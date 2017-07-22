
function append(arr, commandName) {
    arr.push(commandName);
    console.log(arr.join(' '));
}

module.exports = {append};