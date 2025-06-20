// 정수 N이 주어지면 1부터 전달받은 수까지의 합을 10으로 나눈 값을 반환하는 함수를 작성하고,
// 함수로 전달하여 출력하는 프로그램을 작성해보세요. 단, 나머지는 버리고 몫만 출력합니다.

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const number = Number(input);

function add (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return Math.floor(sum / 10);
}

const result = String(add(number));

process.stdout.write(result);

