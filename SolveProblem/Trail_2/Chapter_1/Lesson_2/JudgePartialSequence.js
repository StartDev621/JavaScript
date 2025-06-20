const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

function problem (a, b) {
    for (let i = 0; i + n2 <= n1; i++) {
        if (a.slice(i, i + n2).join("") === b.join("")) {
            return true;
        } 
    }
    return false;
}
problem(a, b) ? process.stdout.write("Yes") : process.stdout.write("No");