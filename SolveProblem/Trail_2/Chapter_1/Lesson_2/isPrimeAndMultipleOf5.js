const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function isEven (number) {
    const tenDigit = Math.floor(number / 10);
    const singleDigit = number % 10;

    if ( (tenDigit + singleDigit) % 2 === 0) {
        return true;
    }
    return false;
}

function isPrime (number) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
}

function problem (A, B) {
    let count = 0;
    for (let i = A; i <= B; i++) {
        if (isEven(i) && isPrime(i)) {
            count++;
        }
    }
    return count;
}

process.stdout.write(String(problem(A, B)));