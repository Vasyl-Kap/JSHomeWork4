// #2,1

let n = +prompt('write number');
let result = 1;
let i = 0;
while (i < n) {
    result = result * (n-i);
    i++
}
console.log(n + '! = ' + result)