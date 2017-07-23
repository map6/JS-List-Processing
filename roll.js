/**
 * Created by Milena Atanasova on 22.07.2017 г..
 */
function roll(arr, command) {
    // console.log(`In`);
    if (command === undefined || command === NaN || command === -1){
        console.log(`Error: invalid command parameters`);
        return
    }
        if (command === 'right') {
            arr = arr
                .slice(arr.length - 1)
                .concat(arr.slice(0, arr.length - 1))
                .slice(0);
            console.log(arr.join(' ') + '\n');
        } else if (command === 'left') {
            arr = arr
                .slice(1)
                .concat(arr.slice(0, 1))
                .slice(0);
            console.log(arr.join(' ') + '\n');
        } else {
            console.log(`Error: invalid command parameters`);
        }
}

module.exports = {roll};