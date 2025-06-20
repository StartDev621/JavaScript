const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.

class Secret {
    constructor (secret_code, meeting_point, time) {
        this.secret_code = secret_code;
        this.meeting_point = meeting_point;
        this.time = time;
    }
    get() {
        console.log(`secret code : ${this.secret_code}\nmeeting point : ${this.meeting_point}\ntime : ${this.time}`);
    }
}

const secretAgent = new Secret(s_code, m_point, time);

secretAgent.get();