'use strict';

let input = require('fs').readFileSync('./1712.txt').toString().split(' ');
const A = (input[0])*1; // 고정 비용
const B = (input[1])*1; // 가변 비용 
const C = (input[2])*1; // 상품 가격

const margin = C - B;
const count = Math.floor(A / margin) + 1
console.log(margin <= 0 ? -1 : count);