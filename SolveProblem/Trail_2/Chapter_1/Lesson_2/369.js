// 정수 A와 B가 주어지면, A이상 B이하 수들 중 3, 6, 9 중에 하나가 들어가 있거나 그 수 자체가
// 3의 배수인 수의 개수를 세는 프로그램을 작성해보세요. 단, 함수를 이용하여 문제를 해결해주세요.

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ");

const [A, B] = input.map(Number);

function includeNumber (number) {
    const numberArr = number.toString().split("");
    if(numberArr.includes("3") || numberArr.includes("6") || numberArr.includes("9")) {
        return true;
    } else {
        return false;
    }
}

function problem (number) {
    return number % 3 === 0 || includeNumber(number);
}

let count = 0;

for (let i = A; i <= B; i++) {
    if (problem(i)) {
        count++;
    }
}

process.stdout.write(String(count));