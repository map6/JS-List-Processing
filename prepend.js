function prepend(arr, commandName) {
    arr.unshift(commandName);
    console.log(arr.join(' '));

}

module.exports = {prepend};