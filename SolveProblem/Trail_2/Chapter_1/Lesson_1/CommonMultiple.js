const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ");

const inputNumber = input.map(Number);

function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
console.log(lcm(123456, 789012)); // 빠르게 출력
