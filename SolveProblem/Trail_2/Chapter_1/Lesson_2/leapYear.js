// 윤년을 판단하는 함수를 작성해주세요.
// 4로 나누어 떨어지는 해는 윤년, 그 밖의 해는 평년입니다.
// 예외적으로 100으로 나누어 떨어지되 400으로 나누어 떨어지지 않는 해는 평년으로 취급합니다.

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const inputNumber = Number(input);

function isLeapYear (year) {
    if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

process.stdout.write(String(isLeapYear(inputNumber)));