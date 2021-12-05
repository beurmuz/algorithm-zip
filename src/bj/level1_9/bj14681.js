// 14681번, 사분면고르기

'use strict'
const numX = 5;
const numY = 8;

if(numX>0 && numY>0) {
    console.log(1);
} else if(numX<0 && numY>0) {
    console.log(2);
} else if(numX<0 && numY<0) {
    console.log(3);
} else if(numX>0 && numY<0) {
    console.log(4);
}