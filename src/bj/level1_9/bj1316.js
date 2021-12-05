let input = require('fs').readFileSync('./1316.txt').toString().split('\r\n');
// console.log(input);
let num = input[0];
let count = 0;
for(let i = 1; i <= num; i++) {
    const word = input[i];
    const letter = [];
    let isGroupWord = true;

    for(let j = 0; j < word.length; j++) {
        if(letter.indexOf(word[j] === -1)) {
            letter.push(word[j]);
            console.log(letter);
        } else {
            if(letter.indexOf(word[j]) !== letter.length-1) {
                isGroupWord = false;
                break;
            }
        }
    }
    if(isGroupWord) {
        count++;
    }
}

console.log(count);