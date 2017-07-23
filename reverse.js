/**
 * Created by Milena Atanasova on 22.07.2017 г..
 */
function reverse(arr) {
    if (arr.length < 0) {
        console.log(`Error: invalid command parameters`);
        return;
    }
    console.log(arr.reverse().join(' ').toString());
}

module.exports = {reverse};