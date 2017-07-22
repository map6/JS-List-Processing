
function sortFuncion(arr) {
    arr =  arr.sort((a,b) => a-b);
    console.log(arr.join(' '));
}
module.exports = {sortFuncion};
