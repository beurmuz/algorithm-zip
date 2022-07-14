const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/5585.txt';
let input = fs.readFileSync(file).toString().trim().split('\n')*1;

function solution(coinList, n) {
    let answer = 0;
    let change = 1000-n;
    for(let coin of coinList) {
        answer += Math.floor(change/coin);
        change = change%coin;
    }
    return answer;
}

const coinList = [500,100,50,10,5,1];
console.log(solution(coinList, input));