const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

// Please write your code here.

function cmp (a, b) {
    return (+a[1] + +a[2] + +a[3]) - (+b[1] + +b[2] + +b[3]);
}

studentData.sort(cmp);

for (let i = 0; i < studentData.length; i++) {
    console.log(studentData[i].join(" "));
}

class Student {
    constructor(KOR, ENG, MATH) {
        this.KOR = KOR;
        this.ENG = ENG;
        this.MATH = MATH;
    }
}

const students = [];

for (let i = 0; i < n; i++) {
    students.push(studentData[i]);
}
