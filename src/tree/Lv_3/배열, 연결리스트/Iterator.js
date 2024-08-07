// ----------------------------------------------------------------------
/**
 * 🔍 황금비율 토스트 | O | 24.08.07 🔍
 *
 * [배열, 연결리스트 - Iterator]
 */
// 처음에 푼 풀이 (연결리스트 없이 내장 함수만을 이용) => 시간 초과 발생
let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
let datas = inputs[1].split("");
const commands = inputs.slice(2);
let it = datas.length; // 처음엔 맨 마지막을 가리키고 있음 

for(let i = 0; i < M; i++) {
    let [command, string] = commands[i].split(" ");

    if(command === 'L') {
        if(it > 0) it -= 1;
    } else if (command === 'R') {
        if(it < datas.length) it += 1;
    } else if (command === 'D') {
        if(it === datas.length) continue;
        else datas = datas.slice(0, it).concat(datas.slice(it + 1));
    } else if (command === 'P') {
        let front = datas.slice(0, it);
        front.push(string);
        datas = front.concat(datas.slice(it + 1));
        it += 1;
    }
}
console.log(datas.join(""));