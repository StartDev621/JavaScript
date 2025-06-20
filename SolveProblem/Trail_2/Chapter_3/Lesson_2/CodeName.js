const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [code0, s0] = input[0].split(' ');
const score0 = Number(s0);
const [code1, s1] = input[1].split(' ');
const score1 = Number(s1);
const [code2, s2] = input[2].split(' ');
const score2 = Number(s2);
const [code3, s3] = input[3].split(' ');
const score3 = Number(s3);
const [code4, s4] = input[4].split(' ');
const score4 = Number(s4);

class CodeName {
    constructor(codeName, score) {
        this.codeName = codeName;
        this.score = score;
    }
}

const Codes = [
    new CodeName(code0, score0),
    new CodeName(code1, score1),
    new CodeName(code2, score2),
    new CodeName(code3, score3),
    new CodeName(code4, score4),
];

for (let i = 0; i < Codes.length - 1; i++) {
    let min = 0;
    if (Codes[i].score < Codes[i + 1].score) {
        let memory = Codes[i + 1];
        Codes[i + 1] = Codes[i];
        Codes[i] = memory;
    }
}
process.stdout.write(Codes[Codes.length - 1].codeName + " " + String(Codes[Codes.length - 1].score));