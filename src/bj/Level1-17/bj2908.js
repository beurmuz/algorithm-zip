let input = require('fs').readFileSync('./2908.txt').toString().split(' ');

function reverseNum(input) {
    let reverseNum1 = input[0].split('').reverse().join('');
    let reverseNum2 = input[1].split('').reverse().join('');
    console.log(reverseNum1 > reverseNum2 ? reverseNum1 : reverseNum2);
}

reverseNum(input);