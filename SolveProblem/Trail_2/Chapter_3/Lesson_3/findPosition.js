// 양의 정수를 원소로 갖는 길이가 N인 수열이 입력으로 주어졌을 때, 이 수열을 오름차순으로
// 정렬했을 때 각각의 위치에 있던 원소가 어느 위치로 이동하는지 출력하는 코드를 작성해보세요.

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const copyArr = [...arr];
copyArr.sort((a, b) => a - b);

const sequence = [];

for (let i = 0; i < arr.length; i++) {
    let changeIndex = copyArr.indexOf(arr[i]);
    sequence.push(changeIndex + 1);
    copyArr[changeIndex] = 0;
}

process.stdout.write([...sequence].join(" "));