'use strict';

let input = require('fs').readFileSync('./2941.txt').toString();

// console.log(input);
let count = 0;
let changeArr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=','z='];
for(let i = 0; i < changeArr.length; i++) {
    if(input.indexOf(changeArr[i])) {
        input = input.replace(changeArr[i],'');
        count++;
        
        console.log('값이 있는게 확인되었어요.');
    }
    console.log(`한바퀴 돈 후 count: ${count}, input: ${input}`);
}
// if(input.indexOf('c=')) {
//     input = input.replace('c=', '');
//     count++;
// }
// if(input.indexOf('c-')) {
//     input = input.replace('c-', '');
//     count++;
// }
// if(input.indexOf('dz=')) {
//     input = input.replace('dz=', '');
//     count++;
// }
// if(input.indexOf('d-')) {
//     input = input.replace('d-', '');
//     count++;
// }
// if(input.indexOf('lj')) {
//     input = input.replace('lj', '');
//     count++;
// }
// if(input.indexOf('nj')) {
//     input = input.replace('nj', '');
//     count++;
// }
// if(input.indexOf('s=')) {
//     input = input.replace('s=', '');
//     count++;
// }
// if(input.indexOf('z=')) {
//     input = input.replace('z=', '');
//     count++;
// }

// console.log(count);
// console.log(input);