// 2884번, 알람 시계

'use strict'
let H = Number(prompt('몇 시입니까?'));
let M = Number(prompt('몇 분입니까?'));
let updateM = M-45;

if(updateM < 0) {
    updateM += 60;
    H--;

    if(H===-1) {
        H = 23;
    } 
} 
console.log(H, updateM);