const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push([height, weight, i]);
}

class Student {
    constructor (height, weight, number) {
        this.height = height;
        this.weight = weight;
        this.number = number;
    }
    static cmp (a, b) {
        if (a.height === b.height) {
            if (a.weight === b.weight) {
                return a.number - b.number;
            }
            return b.weight - a.weight;
        }
        return b.height - a.height;
    }
    get () {
        return `${this.height} ${this.weight} ${this.number}`;
    }
}

const array = [];

for (let i = 0; i < students.length; i++) {
    array.push(new Student(students[i][0], students[i][1], students[i][2]));
}

array.sort(Student.cmp);

for (let j = 0; j < array.length; j++) {
    console.log(array[j].get());
}