'use strict';

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift()*1;
let bookList = {};

let maxCount = 0;
let maxName = '';
input.forEach((name) => {
    if(bookList[name]) bookList[name]++;
    else bookList[name] = 1;
    
    if(bookList[name] === maxCount && name < maxName) maxName = name; // 현재 값 넣기 
    else if(bookList[name] > maxCount) {
        maxName = name;
        maxCount = bookList[name];
    }
});

console.log(maxName);