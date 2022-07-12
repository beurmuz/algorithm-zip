const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/2439.txt';
let input = fs.readFileSync(file).toString().split('\n');

// 내 풀이 - 중첩 for문 이용하기
let result = '';
let blank = '';
for (let i = 1; i <= input[0]; i++){
  result += "*";
  for (let j = 0; j < input[0]-i; j++){
    blank += ' ';
  }
  console.log(blank + result); // 반복문으로 *와 ' ' 을 만들어 준 후 이어붙이기
  blank = '';
}


// join 이용하기
let n = input[0]*1;
let starArray = Array.from({length: n}, () => ' ');

for(let i = n-1; i >= 0; i--) {
    starArray[i] = '*';
    console.log(starArray.join(''));
}


// repeat 이용하기
for(let i = 1; i <= n; i++) {
    console.log(' '.repeat(n-i) + '*'.repeat(i));
}