// 제출한 코드
/*
    처음에 input값을 제대로 처리해주지 않아서 런타임에러가 발생했었다. 
    input값 꼭 txt 파일에 저장해서 직접 구해보기!
*/
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => el.split(''));

const a = input[0];
const b = input[1];
let sum = 0;
for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < b.length; j++) {
        sum += a[i]*b[j];
    }
}

console.log(sum);