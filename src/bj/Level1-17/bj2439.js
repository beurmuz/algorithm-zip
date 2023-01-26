'use strict'

const n = 5;
for(let i = 0; i < n; i++) {
    let star = '';

    for(let j = n-1; j >= 0; j--) {
        star += j <= i ? '*' : ' ';
    }
    console.log(star);
}