let arr = 'abcdef';
function reverse(arr) {
    let arr2=[...arr];
    return arr2.reverse().join('');
}
console.log(reverse(arr));