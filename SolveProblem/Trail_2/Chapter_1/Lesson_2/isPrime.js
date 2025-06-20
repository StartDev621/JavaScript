// 정수 A와 B가 주어지면, A 이상 B 이하 소수들의 합을 구해주는 프로그램을 작성해보세요.
// 단, 함수를 이용하여 문제를 해결해주세요.

const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ");

const [A, B] = input.map(Number);

function isPrime (startNumber, endNumber) {
    let result = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        let count = 0;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                count++;
            } 
        }
        if(count === 0) {
            result += i;
        }
    }
    return result;
}

process.stdout.write(String(isPrime(A, B)));