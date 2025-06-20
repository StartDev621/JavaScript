// 2자리 숫자 n이 주어졌을 때, n이 짝수이면서 각 자리 숫자의 합이 5의 배수이면 "Yes"를,
// 아니라면 "No"를 출력하는 프로그램을 작성해보세요. 단, 함수를 이용하여 문제를 해결해주세요.

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const inputNumber = Number(input);

function isTrue (number) {
    const tenDigit = Math.floor(number / 10);
    const singleDigit = number % 10;

    if (number % 2 === 0 && (tenDigit + singleDigit) % 5 === 0) {
        return "Yes";
    } else {
        return "No";
    }
}

process.stdout.write(isTrue(inputNumber));