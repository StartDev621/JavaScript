let a = [
    [2, 0, 1, 5],
    [0, 4, 1, 1],
    [1, 4, 0, 0],
];

function func(inputNumber) {
    for (let i = 0; i < 4; i++) {
        a[inputNumber][i] = a[(inputNumber + 1) % 3][(i + 1) % 4]
    }
}

func(1);
func(2);
func(0);

let result = 0;
for (let i = 0; i < 3; i++) {
    result += a[i][(i + 1) % 4];
}

console.log(result);

/*

[2, 0, 1, 5],
[0, 4, 1, 1],
[1, 4, 0, 0]

Operate func(1)

[2, 0, 1, 5],
[4, 0, 0, 1],
[1, 4, 0, 0]

Operate func(2)

[2, 0, 1, 5],
[4, 0, 0, 1],
[0, 1, 5, 2]

Operate func(0)

[0, 0, 1, 4],
[4, 0, 0, 1],
[0, 1, 5, 2]

Operate for( ... ) syntax

0 + 0 + 2 = 2

*/