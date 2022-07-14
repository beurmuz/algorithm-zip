// 내가 푼 풀이
/*
    근데 이거 채점이 자꾸 아니라하네.. nodejs online editor에서도 맞다는데 왜 아니라는겨
*/
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/1264.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

if(input[input.length-1] === '#') input.pop();

let regex = /[aeiouAEIOU]/gi;
for(let i = 0; i < input.length; i++) {
    console.log(input[i].match(regex).length);
}


// 다른 풀이
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const answer = [];

// for (let i = 0; i < input.length - 1; i++) {
//   const result = input[i].replace(/[^aeiou]/gi, "");
//   answer.push(result.length);
// }

// console.log(answer.join("\n"));