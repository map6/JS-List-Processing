function deleteFunc(input,index) {
    input = input.splice(index,1);
   console.log(input.join(' '));
}
module.exports = {deleteFunc};
