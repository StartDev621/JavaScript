const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ");

let [n, m] = input.map(Number);

function swap (n, m) {
    const [number1, number2] = [m, n];
    return [number1, number2];
}

[n, m] = swap(n, m);

process.stdout.write(`${n} ${m}`);
