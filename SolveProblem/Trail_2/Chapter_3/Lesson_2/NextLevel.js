// "아이디", "레벨"을 같이 저장할 수 있는 형태의 class를 정의하고, 2개의 객체를 선언한 후,
// 하나의 객체는 "아이디"에 "codetree", "레벨"에 10으로 각각 초기화하고 다른 객체는 새롭게
// 입력받은 값을 넣어 입출력 예제와 같이 출력하는 프로그램을 만들어보세요.

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.

class User {
    constructor (email, level) {
        this.email = email;
        this.level = level;
    }
    get() {
        return (`user ${this.email} lv ${this.level}`);
    }
}

const firstUser = new User("codetree", 10);
const secondUser = new User(user_id, level);

console.log(`${firstUser.get()}\n${secondUser.get()}`);