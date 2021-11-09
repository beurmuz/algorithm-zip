'use strict';

let S = 'baekjoon'.split('');
console.log(S);

let result = [];

for(let i = 97; i <= 122; i++) {
    let alphabet = String.fromCharCode(i);
    let answer = S.indexOf(alphabet);
    // console.log(`${alphabet}: ${answer}`);
    result += `${answer} `;
}
console.log(result);
