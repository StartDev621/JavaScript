const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

const array = [];

for (let i = 0; i < rawStudentData.length; i++) {
    array.push(rawStudentData[i].trim().split(" "));
}
function cmp (prev, cur) {
    if (prev[1] === cur[1]) {
        if (prev[2] === cur[2]) {
            return cur[3] - prev[3];
        }
        return cur[2] - prev[2];
    }
    return cur[1] - prev[1];
}

array.sort(cmp);

for (let j = 0; j < array.length; j++) {
    console.log(array[j].join(" "));
}

// 클래스를 이용하기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

class Student {
    constructor(name, KOR, ENG, MATH) {
        this.name = name;
        this.KOR = KOR;
        this.ENG = ENG;
        this.MATH = MATH;
    }
    static cmp(prev, cur) {
        return (+prev.KOR + +prev.ENG + +prev.MATH) - (+cur.KOR + +cur.ENG + +cur.MATH);
    }
    get() {
        return `${this.name} ${this.KOR} ${this.ENG} ${this.MATH}`;
    }
}

const students = [];

for (let i = 0; i < n; i++) {
    students.push(new Student(studentData[i][0], studentData[i][1], studentData[i][2], studentData[i][3]))
}

students.sort(Student.cmp);

for (let i = 0; i < students.length; i++) {
    console.log(students[i].get());
}