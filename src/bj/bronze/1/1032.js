const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/1032.txt';
let input = fs.readFileSync(file).toString().split('\n');

let N = input.shift()*1;
let fileList = [];
for(let i = 0; i < N;i++) {
    fileList.push(input[i]);
}

console.log(solution(fileList));

function solution(arr) {
  let answer = '';

  for(let i = 0; i < arr[0].length; i++) {
    let tmp = arr[0][i];
    let count = 0;
    
    for(let j = 0; j < arr.length; j++) {
        if(tmp !== arr[j][i]) {
            answer += '?';
            break;
        } else {
            count++;
        }
        if(count === arr.length) answer += tmp;
    }
  }
  return answer;
}