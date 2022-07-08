// 내가 푼 풀이
/*
    입력의 끝이 '#'이면 pop()해서 제거해주기
    분명 맞을텐데 런타임 에러가 발생한다. 정답을 복붙해서 넣어도똑같이 런타임에러 발생 
*/
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = require('fs').readFileSync('./1264.txt').toString().trim().split('\n');
if (input[input.length-1] === '#') input.pop();

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