const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);

function isLeapYear (year) {
    if (year % 4 === 0) {
        if (year % 400 === 0 && year % 100 === 0) {
            return true;
        } else if (year % 100 === 0) {
            return false;
        }
        return true;
    }
    return false;
}

function isExist (year, month) {
    if (month === 2 && isLeapYear(year)) {
        return 29;
    }
    if (month === 2) {
        return 28;
    }
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    }
    return 31;
}

function printSeason (month) {
    if (3 <= month && month <= 5) {
        return "Spring";
    }
    if (6 <= month && month <= 8) {
        return "Summer";
    }
    if (9 <= month && month <= 11) {
        return "Fall"
    }
    return "Winter";
}

if (1 <= day && day <= isExist(year, month)) {
    process.stdout.write(printSeason (month));
} else {
    process.stdout.write("-1");
}