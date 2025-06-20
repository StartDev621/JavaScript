const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.
function isPalindrome (str) {
    reverseStr = [...str].reverse().join("");
    return reverseStr === str;
}

isPalindrome(str) ? process.stdout.write("Yes") : process.stdout.write("No");