// 세 정수 a, b, c가 주어지면 그 수를 전달받아 최솟값을 구하여 출력하는 프로그램을 작성해보세요.
// 이 때, 주어진 세 정수 a, b, c를 전달받아 최솟값을 구하는 함수를 작성하고, 주어진 a, b, c를 함수로 전달하여 출력합니다.

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ");

const [a, b, c] = input.map(Number);

function min (a, b, c) {
    const minimum = Math.min(a, b, c);
    return String(minimum);
}

process.stdout.write(min(a, b, c));