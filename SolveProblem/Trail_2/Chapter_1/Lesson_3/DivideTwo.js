const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.

function divideTwo (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i] = array[i] / 2;
        }
    }
}
divideTwo(arr);
console.log(arr.join(" "));

// 함수 이용해서 풀어보는 방법

arr = arr.map(num => num % 2 === 0 ? num / 2 : num);

arr = arr.map(element => {
    if (element % 2 === 0) {
        element = element / 2;
    }
})