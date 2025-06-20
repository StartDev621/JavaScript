const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

function checkRepeat (str) {
    const checkStr = [];
    for (let i = 0; i < str.length; i++) {
        if (!checkStr.includes(str[i])) {
            checkStr.push(str[i]);
        }
    }

    if (checkStr.length >= 2) {
        return true;
    }
    return false;
}

process.stdout.write(checkRepeat(A) ? "Yes" : "No");