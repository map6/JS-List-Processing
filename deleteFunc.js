function deleteFunc(input,index) {
    input.splice(index,1);
    return input.join(' ');
}
module.exports = {deleteFunc};
